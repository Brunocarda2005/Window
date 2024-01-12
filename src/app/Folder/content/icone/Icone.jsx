export default function Icone(params) {
  return (
    <div
      className="app__folder__content__elemts__content__icone"
      onClick={() => params.Icone({
        img: params.img,
        name: params.name
      })}
    >
      <img src={params.img} alt="" />
      <p>{params.name}</p>
    </div>
  );
}
