import React from "react";
import Image from "next/image";
import {
  IconAlarm,
  IconSearch,
  IconShoppingBag,
  IconUser,
} from "@tabler/icons-react";
const Nabar = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className=" flex flex-row justify-between item-center gap-16 py-8 ">
          {/*button*/}
          <div className="flex flex-row justify-start gap-16">
            <div>
              <button>Home</button>
            </div>
            <div>
              <button>Product</button>
            </div>
            <div>
              <button>Category</button>
            </div>
            <div>
              <button>Sale</button>
            </div>
          </div>
          <div>
            Website name<div className="flex flex-col"></div>
          </div>
          {/*input*/}
          <div className="flex flex-row item-center gap-16">
            <div className="relative w-fit h-fit">
              <input
                placeholder="Search"
                className="border border-black rounded"
              />
              <IconSearch className="absolute  top-0 right-2 " stroke={2} />
            </div>
            <div>
              <button>
                <IconShoppingBag stroke={2} />
              </button>
            </div>
            <div>
              <button>
                <IconUser stroke={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-black py-4" />
    </>
  );
};

export default Nabar;
