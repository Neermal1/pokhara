//react icons
import { useEffect, useState } from "react";
import { FaFacebookF, FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";

//HeaderItems
import HeaderItem from "./HeaderItem";

//images
import logo from "../../../public/images/logo/logo1.jpg";
import logo2 from "../../../public/images/logo/logo2.jpg";

//antd
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Button from "../button/components/Button";
import Image from "next/image";
import { Drawer } from "antd";
import { useRouter } from "next/router";

const Header = () => {
  const [topHeader, setTopHeader] = useState<boolean>(true);
  const [activeMenu, setActiveMenu] = useState<string>("");
  const [subMenu, setSubMenu] = useState<boolean>(false);
  const router = useRouter();
  const { pathname } = router;
  console.log("This is ", pathname);
  const header_items = HeaderItem();

  // Top Header Function
  useEffect(() => {
    const changeNavbarDesign_onscroll = () => {
      const top = document.documentElement.scrollTop;

      if (top > 3) {
        setTopHeader(false);
      } else {
        setTopHeader(true);
      }
    };
    window.addEventListener("scroll", changeNavbarDesign_onscroll);
    return () => {
      window.removeEventListener("scroll", changeNavbarDesign_onscroll);
    };
  }, []);

  //Drawer Function
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  if (header_items) {
    return (
      <div className="  lg:text-[14px] text-[12px] black-color">
        {/* Top Header */}

        {topHeader && (
          <div className="bg-[#632115] text-white relative ">
            <div className="layout py-2 lg:px-4 px-6">
              <div className="flex lg:flex-row flex-col lg:gap-4 gap-2 justify-between items-center">
                <div className="flex lg:flex-row flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-[4px] items-center text-[12px]">
                      <div>
                        <FaPhoneAlt />
                      </div>
                      <div>
                        <a href={`tel:789456123`}>+977-78945113</a>
                      </div>
                    </div>
                    <div className="flex gap-[4px] items-center text-[12px]">
                      <div>
                        <FaPhoneAlt />
                      </div>
                      <div>
                        <a href={`tel:789456123`}>+977-789456123</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-[4px] lg:justify-start justify-center items-center text-[12px]">
                    <div>
                      <MdEmail size={14} />
                    </div>
                    <div>
                      <a href={`mailto:abc@gmail.com`} className="">
                        info@peacezone.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex  lg:gap-8 gap-4 lg:justify-start justify-center lg:items-start items-center">
                  <div className="flex gap-4 items-center">
                    <a href="/https://www.facebook.com/" target="__blank" className="transition-all relative group hover:-translate-y-[2px]">
                      <FaFacebookF size={16} />
                    </a>

                    <a href="#" target="__blank" className="transition-all relative group hover:-translate-y-[2px]">
                      <FaSquareInstagram size={16} />
                    </a>

                    <a href="#" target="__blank" className="transition-all relative group hover:-translate-y-[2px]">
                      <IoLogoYoutube size={18} />
                    </a>

                    <a href="#" target="__blank" className="transition-all relative group hover:-translate-y-[2px]">
                      <FaXTwitter size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Bottom Header */}
        <div
          className={`${
            topHeader == false && "top-0"
          } bg-white drop-shadow-md py-4 fixed w-full z-50 `}
        >
          <div className="layout lg:px-4 px-6">
            <div className=" grid lg:grid-cols-12 grid-cols-2 items-center  justify-between ">
              <Link href="/" className=" lg:col-span-2 ">
                <Image
                  alt="loading"
                  src={logo}
                  className="h-[85px] w-[85px] object-cover"
                ></Image>
              </Link>
              <div className=" lg:flex justify-center items-center hidden lg:col-span-8  gap-[30px]">
                {header_items.map((data: any, index) => {
                  return (
                    <Link
                      href={`${data?.subcategories ? "#" : data?.slug}`}
                      key={index}
                      className="transition-all relative group hover:-translate-y-[2px] hover:text-[#632115]"
                    >
                      <div>
                        <div
                          // href={`${data?.subcategories ? "#" : data?.slug}`}
                          className={`text-[14px] font-semibold uppercase`}
                        >
                          {data?.name}
                        </div>
                      </div>

                      <div
                        className={`${
                          (pathname === data?.slug ||
                            pathname.startsWith(data?.slug + "/")) &&
                          "absolute w-[100%] h-[2px] z-0 bottom-[-10px] left-0 right-0 rounded-[2px] bg-secondary"
                        }`}
                      ></div>

                      <div className="absolute w-[10%] h-[2px] transition-all duration-500 group-hover:w-[100%]  z-0  bottom-[-10px] left-0 right-0 rounded-[2px]  group-hover:bg-secondary "></div>
                    </Link>
                  );
                })}
                <Link
                  href={`/contact-us`}
                  className="flex items-center justify-center"
                >
                  <div
                    className="text-white inline-block cursor-pointer transition-all p-3 drop-shadow-md rounded-[10px]  px-6 py-2  bg-[#632115]
                  hover:brightness-110 hover:-translate-y-[3px] hover:bg-[#d27785]
                  active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                  >
                    Contact Us
                  </div>
                </Link>
              </div>
              <div className="hidden lg:flex lg:col-span-2  justify-end">
                <Link href="/" className=" ">
                  <Image
                    alt="loading"
                    src={logo2}
                    className="h-[75px] w-[75px] object-cover"
                  ></Image>
                </Link>
              </div>

              <div className="flex lg:hidden  justify-end">
                <div className="" onClick={showDrawer}>
                  <RiMenu3Fill size={20} />
                </div>
                <Drawer onClose={onClose} open={open}>
                  <div className="flex flex-col gap-4">
                    {header_items.map((data: any, index) => {
                      return (
                        <div key={index} className="">
                          <div className="flex  gap-2">
                            <div>
                              <Link
                                href={`${data?.slug}`}
                                className="flex gap-2 "
                              >
                                <div className="">{data?.name}</div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Drawer>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Header;
