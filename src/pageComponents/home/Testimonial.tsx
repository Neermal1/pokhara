import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//images
import ComponentHeader from "@/components/componentHeader/ComponentHeader";
import { responsiveItem } from "@/constants/responsiveItem";
import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { RiDoubleQuotesR } from "react-icons/ri";
import user from "../../../public/images/testimonial/girlone.jpg";

const Testimonial = () => {
  const fetchedData = [
    {
      name: "Louis",
      position: "Senior Devloper",
      title: "My Journey at College",
      desc: "I can't help but marvel at the milestones I've achieved. From the day I stepped onto campus, I knew I was embarking on a transformative experience. Thanks to the unwavering support of the faculty, the enriching academic environment, and the myriad of opportunities, I've accomplished feats I once only dreamed of. ",
      img: user,
    },
    {
      name: "Harry",
      position: "Senior Engineer",

      title: "Empowered by Education: My Story at College",

      desc: "Through the guidance of supportive mentors and the rich academic offerings, I've not only earned a degree but discovered my true potential. [College Name] didn't just teach me subjects; it taught me resilience, determination, and the importance of chasing dreams.Today, as I stand on the brink of graduation, I am filled with gratitude for the doors that have opened, the barriers that have been shattered, and the person I've become. ",
      img: user,
    },
    {
      name: "Liam",
      position: "Senior Doctor",

      title: "Finding My Voice at College Name",

      desc: "From the moment I set foot on campus, I was welcomed into a community that encouraged me to explore, to question, and to evolve. The professors here didn't just teach me facts; they ignited my curiosity and challenged me to think critically",
      img: user,
    },
  ];

  const ButtonGroup = ({ next, previous }: any) => {
    return (
      <div
        className="carousel-button-group   gap-4 flex lg:justify-start lg:px-[250px]  justify-center
            items-center w-full absolute top-[110%]"
      >
        <div
          onClick={() => previous()}
          className="cursor-pointer transition-all p-3 drop-shadow-md rounded-[2px]  px-6 py-2  bg-[#183153]

 hover:brightness-110 hover:-translate-y-[1px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          <FaArrowLeftLong className="text-white" />
        </div>

        <div
          onClick={() => next()}
          className="cursor-pointer transition-all p-3 drop-shadow-md rounded-[2px]  px-6 py-2  bg-[#183153]

 hover:brightness-110 hover:-translate-y-[1px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          <FaArrowRightLong className="text-white" />
        </div>
      </div>
    );
  };
  return (
    <div className="">
      <div className="layout component-padding color-changer">
        <div className="flex flex-col gap-20">
          <div>
            <ComponentHeader
              data={{
                heading: "What Our Students Are Saying",
                subheading:
                  "Insights from satisfied customers: their feedback tells the story of our quality service and products",
              }}
            />
          </div>
          <div className="">
            <div className="relative lg:mb-0  mb-20 z-20">
              <Carousel
                responsive={responsiveItem}
                swipeable={true}
                draggable={true}
                infinite={true}
                pauseOnHover={true}
                arrows={false}
                className="relative "
                renderButtonGroupOutside={true}
                customButtonGroup={<ButtonGroup />}
              >
                {fetchedData.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className=" max-w-6xl mx-auto relative "
                      style={{
                        color: "var(--white-color)",
                      }}
                    >
                      <div className="grid lg:grid-cols-2 lg:gap-24 gap-10 grid-cols-1 justify-between">
                        <div
                          data-aos="fade-up"
                          data-aos-delay="75"
                          data-aos-duration="1000"
                          className="relative  mt-6 group"
                        >
                          <Image
                            src={data?.img}
                            alt=""
                            className="z-0 rounded-[8px]"
                          />
                          <div className="absolute group-hover:bg-[#ef1a26] text-white bg-[#183153] drop-shadow-lg top-[-22px] z-50 lg:right-[-20px] right-[2px] h-[40px] w-[40px] lg:h-[60px] lg:w-[60px] rounded-full flex items-center justify-center">
                            <RiDoubleQuotesR
                              size={26}
                              className=" font-semibold text-white"
                            />
                          </div>
                        </div>
                        <div
                          data-aos="fade-up"
                          data-aos-delay="100"
                          data-aos-duration="1080"
                          className="flex flex-col gap-10  relative"
                          style={{
                            color: "var(--black-color)",
                          }}
                        >
                          <div className="text-[30px]  font-semibold z-20">
                            {data?.title}
                          </div>
                          <div className="flex flex-col gap-5 z-20">
                            <div className="text-[14px]">{data?.desc}</div>
                            <div>
                              <div>{data?.name}</div>
                              <div className="text-[12px] ">
                                {data?.position}
                              </div>
                            </div>
                          </div>
                          <div className="absolute  bottom-0 z-0"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
