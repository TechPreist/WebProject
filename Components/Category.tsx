import Image from "next/image";
import Link from "next/link";
import React from "react";
interface CatergoryProps {
  key?: string;
  link: string;
  image: string;
  text: string;
}

const Category = ({ key, link, image, text }: CatergoryProps) => {
  return (
    <>
      <Link
        className="flex flex-col justify-center item-center gap-2 text-center w-fit"
        href={link}
      >
        <Image
          className="rounded-full"
          src={image}
          height={50}
          width={50}
          alt=""
        />
        {text}
      </Link>
    </>
  );
};

export default Category;
