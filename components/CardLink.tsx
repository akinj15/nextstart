"use client"
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

export type ICardLink = {
  foto: StaticImageData,
  message: string,
  link: string,
  label: string,
}

export function CardLink({ foto, message, link, label }: ICardLink) {
  return (
    <div className="md:w-80 w-full m-4 rounded-lg shadow-2xl relative">
      <span className="sticky  top-2 left-0">
        {label}
      </span>
      <Image
        src={foto}
        alt="Picture of the author"
        className="h-auto rounded-t-lg brightness-50"
      />
      <div className="p-2">
        <div className="text-lg font-semibold	">
          {message}
        </div>
        <div>
          <Link className="underline text-sm" href={link}>{label}</Link>
        </div>
      </div>


    </div>
  );
}



