"use client";
import "./Tetris.css";
import { floor, random } from "mathjs";
import { useEffect, useRef, useState } from "react";
import playIMG from "../../components/static/svg/play.svg";
import Image from "next/image";
import restartIMG from "../../components/static/svg/restart.svg";
import closeIMG from "../../components/static/svg/close.svg";
import Link from "next/link";

export default function Tetris() {
  const [gameState, setGameState] = useState("stop");
  const [score, setScore] = useState(0);

  const canvasRef = useRef(null);
  const gameLoopRef = useRef(null);

  const BLOCK_SIZE = 20;
  const BOARD_WIDTH = 15;
  const BOARD_HEIGHT = 30;
  const BORDER_COLOR = "#ff5722";
  const COLOR_PIECE = "#d84315";

  let dropInterval = 1000;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const board = createBoard();
    let piece = createPiece();

    canvas.width = BOARD_WIDTH * BLOCK_SIZE;
    canvas.height = BOARD_HEIGHT * BLOCK_SIZE;
    context.scale(BLOCK_SIZE, BLOCK_SIZE);

    if (gameState === "start") {
      let dropCounter = 0;
      let lastTime = 0;

      const handleKeyDown = (event) => {
        switch (event.key) {
          case "ArrowDown":
            movePieceDown(piece, board);
            break;
          case "ArrowLeft":
            movePiece(piece, board, -1);
            break;
          case "ArrowRight":
            movePiece(piece, board, 1);
            break;
          case "ArrowUp":
            rotatePiece(piece, board);
            break;
          default:
            break;
        }
      };

      const update = (time = 0) => {
        const deltaTime = time - lastTime;
        lastTime = time;
        dropCounter += deltaTime;

        if (dropCounter > dropInterval) {
          if (!movePieceDown(piece, board)) {
            solidifyPiece(piece, board);
            removeCompletedRows(board);
            piece = createPiece();

            if (detectCollision(piece, board)) {
              console.log("Game Over");
              setGameState("pause");
              return;
            }
          }
          dropCounter = 0;
        }

        drawGame(context, board, piece);
        gameLoopRef.current = requestAnimationFrame(update);
      };

      document.addEventListener("keydown", handleKeyDown);
      gameLoopRef.current = requestAnimationFrame(update);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        cancelAnimationFrame(gameLoopRef.current);
      };
    } else {
      drawBackground(context);
    }
  }, [gameState]);

  const createBoard = () => {
    return Array.from({ length: BOARD_HEIGHT }, () =>
      Array(BOARD_WIDTH).fill(0)
    );
  };

  // Definición de piezas en formato JSON
  const pieces = [
    {
      shape: [
        [0, 1, 0],
        [1, 1, 1],
      ],
    },
    {
      shape: [[1, 1, 1, 1]],
    },
    {
      shape: [
        [1, 1],
        [1, 1],
      ],
    },
    {
      shape: [
        [1, 1, 0],
        [0, 1, 1],
      ],
    },
    {
      shape: [
        [0, 1, 1],
        [1, 1, 0],
      ],
    },
    {
      shape: [
        [1, 1, 1],
        [0, 0, 1],
      ],
    },
    {
      shape: [
        [1, 1, 1],
        [1, 0, 0],
      ],
    },
  ];

  const createPiece = () => {
    const piece = pieces[floor(random() * pieces.length)];
    return {
      position: { x: Math.floor(BOARD_WIDTH / 2) - 1, y: 0 },
      shape: piece.shape,
      color: COLOR_PIECE,
      border: BORDER_COLOR,
    };
  };

  const movePiece = (piece, board, direction) => {
    piece.position.x += direction;
    if (detectCollision(piece, board)) {
      piece.position.x -= direction;
    }
  };

  const movePieceDown = (piece, board) => {
    piece.position.y += 1;
    if (detectCollision(piece, board)) {
      piece.position.y -= 1;
      return false;
    }
    return true;
  };

  const rotatePiece = (piece, board) => {
    const prevShape = piece.shape;
    piece.shape = piece.shape[0].map((_, colIndex) =>
      piece.shape.map((row) => row[colIndex]).reverse()
    );
    if (detectCollision(piece, board)) {
      piece.shape = prevShape;
    }
  };

  const detectCollision = (piece, board) => {
    return piece.shape.some((row, y) =>
      row.some((value, x) => {
        if (value !== 0) {
          const newY = y + piece.position.y;
          const newX = x + piece.position.x;
          return (
            newY >= BOARD_HEIGHT ||
            newX < 0 ||
            newX >= BOARD_WIDTH ||
            board[newY]?.[newX] !== 0
          );
        }
        return false;
      })
    );
  };

  const solidifyPiece = (piece, board) => {
    piece.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          board[y + piece.position.y][x + piece.position.x] = 1;
        }
      });
    });
  };

  const removeCompletedRows = (board) => {
    let rowsToRemove = 0;

    board.forEach((row, y) => {
      if (row.every((value) => value !== 0)) {
        rowsToRemove++;
        board.splice(y, 1);
        board.unshift(Array(BOARD_WIDTH).fill(0));
      }
    });

    if (rowsToRemove > 0) {
      setScore((prevScore) => prevScore + rowsToRemove * 100);
    }
  };

  const drawBackground = (context) => {
    for (let y = 0; y < BOARD_HEIGHT; y++) {
      for (let x = 0; x < BOARD_WIDTH; x++) {
        context.fillStyle = "#222"; // Color del fondo de la celda
        context.fillRect(x, y, 1, 1);
      }
    }
  };

  const drawGame = (context, board, piece) => {
    const { shape } = piece;

    context.lineWidth = 0.1; // Borde delgado para las celdas
    context.strokeStyle = BORDER_COLOR; // Color del borde

    drawBackground(context); // Dibujar el fondo primero

    // Dibujar piezas consolidadas
    board.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value === 1) {
          context.fillStyle = COLOR_PIECE; // Aquí aseguramos que use el color correcto
          context.fillRect(x, y, 1, 1); // Dibuja las piezas fijas
          context.strokeRect(x, y, 1, 1); // Dibuja el borde sutil de las piezas
        }
      });
    });

    // Dibujar la pieza actual (en movimiento)
    shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value === 1) {
          context.fillStyle = COLOR_PIECE; // Color específico para la pieza en movimiento
          context.fillRect(x + piece.position.x, y + piece.position.y, 1, 1);
          context.strokeRect(x + piece.position.x, y + piece.position.y, 1, 1);
        }
      });
    });
  };

  return (
    <main className="app__games__tetris">
      <section className="app__games__tetris__canvas">
        <section>
          <button
            onClick={() => setGameState("stop")}
            className="app__games__tetris__canvas__buttons"
          >
            <Image
              src={restartIMG}
              alt=""
              className="app__games__tetris__canvas__buttons__img"
              height={32}
              width={32}
            />
          </button>
          <Link href={"/"} className="app__games__tetris__canvas__buttons">
            <Image
              src={closeIMG}
              alt=""
              className="app__games__tetris__canvas__buttons__img"
              height={25}
              width={25}
            />
          </Link>
        </section>
        <section className="app__games__tetris__canvas__content">
          <div className="app__games__tetris__canvas__content__start ">
            <button
              className={`app__games__tetris__canvas__content__start__button ${gameState}`}
              onClick={() => setGameState("start")}
            >
              <Image
                src={playIMG}
                alt=""
                className="app__games__tetris__canvas__content__start__img"
                height={32}
                width={32}
              />
            </button>
          </div>
          <canvas
            ref={canvasRef}
            className="app__games__tetris__canvas__canva"
          ></canvas>
        </section>
        <section className="app__games__tetris__canvas__score">
          <div className="app__games__tetris__canvas__score__content">
            <h4 className="app__games__tetris__canvas__score__content__title">
              <span>S</span>
              <span>C</span>
              <span>O</span>
              <span>R</span>
              <span>E</span>
            </h4>
            <span className="app__games__tetris__canvas__score__content__score">
              {score}
            </span>
          </div>
        </section>
      </section>
    </main>
  );
}
