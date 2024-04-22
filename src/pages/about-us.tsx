import CallToAction from "@/components/Footer/components/callToAction/CallToAction";
import CollegeFeature from "@/components/feature/CollegeFeature";
import PageHeader from "@/components/pageHeader/components/PageHeader";
import AppLayout from "@/layout/AppLayout";
import About from "@/pageComponents/AboutUs/components/AboutUs";
import Testimonial from "@/pageComponents/home/Testimonial";
import React from "react";

const AboutUs = () => {
  return (
    <AppLayout>
      <PageHeader
        data={{
          image:
            "https://www.andreeharpur.com/wp-content/uploads/2018/08/csp-base-page.jpg",
          title: "About Us",
        }}
      />
      <About />
      <Testimonial />
      <CollegeFeature />
      <div className="mt-20">
        <CallToAction />
      </div>
    </AppLayout>
  );
};

export default AboutUs;
