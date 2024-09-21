import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitterFilled,
  IconBrandYoutubeFilled,
  IconCopyright,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
export default function Footer() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center">
          <div className="flex  justify-start  gap-32 ">
            <div className=" py-8 text-2xl ">
              Xcompany<div className="flex flex-col"></div>
            </div>
            <div className="flex flex-col py-4">
              <div className="font-bold">About Us</div>
              <div>
                <Link href={""}>News</Link>
              </div>
              <div>
                <Link href={""}>Official Store</Link>
              </div>
              <div>
                <Link href={""}>Company</Link>
              </div>
              <div>
                <Link href={""}>Careers</Link>
              </div>
            </div>

            <div className="flex flex-col py-4">
              <div className="font-bold">Get Help</div>
              <div>
                <Link href={""}>FAQ</Link>
              </div>
              <div>
                <Link href={""}>Shipping</Link>
              </div>
              <div>
                <Link href={""}>Payment </Link>
              </div>
              <div>
                <Link href={""}>Returns</Link>
              </div>
              <div>
                <Link href={""}>Contact Us</Link>
              </div>
            </div>
            <div className="flex flex-col py-2">
              <div className="font-bold">Follow Us</div>
              <div className="flex flex-row justify-center items-center gap-4">
                <div className="text-white">
                  <Link href={""}>
                    <IconBrandFacebook
                      stroke={2}
                      className="bg-blue-600 rounded-full"
                    />
                  </Link>
                </div>
                <div className="text-pink-500">
                  <Link href={""}>
                    <IconBrandInstagram stroke={2} />
                  </Link>
                </div>
                <div className="text-blue-400">
                  <Link href={""}>
                    <IconBrandTwitterFilled stroke={2} />{" "}
                  </Link>
                </div>
                <div className="text-red-700">
                  <Link href={""}>
                    <IconBrandYoutubeFilled stroke={2} />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end place-items-baseline font-bold gap-4">
        <Link href={""}>Guide</Link>
        <Link href={""}>Terms & Conditions</Link>
        <Link href={""}>Privacy Policy</Link>
      </div>

      <div className="container mx-auto">
        <div className="bg-black h-8">
          <div className="text-white flex flex-row justify-center">
            <IconCopyright />
            20xx Xcompany. All Rights Reserved
          </div>
        </div>
      </div>
    </>
  );
}
