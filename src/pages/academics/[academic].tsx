import PageHeader from "@/components/pageHeader/components/PageHeader";
import AppLayout from "@/layout/AppLayout";
import Metatag from "@/utils/Metatag";
//images
import academics from "../../../public/images/academicprograms/academics.jpg";
import Image from "next/image";
import Link from "next/link";
import CallToAction from "@/components/Footer/components/callToAction/CallToAction";

const AcademicPrograms = () => {
  return (
    <div>
      <AppLayout>
        <Metatag
          heading={`School`}
          subheading="Academic"
          og_image={`https://media.istockphoto.com/id/577971232/photo/young-nepali-boys-in-classroom-bhaktapur.jpg?s=612x612&w=0&k=20&c=o4shD8gBdj02sFjLJLZXFJKMU5xYMJ26FPb11CVaKKE=`}
          description={` Explore our diverse undergraduate and graduate programs, state-of-the-art facilities, and vibrant campus life. Join us in shaping the leaders of tomorrow.`}
        />

        <PageHeader
          data={{
            image:
              "https://www.andreeharpur.com/wp-content/uploads/2018/08/csp-base-page.jpg",
            title: "Academics",
          }}
        />
        <div className="layout component-padding">
          <div className="grid lg:grid-cols-8 gap-20 items-start">
            <div className="lg:col-span-5 flex flex-col gap-10">
              <div className="text-[30px] font-semibold">
                Academics Advising
              </div>
              <div>
                <Image
                  src={academics}
                  alt="loading"
                  className="w-full h-[45vh] object-cover rounded-[8px]"
                />
              </div>
              <div className="">
                Within educational institutions, academic programs form the
                cornerstone of the learning experience. These programs, tailored
                to the needs of students at various stages of their educational
                journey, encompass a wide array of subjects and disciplines.
                From elementary schools to high schools, academic programs are
                designed to provide students with a strong foundation in core
                subjects such as mathematics, language arts, science, and social
                studies, while also offering opportunities for exploration and
                discovery in areas like the arts, physical education, and
                extracurricular activities.
              </div>
              <div>
                At the secondary level, academic programs often become more
                specialized, allowing students to delve deeper into specific
                fields of interest through advanced coursework, elective
                options, and extracurricular programs such as honors classes,
                Advanced Placement (AP) courses, and career and technical
                education (CTE) pathways. These programs aim to not only impart
                knowledge but also to foster critical thinking, creativity, and
                a lifelong passion for learning. Through a combination of
                classroom instruction, hands-on activities, and real-world
                experiences, academic programs within schools strive to prepare
                students for success in higher education, the workforce, and
                beyond.
              </div>

              <div>
                As students progress into middle school, they encounter a
                challenging curriculum that delves deeper into academic
                subjects, laying the groundwork for advanced high school study.
                The high school program at Evergreen is characterized by its
                diverse range of advanced placement courses, enabling students
                to earn college credit and excel academically
              </div>
            </div>
            <div className="lg:col-span-3 sticky top-[140px]">
              <div className="">
                <div className="bg-white  drop-shadow-md p-4 flex flex-col gap-6">
                  <div className="text-[22px]">Related Academics</div>
                  <div className="flex flex-col gap-4  ">
                    <Link href="/academics/tutoring-center">
                      Tutoring Center
                    </Link>
                    <Link href="/academics/career-services">
                      Career Services
                    </Link>
                    <Link href="/academics/disability-support-services">
                      Disability Support Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CallToAction />
      </AppLayout>
    </div>
  );
};

export default AcademicPrograms;
