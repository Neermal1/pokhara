const OurAssurance = () => {
  const assuranceList = [
    {
      title: "Academic Excellence",
      description:
        "This feature enables students to navigate their college campus seamlessly. With interactive maps accessible via the college website, users can find buildings, classrooms, facilities, and even parking spots with ease.",
      link: "#",
    },
    {
      title: "Supportive Learning Environment ",
      description:
        "This feature revolutionizes the way students plan their academic journey. Through the college website, students can access personalized course planning tools that consider their academic goals, major requirements, and scheduling preferences.",
      link: "#",
    },
    {
      title: "Flexibility and innovation",
      description:
        "Through immersive virtual tours accessible on the college website, prospective students can explore campus facilities, residence halls, academic buildings, and recreational spaces from the comfort of their homes",
      link: "#",
    },
  ];

  return (
    <div className="layout component-padding black-color">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
        {assuranceList?.map((data, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundColor: "var(--white-color)",
              }}
              className="drop-shadow-md p-6 flex flex-col gap-6 group"
            >
              <div className="flex items-center gap-6">
                <div
                  style={{
                    color: "var(--accent-color)",
                  }}
                  className="lg:text-[36px] text-[32px] font-bold"
                >
                  0{index + 1}
                </div>
                <div className="lg:text-[24px] text-[20px] font-semibold">
                  {data?.title}
                </div>
              </div>
              <div className="text-[16px] lg:h-[25vh]  leading-[26px]">
                {data?.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurAssurance;
