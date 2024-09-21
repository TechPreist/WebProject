import Category from "@/Components/Category";
import CommonOffers from "@/Components/Commonoffers";
import Footer from "@/Components/Footer";
import Nabar from "@/Components/Nabar";

import Slider from "@/Components/Slider";
import Tabs from "@/Components/Tabs";
import Userlogin from "@/Components/Userlogin";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const CommonOfferData = [
    {
      link: "/",
      image: "",
      text: "category",
    },
    {
      link: "/",
      image: "",
      text: "category",
    },
    {
      link: "/",
      image: "",
      text: "category",
    },
  ];
  const CommonOfferDatas = [
    {
      link: "/",
      image: "",
      text: "Product",
    },
    {
      link: "/",
      image: "",
      text: "Product",
    },
    {
      link: "/",
      image: "",
      text: "Product",
    },
  ];
  return (
    <>
      <div className="container mx-auto">
        <Nabar />
        <Image src={""} height={536} width={1440} alt="" />
        <div className="flex justify-center font-bold text-2xl">
          Season Collections
        </div>
        <div className="flex flex-row justify-center gap-8  py-8">
          {CommonOfferData.map((item, index) => (
            <CommonOffers
              link={item.link}
              image={item.image}
              text={item.text}
            />
          ))}
        </div>
        <div className="flex justify-center font-bold text-2xl p-4">
          Our Best Seller
        </div>
        <Slider />
        <Link href={""}>
          <Image src={""} alt={"chos"} height={536} width={1440} />
        </Link>
        <div className="flex justify-center font-bold text-2xl p-4">
          Our Products
        </div>
        <Tabs />
        <Userlogin />
        <Footer />
      </div>
    </>
  );
}
