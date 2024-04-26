import React from "react";

import mission from "../../../../public/images/aboutus/mission.jpg";
import Image from "next/image";

const OurMission = () => {
  return (
    <div className="layout component-padding">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        <div className="flex flex-col gap-6">
          <div className="lg:text-[38px] text-[30px] font-semibold">
            Our Mission{" "}
            <span
              style={{
                color: "var(--accent-color)",
              }}
            >
              and Vision
            </span>
          </div>
          <div className="text-[18px]">
            Our mission is to provide a nurturing and inclusive educational
            environment where every student is empowered to excel academically,
            socially, and emotionally. Through innovative teaching methods and
            personalized support, we strive to cultivate a lifelong love of
            learning, critical thinking skills, and a strong sense of social
            responsibility. Our vision is to foster a community of compassionate
            and resilient individuals who are equipped with the knowledge,
            skills, and mindset to thrive in an ever-changing world, making
            meaningful contributions to their communities and beyond.
          </div>
        </div>
        <div className="flex lg:justify-end">
          <Image src={mission} alt="loading" className="rounded-[8px]" />
        </div>
      </div>
    </div>
  );
};

export default OurMission;
