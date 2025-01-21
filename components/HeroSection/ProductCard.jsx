import { Nunito } from "next/font/google";
import Image from "next/image";
import { LuTruck } from "react-icons/lu";
import { MdOutlineHome, MdOutlineRecycling } from "react-icons/md";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-nunito",
});
export default function ProductCard({
  image,
  title,
  isActive,
  isFirst,
  isLast,
  title2,
  shopLogo,
}) {
  const cardStyle = {
    transform: `
      ${isFirst ? "rotate(-5deg) scale(0.9)" : ""}
      ${isActive ? "translateY(-15px) scale(0.9)" : ""} 
      ${isLast ? "rotate(5deg) scale(0.9)" : ""}
    `,
    transition: "all 0.3s ease-in-out",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
  };

  return (
    <div
      className="flex-shrink-0 sm:w-[185px] sm:h-[190px] md:mt-[-25px] lg:mt-0  md:h-[256px] lg:h-[320px] md:w-full  lg:w-full bg-gray-200 rounded-lg shadow-md m-2 md:m-0 px-2 overflow-visible"
      style={cardStyle}
    >
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="w-full md:h-[194px] lg:h-56 object-cover pt-[10px] md:mt-[29px] rounded-t-lg"
      />
      <div className="flex justify-between p-2 lg:p-4 relative min-h-[50px] md:min-h-[70px] lg:min-h-[100px]">
        <div className="flex items-center gap-2 lg:gap-3">
          <div className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] lg:w-[52px] lg:h-[52px] rounded-full">
            <Image src={shopLogo} alt="Shop Logo" />
          </div>
          <div className="leading-0 lg:leading-[125%]">
            <h4 className="text-[10px] md:text-[13px] lg:text-[20px]">
              {title}
            </h4>
            <p
              className={`${nunito.variable} font-sans capitalize lg:mt-2 text-[8px] md:text-[10px] lg:text-[13px]`}
            >
              {title2}
            </p>
          </div>
        </div>

        <div className="absolute top-2 right-2 flex items-center justify-end gap-1 lg:top-[38%] lg:-translate-y-1/2">
          <div className="w-[12px] h-[13px] md:w-[16px] md:h-[16px] lg:w-[22px] lg:h-[24px] border border-[#F1F1F1] bg-white grid place-items-center rounded cursor-pointer">
            <MdOutlineHome className="text-[10px] md:text-[13px] lg:text-[16px] text-[#BF8937]" />
          </div>
          <div className="w-[12px] h-[13px] md:w-[16px] md:h-[16px] lg:w-[22px] lg:h-[24px] border border-[#F1F1F1] bg-white grid place-items-center rounded cursor-pointer">
            <LuTruck className="text-[10px] md:text-[13px] lg:text-[16px] text-[#BF8937]" />
          </div>
          <div className="w-[12px] h-[13px] md:w-[16px] md:h-[16px] lg:w-[22px] lg:h-[24px] border border-[#F1F1F1] bg-white grid place-items-center rounded cursor-pointer">
            <MdOutlineRecycling className="text-[10px] md:text-[13px] lg:text-[16px] text-[#BF8937]" />
          </div>
        </div>
      </div>
    </div>
  );
}
