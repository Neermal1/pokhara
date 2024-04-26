import React from "react";

import CallToAction from "@/components/Footer/components/callToAction/CallToAction";
import CollegeFeature from "@/components/feature/CollegeFeature";
import PageHeader from "@/components/pageHeader/components/PageHeader";
import AppLayout from "@/layout/AppLayout";
import About from "@/pageComponents/AboutUs/components/AboutUs";
import Testimonial from "@/pageComponents/home/Testimonial";
import Metatag from "@/utils/Metatag";
import OurMission from "@/pageComponents/AboutUs/components/OurMission";
import CoreValues from "@/pageComponents/AboutUs/components/CoreValues";

const AboutUs = () => {
  return (
    <AppLayout>
      <Metatag
        heading={`School`}
        subheading="About Us"
        og_image={`https://media.istockphoto.com/id/577971232/photo/young-nepali-boys-in-classroom-bhaktapur.jpg?s=612x612&w=0&k=20&c=o4shD8gBdj02sFjLJLZXFJKMU5xYMJ26FPb11CVaKKE=`}
        description={` Explore our diverse undergraduate and graduate programs, state-of-the-art facilities, and vibrant campus life. Join us in shaping the leaders of tomorrow.`}
      />

      <PageHeader
        data={{
          image:
            "https://www.andreeharpur.com/wp-content/uploads/2018/08/csp-base-page.jpg",
          title: "About Us",
        }}
      />
      <About />
      <OurMission />
      <CollegeFeature />
      <Testimonial />
      <CoreValues />

      <div className="mt-20">
        <CallToAction />
      </div>
    </AppLayout>
  );
};

export default AboutUs;
