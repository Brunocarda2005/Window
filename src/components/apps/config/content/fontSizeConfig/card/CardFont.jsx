

export default function CardFont(params) {
  return (
    <div className="app__config__font__content__config__card" id={params.text}>
      <p>{params.text}</p>
      {params.children}
    </div>
  );
}
