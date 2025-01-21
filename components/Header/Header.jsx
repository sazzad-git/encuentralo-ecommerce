"use client";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import viewFinder from "@/public/images/viewFinder.svg";
import question from "@/public/images/question.svg";
import user from "@/public/images/user.svg";
import { Button } from "../ui/button";
import FilterMenu from "../FilterMenu/FilterMenu";
import { useState } from "react";

export default function Header() {
  const [filterMenu, setFilterMenu] = useState(false);

  return (
    <>
      <div className="bg-white border-b border-[#cacaca]">
        <div className="custom-container">
          <div className="header-head flex items-center h-auto md:h-[100px] py-3 md:py-0 justify-between gap-3">
            <div className="logo-box">
              <Image
                className="max-w-[110px] sm:max-w-[170px] cursor-pointer"
                src={logo}
                alt="Logo"
              />
            </div>
            <div className="search-box relative w-[70%] md:w-[600px] h-[25px] md:h-[50px] pe-8 md:pe-24 border border-[#cacaca] rounded-full md:rounded-lg ms-0 md:ms-10">
              <input
                className="ps-8 pe-8 md:ps-12 w-full absolute top-0 left-0 h-full text-[10px] md:text-base outline-none rounded-full md:rounded-lg"
                type="text"
                placeholder="Buscar productos, marcas y más..."
              />
              <i className="fa-solid fa-magnifying-glass size-3 lg:size-5 text-[#A06205] absolute top-1/2 left-[12px] -translate-y-1/2"></i>

              <div className="filter-icon md:h-[24px] absolute top-1/2 right-[7px] -translate-y-1/2 flex items-center justify-end gap-3">
                <Image
                  className="cursor-pointer hidden md:block"
                  width={24}
                  src={viewFinder}
                  alt="Camera ViewFinder"
                />

                <div
                  onClick={() => setFilterMenu(!filterMenu)}
                  className="bg-[#A06205] h-[20px] w-[20px] md:h-[40px] md:w-[40px] grid place-items-center rounded-md cursor-pointer"
                >
                  <i className="fa-solid fa-sliders size-3 lg:size-5 text-white"></i>
                </div>
              </div>

              {filterMenu && <FilterMenu></FilterMenu>}
            </div>

            <div className="lg:flex items-center gap-6 justify-end hidden">
              <div className="items-center gap-4 hidden lg:flex ml-5">
                <Image
                  className="cursor-pointer"
                  width={25}
                  src={question}
                  alt="Question"
                />
                <Image
                  className="cursor-pointer"
                  width={22}
                  src={user}
                  alt="User"
                />
              </div>

              <Button className="ml-10 h-[52px] w-[150px] overflow-hidden bg-[#E8B30A] hover:bg-[#E8B30A] rounded-full text-base border-[1.5px] border-black text-black">
                Únete!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
