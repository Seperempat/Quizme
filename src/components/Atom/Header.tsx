"use client";

import { IconClose, IconHumberger } from "@/assets/svg/icon";
import React, { useState, useEffect } from "react";
import Link from "../../../node_modules/next/link";
import Buttons from "../UI/Buttons";
import Datas from "@/utils/data/linking";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const OpenHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 480) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    setIsOpen(false);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`bg-white ${
          isScroll
            ? " transition-all duration-300 ease-in-out fixed top-0 w-full bg-slate-50 shadow-sm"
            : ""
        }`}
      >
        <nav className="flex justify-between   px-4 w-full py-6 sm:mx-auto sm:max-w-screen-xl sm:py-6 sm:px-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <button className={`sm:hidden`} onClick={OpenHandler}>
              <div className={`${isOpen ? "hidden" : "block"}`}>
                <IconHumberger width="30px" />
              </div>
              <div className={`${isOpen ? "block" : "hidden"}`}>
                <IconClose width="30px" />
              </div>
            </button>
            <h2 className="text-xl font-medium">QuizMe?</h2>
            {Datas.map((item, index) => (
              <Link href={item.link} key={index} className="hidden sm:flex">
                <Buttons variant="text" className="px-[2px]">
                  {item.title}
                </Buttons>
              </Link>
            ))}
          </div>
          <div>
            <Link href={"http://cloud-moored-buckthorn.glitch.me/"}>
              <Buttons className="py-3 px-7">Play</Buttons>
            </Link>
          </div>
        </nav>
        <div
          className={`sm:hidden absolute z-100 top-[92px] left-0 w-full ${
            !isOpen
              ? "hidden"
              : "h-auto bg-white py-3 ease-in-out overflow-hidden transition-all duration-300 shadow-sm"
          } `}
        >
          <div>
            {Datas.map((item, index) => (
              <div key={index}>
                <Link
                  href={item.link}
                  className="grid grid-cols-1 px-6 py-1 mb-2 focus:text-purple-500"
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
