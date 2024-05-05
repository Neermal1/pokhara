import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../../../public/images/logo/logo1.jpg";
import Image from "next/image";
const Footer = () => {
  const footer_item = [
    {
      heading: "Know More About Us",
      subHeading: [
        {
          subName: "Home",
          slug: "/",
        },

        {
          subName: "About Us",
          slug: "/about-us",
        },
        {
          subName: "Teams",
          slug: "/teams",
        },
        {
          subName: "Gallery",
          slug: "/gallery",
        },
        {
          subName: "Blog",
          slug: "/blog",
        },
      ],
    },
    {
      heading: "Quick Links",
      subHeading: [
        {
          subName: "About Us",
          slug: "/about-us",
        },

        {
          subName: "Privacy Policy",
          slug: "/privacy",
        },
      ],
    },
    {
      heading: "Support",
      subHeading: [
        {
          subName: "Contact Us",
          slug: "/contact-us",
        },

        {
          subName: "Terms and Conditions",
          slug: "/terms-and-conditions",
        },
      ],
    },
  ];

  return (
    <div className="dark:bg-[#111827] object-cover  bg-[#EAECEA] drop-shadow-lg color-changer ">
      <div className=" layout component-padding">
        <div className="flex flex-col gap-6">
          <div className="grid lg:grid-cols-4 grid-cols-1 border-b-[2px] pb-8 dark:border-[white]">
            <div className="col-span-1">
              <div className="flex flex-col mb-8">
                <div>
                  <Image
                    src={logo}
                    alt=""
                    className=" w-[150px] object-contain  "
                  />
                </div>
                <div className="text-[14px] text-justify">
                  Our school is a vibrant community dedicated to nurturing
                  students growth and learning. Its a place where educators are
                  passionate about providing quality education and support,
                  while students are encouraged to explore their interests and
                  reach their full potential
                </div>
              </div>
            </div>
            <div className="col-span-3 grid lg:grid-cols-3 grid-cols-1 gap-10">
              {footer_item?.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-8 lg:items-center"
                  >
                    <div className="lg:text-[16px] font-semibold">
                      {data?.heading}
                    </div>
                    <div className="flex flex-col gap-4 lg:items-center text-[14px]">
                      {data?.subHeading?.map((subdata, index) => {
                        return (
                          <div key={index}>
                            <Link href={subdata?.slug}>{subdata?.subName}</Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4 items-center justify-center">
              <a
                href="/https://www.facebook.com/"
                className="border-[1px] p-3 rounded-full h-[20px] w-[20px] hover:dark:border-[#d27785]  dark:border-white border-[#292f32] flex items-center justify-center transition-all relative group hover:-translate-y-[5px]"
              >
                <div>
                  <FaFacebookF size={12} />
                </div>
              </a>
              <a
                href="https://twittter.com/"
                className="border-[1px] p-3 rounded-full h-[20px] w-[20px] hover:dark:border-[#d27785] dark:border-white border-[#292f32] flex items-center justify-center transition-all relative group hover:-translate-y-[5px]"
              >
                <div>
                  <FaXTwitter size={12} />
                </div>
              </a>
              <a
                href="https://www.instagram.com/"
                className="border-[1px] p-3 rounded-full h-[20px] w-[20px] hover:dark:border-[#d27785] dark:border-white border-[#292f32] flex items-center justify-center transition-all relative group hover:-translate-y-[5px]"
              >
                <div>
                  <FaInstagram size={12} />
                </div>
              </a>
              <a
                href="https://youtube.com/"
                className="border-[1px] p-3 rounded-full h-[20px] w-[20px] hover:dark:border-[#d27785]  dark:border-white border-[#292f32] flex items-center justify-center transition-all relative group hover:-translate-y-[5px]"
              >
                <div>
                  <FaYoutube size={12} />
                </div>
              </a>
            </div>
            <div> ©School 2024, All rights reserved. Developed By <a href="https://nextaussietech.com/" target="_blank" className="font-semibold underline">Next Aussie Tech</a></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
