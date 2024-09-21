"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { div } from "framer-motion/client";
import { IconArrowRight } from "@tabler/icons-react";
export default function Product() {
  const tabsData = [
    {
      name: "Tab1",
      items: [
        {
          imageUrl: "",
          link: "#",
          text: "Eto V Neck Yellow",
          price: "Rp. 129.000",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
      ],
    },

    {
      name: "Tab2",
      items: [
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
      ],
    },
    {
      name: "Tab3",
      items: [
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
      ],
    },
    {
      name: "Tab3",
      items: [
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
      ],
    },
    {
      name: "Tab4",
      items: [
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
      ],
    },
    {
      name: "Tab5",
      items: [
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
        {
          imageUrl: "",
          link: "#",
          text: "",
          price: "",
        },
      ],
    },
  ];

  return (
    <>
      <div className="flex w-full flex-col justify-center items-center bg-orange-100 rounded-md">
        <Tabs aria-label="Dynamic tabs">
          {tabsData.map((item) => (
            <Tab key={item.name} title={item.name}>
              <div className="grid grid-cols-3 justify-between items-center gap-8 py-8">
                {item.items.map((item, index) => (
                  <ProductCard
                    key={index}
                    imageUrl={item.imageUrl}
                    link={item.link}
                    text={item.text}
                    price={item.price}
                  />
                ))}
              </div>
            </Tab>
          ))}
        </Tabs>
        <div className=" rounded bg-orange-200 w-32 ">
          <div className="relative w-fit h-fit">
            <IconArrowRight className="absolute left-24" stroke={2} />
            <button className="flex text-center">SEE MORE</button>
          </div>
        </div>
      </div>
    </>
  );
}

interface ProductCardProps {
  key: number;
  imageUrl: string;
  link: string;
  text: string;
  price: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  key,
  imageUrl,
  link,
  text,
  price,
}) => {
  return (
    <>
      <div
        key={key}
        className="flex flex-col justify-center items-center text-center "
      >
        <Link href={link}>
          <Image src={imageUrl} alt={"goh"} height={496} width={397} />
          {text}
          <br />
          {price}
        </Link>
      </div>
    </>
  );
};
