"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import image from "next/image";
import { text } from "stream/consumers";

const Slider = () => {
  return (
    <>
      <Swiper className="mySwiper">
        <SwiperSlide>
          <div className="flex flex-row justify-center item-center gap-8">
            <Link
              className="flex flex-row justify-center item-center gap-8"
              href={""}
            >
              <div className=" gap-4">
                <div className="">
                  <Image src={""} alt={"goh"} width={398} height={436} />
                </div>
                <div className="flex flex-col text-center gap-2 font-semibold p-2">
                  Euphoria Crop Blouse{" "}
                  <div className="flex flex-col text-center">Rp. 125.000</div>
                </div>
              </div>
            </Link>
            <Link
              className="flex flex-row justify-center item-center gap-8"
              href={""}
            >
              <div className="">
                <div className="">
                  <Image src={""} alt={"goh"} width={398} height={436} />
                </div>
                <div className="flex flex-col text-center gap-2 font-semibold p-2">
                  product name
                  <div className="flex flex-col text-center">product price</div>
                </div>
              </div>
            </Link>
            <Link
              className="flex flex-row justify-center item-center gap-8"
              href={""}
            >
              <div className="">
                <div className="">
                  <Image src={""} alt={"goh"} width={398} height={436} />
                </div>
                <div className="flex flex-col text-center gap-2 font-semibold p-2">
                  product name
                  <div className="flex flex-col text-center">product price</div>
                </div>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row justify-center item-center gap-8">
            <Link
              className="flex flex-row justify-center item-center gap-8"
              href={""}
            >
              <div className="">
                <div className="">
                  <Image src={""} alt={"goh"} width={398} height={436} />
                </div>
                <div className="flex flex-col text-center gap-2 font-semibold p-2">
                  product name
                  <div className="flex flex-col text-center">product price</div>
                </div>
              </div>
            </Link>
            <Link
              className="flex flex-row justify-center item-center gap-8"
              href={""}
            >
              <div className="">
                <div className="">
                  <Image src={""} alt={"goh"} width={398} height={436} />
                </div>
                <div className="flex flex-col text-center gap-2 font-semibold p-2">
                  product name
                  <div className="flex flex-col text-center">product price</div>
                </div>
              </div>
            </Link>
            <Link
              className="flex flex-row justify-center item-center gap-8"
              href={""}
            >
              <div className="">
                <div className="">
                  <Image src={""} alt={"goh"} width={398} height={436} />
                </div>
                <div className="flex flex-col text-center gap-2 font-semibold p-2">
                  product name
                  <div className="flex flex-col text-center">product price</div>
                </div>
              </div>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Slider;
