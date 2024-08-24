import { MainCarrousel } from "@/components/MainCarrousel";
import { CardLink } from "@/components/CardLink";
import Image from 'next/image'
import mercado from "../img/2022-04-14.jpg"
import foto1 from "../img/2.jpeg"

export default function Home() {
  return (
    <main className="">
      <div className="flex justify-center">
        <MainCarrousel />
      </div>
      <div className="flex md:justify-center flex-wrap">
        <div className="max-w-2xl m-4">
          <div className="text-4xl my-4">
            Mercado são sebastião
          </div>
          <div>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
        <div className="md:max-w-2xl m-4 w-full">
          <Image
            src={mercado}
            alt="Picture of the author"
            sizes="100vw"
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>
      <div className="flex md:justify-center flex-wrap">
        <CardLink foto={foto1} message="Entre em contato com os nossos lojistas" label="fale agora" link="Fale agora" />
        <CardLink foto={foto1} message="Entre em contato com os nossos lojistas" label="fale agora" link="Fale agora"/>
      </div>
      <div className="flex justify-center bg-orange-200">
        <MainCarrousel />
      </div>
    </main>
  );
}



