import Button from "@/components/button/components/Button";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const CallToAction = () => {
  return (
    <div
      style={{
        backgroundImage: `url(./images/herosection/banner.jpg)`,
        backgroundSize: "cover",
      }}
      className="relative h-[50vh] bg-fixed flex items-center justify-center"
    >
      <div className="absolute top-0 left-0 h-full object-contain w-full  bg-[black] opacity-70"></div>
      <div className="relative text-white ">
        <div className="flex items-center flex-col gap-8">
          <div className="flex flex-col gap-6 items-center">
            <div className="lg:text-[35px] text-[25px] font-medium lg:font-semibold text-center">
              Are You Still Interested To Enroll?
            </div>
            <div className="font-medium lg:text-[20px] text-[16px] lg:w-[60%] text-center">
              Join us for an unforgettable adventure filled with breathtaking
              sights, thrilling experiences, and unforgettable memories
            </div>
          </div>

          <Link href="/contact-us">
            <Button
              data={{
                name: "Contact Us",
              }}
            ></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
