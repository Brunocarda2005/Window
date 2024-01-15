import Image from "next/image";
import Link from "next/link";

export default function Icone(params) {
  return (
    <Link href={`/${params.path}`}>
      <div
        className="app__folder__content__elemts__content__icone"
        onClick={() =>
          params.Icone({
            img: params.img,
            name: params.name,
          })
        }
      >
        <Image width={10} src={params.img} alt="" />
        <p>{params.name}</p>
      </div>
    </Link>
  );
}
