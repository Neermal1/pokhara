import ComponentHeader from "@/components/componentHeader/ComponentHeader";
import coreValues from "../../../../public/images/aboutus/corevalues.jpg";
import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";

const CoreValues = () => {
  const coreValuesList = [
    {
      title: "Compassion",
      feature: [
        {
          detail: "Understand the circumstances and viewpoints of others.",
        },
        {
          detail: "Develop the capacity to forgive others and ourselves.",
        },
        {
          detail: "Recognize and celebrate the contributions of others.",
        },
        {
          detail: "Promote a peaceful, caring and nurturing community.",
        },
      ],
    },
    {
      title: "EXCELLENCE",
      feature: [
        {
          detail: "Push ourselves and others to excel.",
        },
        {
          detail: "Prepare ourselves thoroughly for each task we undertake.",
        },
        {
          detail:
            "Plan and work towards success while being prepared to solve potential problems.",
        },
        {
          detail: "Follow through on tasks and assignments.",
        },
        {
          detail: "Hold ourselves to the highest standards of performance.",
        },
        {
          detail: "Strive to exceed goals.",
        },
      ],
    },
    {
      title: "RESPECT",
      feature: [
        {
          detail: "Believe in the inherent dignity of all people.",
        },
        {
          detail: "Honor and celebrate individuality.",
        },
        {
          detail: "Value and appreciate diversity.",
        },
        {
          detail: "Dignify ourselves and others through words and actions.",
        },
      ],
    },
  ];

  return (
    <div className="layout component-padding flex flex-col gap-10">
      <ComponentHeader
        data={{
          heading: "Our Core Values",
        }}
      />
      <div className="grid lg:grid-cols-8 gap-10">
        <div className="flex flex-col gap-12 lg:col-span-5">
          {coreValuesList?.map((data, index) => {
            return (
              <div key={index} className="flex flex-col gap-6">
                <div className="font-semibold text-[18px]">{data?.title}</div>
                <div className="flex flex-col gap-4">
                  <div className="ml-4">We Will</div>
                  {data?.feature?.map((data, index) => {
                    return (
                      <div key={index} className=" ml-7 flex gap-4">
                        <div
                          style={{
                            color: "var(--accent-color)",
                          }}
                          className="translate-y-[8px]"
                        >
                          <GiCheckMark />
                        </div>
                        <div>{data?.detail}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="lg:col-span-3 ">
          <div className="sticky top-[140px]">
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-core-values-background_23-2149090311.jpg"
              alt=""
              className="rounded-[8px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
