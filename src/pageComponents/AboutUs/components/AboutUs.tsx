//Images
import Button from "@/components/button/components/Button";
import Link from "next/link";
import repairone from "../../../../public/images/aboutus/repairone.jpg";

//react icons

const About = () => {
  return (
    <div className="layout component-padding ">
      <div className="grid lg:grid-cols-1 gap-16">
        <div className=" grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="lg:text-[38px] text-[30px] font-semibold">
              Shaping Futures, Igniting Potential
            </div>
            <div className=" no-scrollbar leading-[26px]">
              With a diverse and vibrant community of students from around the
              globe,College offers a dynamic learning environment that fosters
              collaboration, creativity, and intellectual curiosity. From
              state-of-the-art facilities to cutting-edge research
              opportunities, our campus provides the resources and support
              students need to thrive academically, personally, and
              professionally. AtCollege, we believe in the power of education to
              transform lives and shape the future. Whether {"you're"} pursuing
              a degree in the arts, sciences, business, or beyond, we are here
              to help you succeed and make your mark on the world. Explore our
              website to learn more about our programs, faculty, campus life,
              and the countless opportunities awaiting you atCollege. We invite
              you to join us on this exciting journey of discovery and growth.
            </div>
            <Link href="/contact-us">
              <Button
                data={{
                  name: "Learn More",
                }}
              ></Button>
            </Link>
          </div>
          <div className="lg:col-span-5 rounded-[8px]  overflow-hidden">
            <img
              src={repairone.src}
              alt=""
              className="lg:h-[50vh] 3xl:h-[40vh] w-[100%] object-cover rounded-[8px] hover:scale-110 transition-all duration-700"
            />
          </div>
        </div>
        <div className="overflow-hidden">
          <img
            src="https://storage.googleapis.com/website-production/uploads/2023/01/audible-banner-ad-example.png"
            alt=""
            className="object-cover hover:scale-110 transition-all duration-700 w-[100%] rounded-[8px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
