import {
  IconBrandFacebook,
  IconBrandGoogleFilled,
  IconSquareRotatedFilled,
} from "@tabler/icons-react";
import { div, hr } from "framer-motion/client";
import Link from "next/link";
import React from "react";

export default function Userlogin() {
  return (
    <>
      <div className="container mx-auto">
        <div className="bg-orange-50 flex flex-row gap-32">
          <div className=" flex flex-row justify-between items-center gap-4">
            {/*kossher*/}
            <div className=" flex flex-col justify-start text-center font-bold text-4xl py-2">
              Get more benefits <div>by Sign Up & Join </div>X Community!
            </div>
            <div className="flex flex-col gap-4 py-2">
              <div className=" flex flex-row gap-2 ">
                <IconSquareRotatedFilled stroke={2} />
                FREE Special Gift to a new member
              </div>
              <div className=" flex flex-row gap-2">
                <IconSquareRotatedFilled stroke={2} />
                Get 2x JIWOO Points to purchase items
              </div>
              <div className=" flex flex-row gap-2">
                <IconSquareRotatedFilled stroke={2} />
                Get special voucher code every month
              </div>
              <div className=" flex flex-row gap-2">
                <IconSquareRotatedFilled stroke={2} />
                Claim Voucher Disc. Up To 50%
              </div>
            </div>
          </div>
          {/*vertical line*/}
          <div></div>
          {/*inputs*/}
          <div className="flex flex-col  w-fit h-fit  gap-8 py-8">
            <input
              placeholder="Full Name"
              className="border border-black rounded text-center "
            />
            <input
              placeholder="Email Address "
              className="border border-black rounded text-center "
            />
            <input
              placeholder="Password"
              className="border border-black rounded text-center "
            />
            <button className="border-black bg-white rounded-lg text-gray-350">
              Sign Up
            </button>
            <div className="flex flex-row justify-center items-center gap-4">
              <hr className="border-black w-24" />
              <div className="">Or</div>
              <hr className="border-black w-24" />
            </div>
            <Link href={""}>
              <div className="flex flex-row gap-4 bg-white rounded-md">
                <div className="text-orange-400">
                  <IconBrandGoogleFilled stroke={2} />
                </div>
                <button>SIGN UP WITH GOOGLE</button>
              </div>
            </Link>
            <Link href={""}>
              <div className="flex flex-row gap-4 bg-white rounded-md">
                <div className="text-white bg-blue-600 rounded-full">
                  <IconBrandFacebook stroke={2} />
                </div>
                <button>SIGN UP WITH GOOGLE</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
