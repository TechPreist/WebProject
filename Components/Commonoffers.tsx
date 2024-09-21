import React from "react";
import Image from "next/image";
import Link from "next/link";
interface CommonOffersData {
  key?: string;
  link: string;
  image: string;
  text: string;
}
const CommonOffers = ({ key, link, image, text }: CommonOffersData) => {
  return (
    <>
      <Link href={""}>
        {" "}
        <div>
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="">
              <Image src={image} alt={"goh"} width={398} height={436} />
            </div>
            <div className="text-center gap-8 font-semibold p-2">{text}</div>
            <div>
              <button className="border borde-gray-150 p-2 rounded-md ">
                More...
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
export default CommonOffers;
