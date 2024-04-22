//images

const CollegeFeature = () => {
  const repairList = [
    {
      title: "Innovative Teaching Methodologyt",
      description:
        "we believe in revolutionizing the traditional approach to education. Our teaching process is driven by innovation, creativity, and a commitment to empowering minds.",
    },
    {
      title: "Student-Centered Learning",
      description:
        " We believe in fostering active engagement and ownership by tailoring our approach to meet the diverse needs and interests of each individual. Through collaborative projects, hands-on experiences, and opportunities for self-directed exploration, we empower students to take ownership of their education and pursue their passions with enthusiasm",
    },
    {
      title: "Experiential Learning",
      description:
        "Our teaching process integrates real-world experiences and practical applications into the curriculum, allowing students to apply what they learn in the classroom to authentic situations.",
    },
  ];
  return (
    <div className="bg-[#16111D] text-white">
      <div className="layout component-padding">
        <div className=" white-color ">
          <div className=" flex flex-col gap-20">
            <div className="flex items-center justify-center">
              <div className="lg:text-[48px] text-center lg:w-[60%]  text-[28px] font-semibold">
                Our Teaching Process
              </div>
            </div>
            <div>
              <div className="grid lg:grid-cols-3 lg:gap-8 gap-14">
                {repairList?.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="border-[1px] relative group border-[white] p-6 rounded-[8px] flex flex-col gap-8"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-[20px] font-semibold">
                          {data?.title}
                        </div>
                      </div>
                      <div>{data?.description}</div>
                      <div className="absolute top-[-30px] right-10 group-hover:animate-spin">
                        <div className="border-[2px] h-[60px] w-[60px] border-[#eb1425] group-hover:bg-[white] group-hover:text-[#eb1425] bg-[#16111D] rounded-full flex items-center justify-center">
                          <div className="text-[24px]">0{index + 1}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeFeature;
