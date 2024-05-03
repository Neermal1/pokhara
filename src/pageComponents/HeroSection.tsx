//react icons
import Button from "@/components/button/components/Button";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div
      className="max-w-[1920px] mx-auto bg-fixed relative bg-no-repeat white-color bg-cover bg-center"
      style={{
        backgroundImage: `url("./images/herosection/banner.jpg")`,
      }}
    >
      <div className="absolute bg-[black] opacity-70 text-white 3xl:opacity-70 w-full h-full top-0 left-0 right-0 bottom-0"></div>
      <div className="lg:pt-[95px]  lg:h-[100vh] flex items-center justify-center lg:translate-y-[-20px]   3xl:pt-[100px] pt-[60px]    relative ">
        <div className="layout component-padding  relative">
          <div className="grid lg:grid-cols-12">
            <div className=" flex flex-col lg:gap-14 gap-6 lg:col-span-7">
              <div className="relative">
                <div
                  style={{
                    color: "white",
                  }}
                  className=" text-[20px]  font-medium  mt-12"
                >
                  Crafting Knowledge, Shaping Futures
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div className="lg:text-[58px] text-[30px] text-white font-semibold">
                  Your Reliable Learning Destination
                </div>
                <div className="flex flex-col gap-7">
                  <div className="text-white">
                    At our institution, reliability is not just a promise but a
                    cornerstone of our commitment to student success. From our
                    dedicated faculty to our comprehensive curriculum, every
                    aspect of your educational journey is designed to provide a
                    dependable and consistent learning environment.
                  </div>
                  <Link href="/contact-us">
                    <div className="text-white inline-block cursor-pointer transition-all p-3 drop-shadow-md rounded-[10px]  px-6 py-2  bg-[#632115]
                    hover:brightness-110 hover:-translate-y-[3px] hover:bg-[#d27785]
                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                      Learn More
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
