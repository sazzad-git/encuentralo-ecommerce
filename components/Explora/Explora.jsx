"use client";
import Image from "next/image";
import shopLogo from "@/public/images/shoplogo.png";
import { MdOutlineHome, MdOutlineRecycling } from "react-icons/md";
import { LuTruck } from "react-icons/lu";
import React, { useState, useEffect } from "react";
import img from "@/public/Poleronchampionblue1.png";
import imgOne from "@/public/clothing_01.png";
import imgTwo from "@/public/clothing_02.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Aos from "aos";
import "aos/dist/aos.css";

export default function SimpleSlider() {
  const data = [1, 2, 3, 4, 5, 6];

  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // use aos animation on scroll
    Aos.init({ duration: 2000 });

    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div
      data-aos="fade-down-left"
      className="custom-container py-5 hidden lg:block lg:mb-[90px] md:mb-[70px]"
    >
      <div className="flex items-center justify-between pb-2 md:pb-4 lg:pb-6 lg:mb-[25px]">
        <h2
          className={`font-semibold text-[14px] font-bridone md:text-[18px] lg:text-[40px] text-[#222222]`}
        >
          EXPLORA
        </h2>
        <div className="scroll-buttons items-center justify-end gap-5 hidden lg:flex">
          <button
            onClick={() => api?.scrollTo(current - 1)}
            className="grid place-items-center w-[46px] h-[46px] border border-[#A06205] rounded-full cursor-pointer active:bg-[#f4ede2]"
          >
            <i className="fa-solid fa-arrow-left-long text-[#A06205]"></i>
          </button>
          <button
            onClick={() => api?.scrollTo(current + 1)}
            className="grid place-items-center w-[46px] h-[46px] border border-[#A06205] rounded-full cursor-pointer active:bg-[#f4ede2]"
          >
            <i className="fa-solid fa-arrow-right-long text-[#A06205]"></i>
          </button>
        </div>
      </div>
      <Carousel
        opts={{
          align: "start",
          gap: "30px",
          loop: true,
        }}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent>
          {data.map((sData, index) => (
            <CarouselItem
              key={index}
              className="another-second basis-1/2 lg:basis-1/3"
            >
              <div className="item border rounded-[8px] bg-white">
                <div className="flex justify-between p-2 lg:p-4 relative items-center">
                  <div className="flex items-center gap-2 lg:gap-3">
                    <div className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] lg:w-[52px] lg:h-[52px] rounded-full">
                      <Image src={shopLogo} alt="Shop Logo" />
                    </div>
                    <div className="leading-0 lg:leading-[125%]">
                      <h4 className="text-[10px] md:text-[13px] lg:text-[20px]">
                        Aress.Cl
                      </h4>
                      <p className="lg:mt-1 text-[9px] md:text-[11px] lg:text-[16px] font-bold text-[#A06205]">
                        Accesorios{" "}
                        <span className="font-normal">/ Joyería</span>
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 flex items-center justify-end gap-1 lg:top-1/2 lg:-translate-y-1/2">
                    <div className="w-[12px] h-[13px] md:w-[16px] md:h-[16px] lg:w-[22px] lg:h-[24px] border border-[#F1F1F1] bg-white grid place-items-center rounded cursor-pointer">
                      <MdOutlineHome className="size-3 md:size-4 lg:size-5 text-[#BF8937]" />
                    </div>
                    <div className="w-[12px] h-[13px] md:w-[16px] md:h-[16px] lg:w-[22px] lg:h-[24px] border border-[#F1F1F1] bg-white grid place-items-center rounded cursor-pointer">
                      <LuTruck className="size-3 md:size-4 lg:size-5 text-[#BF8937]" />
                    </div>
                    <div className="w-[12px] h-[13px] md:w-[16px] md:h-[16px] lg:w-[22px] lg:h-[24px] border border-[#F1F1F1] bg-white grid place-items-center rounded cursor-pointer">
                      <MdOutlineRecycling className="size-3 md:size-4 lg:size-5 text-[#BF8937]" />
                    </div>
                  </div>
                </div>

                <div className="w-full h-[270px]">
                  <Image
                    className="w-full h-full object-cover"
                    src={img}
                    alt="Slider Cover"
                  />
                </div>

                <div className="flex items-center justify-between p-3">
                  <div className="w-[75px] h-[75px] border border-[#A06205] cursor-pointer relative">
                    <Image
                      className="w-full h-full object-cover"
                      src={img}
                      alt="Slider Cover"
                    />
                  </div>

                  <div className="w-[75px] h-[75px] border border-[#A06205] cursor-pointer relative">
                    <Image
                      className="w-full h-full object-cover"
                      src={imgOne}
                      alt="Slider Cover"
                    />
                  </div>

                  <div className="w-[75px] h-[75px] border border-[#A06205] cursor-pointer relative">
                    <Image
                      className="w-full h-full object-cover"
                      src={imgTwo}
                      alt="Slider Cover"
                    />
                  </div>

                  <div className="another-box w-[75px] h-[75px] border border-[#A06205] cursor-pointer relative">
                    <Image
                      className="w-full h-full object-cover"
                      src={img}
                      alt="Slider Cover"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
