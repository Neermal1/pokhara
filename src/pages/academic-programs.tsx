import CallToAction from "@/components/Footer/components/callToAction/CallToAction";
import CollegeFeature from "@/components/feature/CollegeFeature";
import PageHeader from "@/components/pageHeader/components/PageHeader";
import AppLayout from "@/layout/AppLayout";
import CoreValues from "@/pageComponents/AboutUs/components/CoreValues";
import OurMission from "@/pageComponents/AboutUs/components/OurMission";
import ServiceCollection from "@/pageComponents/home/ServiceCollection";
import Metatag from "@/utils/Metatag";

const AcademicPrograms = () => {
  return (
    <div>
      <AppLayout>
        <Metatag
          heading={`School`}
          subheading="Academic Programs"
          og_image={`https://media.istockphoto.com/id/577971232/photo/young-nepali-boys-in-classroom-bhaktapur.jpg?s=612x612&w=0&k=20&c=o4shD8gBdj02sFjLJLZXFJKMU5xYMJ26FPb11CVaKKE=`}
          description={` Explore our diverse undergraduate and graduate programs, state-of-the-art facilities, and vibrant campus life. Join us in shaping the leaders of tomorrow.`}
        />

        <PageHeader
          data={{
            image:
              "https://www.andreeharpur.com/wp-content/uploads/2018/08/csp-base-page.jpg",
            title: "Our Academic Programs",
            subDetail:
              " Whether it's a minor fix or a major overhaul, trust us to restore your appliances to optimal functionality, providing you with peace of mind and convenience at every step.",
          }}
        />
        <ServiceCollection />
        <OurMission />
        <CollegeFeature />
        <CoreValues />
        <CallToAction />
      </AppLayout>
    </div>
  );
};

export default AcademicPrograms;
