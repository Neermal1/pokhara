//svg images
import Image from "next/image";
import Link from "next/link";
import digitalsvg from "../../../public/images/services/digitalsvg.svg";
import mobilesvg from "../../../public/images/services/mobileapp.svg";
import ComponentHeader from "@/components/componentHeader/ComponentHeader";

const ServiceCollection = ({ heading }: any) => {
  const serviceList = [
    {
      img: digitalsvg,
      service_name: "Academic Advising",
      service_desc:
        "Professional advisors help students navigate academic requirements, choose majors, plan courses, and explore career paths.",
      slug: "academic-advising",
    },
    {
      img: mobilesvg,

      service_name: "Tutoring Center",
      service_desc:
        "A resource where students can receive academic support and assistance from peer tutors or professional staff in various subjects.",
      slug: "tutoring-center",
    },
    {
      img: digitalsvg,

      service_name: "Career Services",
      service_desc:
        "Guidance and resources to help students explore career options, search for internships and jobs, develop resumes and cover letters, and prepare for interviews.",
      slug: "career-services",
    },
    {
      img: digitalsvg,
      service_name: "Health Services",
      service_desc:
        "On-campus medical care for minor illnesses, injuries, and preventive health services, as well as referrals to off-campus healthcare providers when needed.",
      slug: "health-services",
    },
    {
      img: mobilesvg,

      service_name: "Disability Support Services",
      service_desc:
        "Accommodations and support for students with disabilities to ensure equal access to academic programs and campus facilities.",
      slug: "disability-support-services",
    },
    {
      img: digitalsvg,

      service_name: "Financial Aid Office",
      service_desc:
        "Assistance with navigating the financial aid process, including information on scholarships, grants, loans, work-study programs, and financial literacy resources.",
      slug: "financial-aid-office",
    },
  ];

  return (
    <div>
      <div className="relative">
        <div className="layout component-padding z-20">
          <div className="flex flex-col gap-20">
            {heading === true && (
              <ComponentHeader
                data={{
                  heading: "Our Academic Programs",
                  subheading:
                    "From consultation to implementation, we're here to support you every step of the way",
                }}
              />
            )}

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-20">
              {serviceList?.map((data, index: number) => {
                return (
                  <div className="z-20" key={index}>
                    <Link
                      data-aos="fade-up"
                      data-aos-delay="75"
                      data-aos-duration="1000"
                      // href={`/academic-programs/${data?.slug}`}
                      href="#"
                      className="card drop-shadow-lg  border-[2px] dark:bg-gray-900 bg-white p-6 dark:text-white black-color inline-block max-w-full break-words"
                      style={{
                        borderImage:
                          "linear-gradient(15deg, transparent 35%, #ee7c18,#f7c821) 1",
                        borderRadius: "2px",
                      }}
                    >
                      <div key={index} className="">
                        <div className="">
                          <div className="flex flex-col gap-6">
                            <Image
                              src={data?.img}
                              alt=""
                              className="h-[80px] w-[80px] object-contain"
                            />
                            <div className="flex flex-col gap-4">
                              <div className="text-[20px] font-semibold">
                                {data?.service_name}
                              </div>
                              <div className="text-[16px]">
                                {data?.service_desc}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ServiceCollection;
