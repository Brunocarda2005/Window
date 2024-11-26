import { useEffect, useRef, useState } from "react";
import "./Tetris.css";

export default function Tetris() {
  const [game, setGame] = useState("pause");
  const Game = useRef(null);
  const Pointer = useRef(null);

  function GameStart() {
    const canvas = Game.current;
    const context = canvas.getContext("2d");

    const BLOCK_SIZE = 20;
    const BOARD_WIDTH = 15;
    const BOARD_HEIGHT = 30;
    const down = 1000;

    let dropCounter = 0;
    let lastTime = 0;
    let score = 0;

    canvas.width = BOARD_WIDTH * BLOCK_SIZE;
    canvas.height = BOARD_HEIGHT * BLOCK_SIZE;
    context.scale(BLOCK_SIZE, BLOCK_SIZE);

    const board = Array.from({ length: BOARD_HEIGHT }, () =>
      Array(BOARD_WIDTH).fill(0)
    );

    const piece = {
      position: { x: 0, y: 0 },
      shape: [],
    };

    const PIECE = [
      [
        [0, 1, 0],
        [1, 1, 1],
      ],
      [[1, 1, 1, 1]],
      [
        [1, 1],
        [1, 1],
      ],
      [
        [1, 1, 0],
        [0, 1, 1],
      ],
      [
        [0, 1, 1],
        [1, 1, 0],
      ],
      [
        [1, 1, 1],
        [0, 0, 1],
      ],
      [
        [1, 1, 1],
        [1, 0, 0],
      ],
    ];

    let randomNum = floor(random() * PIECE.length);
    piece.shape = PIECE[randomNum];

    function Update(time = 0) {
      const deltaTime = time - lastTime;
      lastTime = time;
      dropCounter += deltaTime;
      if (dropCounter > down) {
        piece.position.y++;
        dropCounter = 0;
        if (DetectedColition()) {
          piece.position.y--;
          solidifyPiece();
          removeRow();
        }
      }
      draw(); // Dibuja primero el tablero y la pieza
      window.requestAnimationFrame(Update);
    }

    function draw() {
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      board.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value === 1) {
            context.fillStyle = "#09f";
            context.fillRect(x, y, 1, 1);
          }
        });
        piece.shape.forEach((row, py) => {
          row.forEach((value, px) => {
            if (value === 1) {
              context.fillStyle = "#09f";
              context.fillRect(
                px + piece.position.x,
                py + piece.position.y,
                1,
                1
              );
            }
          });
        });
      });

      Pointer.current.innerText = score;
    }

    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        piece.position.y++;
        if (DetectedColition()) {
          piece.position.y--;
          solidifyPiece();
          removeRow();
        }
      }
      if (event.key === "ArrowLeft") {
        piece.position.x--;
        if (DetectedColition()) {
          piece.position.x++;
        }
      }
      if (event.key === "ArrowRight") {
        piece.position.x++;
        if (DetectedColition()) {
          piece.position.x--;
        }
      }
      if (event.key === "ArrowUp") {
        Rotate(piece.shape);
      }
    });

    function DetectedColition() {
      return piece.shape.some((row, py) =>
        row.some(
          (value, px) =>
            value !== 0 &&
            board[py + piece.position.y]?.[px + piece.position.x] !== 0
        )
      );
    }

    function solidifyPiece() {
      piece.shape.forEach((row, py) => {
        row.forEach((value, px) => {
          if (value === 1) {
            board[py + piece.position.y][px + piece.position.x] = 1;
          }
        });
      });

      piece.position.y = 0;
      piece.position.x = 0;
      let randomNum = floor(random() * PIECE.length);
      piece.shape = PIECE[randomNum];
    }

    function removeRow() {
      const rowsToRemove = [];

      board.forEach((row, y) => {
        if (row.every((value) => value === 1)) {
          rowsToRemove.push(y);
        }
      });

      score += rowsToRemove.length;

      rowsToRemove.forEach((y) => {
        board.splice(y, 1);
        board.unshift(Array(BOARD_WIDTH).fill(0));
      });
    }

    function Rotate(matrix) {
      const rows = matrix.length;
      const cols = matrix[0].length;
      const rotatedMatrix = [];

      for (let i = 0; i < cols; i++) {
        rotatedMatrix[i] = [];
        for (let j = rows - 1; j >= 0; j--) {
          rotatedMatrix[i].push(matrix[j][i]);
        }
      }

      const previousShape = piece.shape;
      piece.shape = rotatedMatrix;
      if (DetectedColition()) {
        piece.shape = previousShape;
      }
    }

    Update();
  }

  useEffect(() => GameStart(), []);
  return (
    <main className="app__games__tetris">
      <header className="app__games__tetris__pointer" id="parentScore">
        <span className="app__games__tetris__pointer__span" ref={Pointer}>
          0
        </span>
      </header>
      <section className="app__games__tetris__content-game">
        <canvas className="canvas" ref={Game}></canvas>
        <div className={`app__games__tetris__content-game__play ${game}`}>
          <span onClick={() => setGame("start")}>Play</span>
          <span onClick={() => setGame("exit")}>Exit</span>
        </div>
      </section>
    </main>
  );
}
