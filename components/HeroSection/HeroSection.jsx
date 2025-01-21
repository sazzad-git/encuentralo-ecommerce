"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "@/public/hero/img1.png";
import img2 from "@/public/hero/img2.png";
import img3 from "@/public/hero/img3.png";
import hero1 from "../../public/hero/hero1.png";
import hero2 from "../../public/hero/hero2.png";
import hero3 from "../../public/hero/hero3.png";
import GroupRight from "@/public/hero/GrpupRight.svg";
import GroupLeft from "@/public/hero/GroupLeft.svg";
import { MdOutlineHome, MdOutlineRecycling } from "react-icons/md";
import { LuTruck } from "react-icons/lu";
import { Nunito } from "next/font/google";
import Aos from "aos";
import "aos/dist/aos.css";
import ProductCard from "./ProductCard";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nunito",
});

const products = [
  {
    id: 1,
    image: hero1,
    title: "Alba-Sofia-en-varas",
    title2: "Aros, Anillos, Collares",
    shopLogo: img1,
  },
  {
    id: 2,
    image: hero2,
    title: "Impulsonaturaltienda",
    title2: "Proteinas, Vitaminas, Minerales",
    shopLogo: img2,
  },
  {
    id: 3,
    image: hero3,
    title: "5ave.nue",
    title2: "Camisetas, Sudaderas, Pantalones",
    shopLogo: img3,
  },
  {
    id: 4,
    image: hero1,
    title: "Alba-Sofia-en-varas",
    title2: "Aros, Anillos, Collares",
    shopLogo: img1,
  },
  {
    id: 5,
    image: hero2,
    title: "Impulsonaturaltienda",
    title2: "Proteinas, Vitaminas, Minerales",
    shopLogo: img2,
  },
  {
    id: 6,
    image: hero3,
    title: "5ave.nue",
    title2: "Camisetas, Sudaderas, Pantalones",
    shopLogo: img3,
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      data-aos="zoom-out"
      className="relative h-[26vh] md:h-[85vh] lg:h-[65vh] bg-cover bg-center mb-[20px] md:mb-[160px] lg:mb-[200px] bg-no-repeat bg-[#DFDFDF] md:bg-[url('/hero/Hero.png')]"
    >
      <div className="absolute inset-0 md:bg-black md:bg-opacity-40 flex flex-col items-center">
        <h1 className="text-black font-bridone md:text-white text-xl md:text-5xl lg:text-[64px] font-bold text-center mt-[11px] mb-2 md:mt-[80px] md:mb-[80px]">
          EMPRENDIMIENTOS DESTACADOS
        </h1>
        <div
          data-aos="flip-down"
          className="w-11/12 max-w-7xl bg-opacity-90 rounded-lg p-0 md:p-4"
        >
          {/* Desktop View */}
          <div className="hidden md:block relative">
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".custom-swiper-button-prev",
                nextEl: ".custom-swiper-button-next",
              }}
              slidesPerView={3}
              spaceBetween={1}
              centeredSlides={true}
              loop={true}
              onSlideChange={handleSlideChange}
              className="md:max-w-[1111px] lg:max-w-[1161px]"
            >
              {products.map((product, index) => (
                <SwiperSlide key={product.id}>
                  {({ isActive, isNext, isPrev }) => (
                    <ProductCard
                      {...product}
                      isActive={isActive}
                      isFirst={isPrev}
                      isLast={isNext}
                    />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="custom-swiper-button-prev absolute lg:left-[-50px] md:left-[-40px] bottom-[75px] transform -translate-y-1/2 z-10 cursor-pointer">
              <Image src={GroupLeft} width={35} height={35} alt="Previous" />
            </div>

            <div className="custom-swiper-button-next absolute lg:right-[-50px] md:right-[-40px] bottom-[75px] transform -translate-y-1/2 z-10 cursor-pointer">
              <Image src={GroupRight} width={35} height={35} alt="Next" />
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden grid grid-cols-2 gap-2">
            {products.slice(0, 2).map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                isActive={false}
                isFirst={false}
                isLast={false}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
