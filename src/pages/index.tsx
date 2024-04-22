import CallToAction from "@/components/Footer/components/callToAction/CallToAction";
import CompanySuccess from "@/components/companySuccess/CompanySuccess";
import CollegeFeature from "@/components/feature/CollegeFeature";
import OurAssurance from "@/components/ourAssurance/components/OurAssurance";
import AppLayout from "@/layout/AppLayout";
import BlogCard from "@/pageComponents/Blogs/BlogCard";
import HeroSection from "@/pageComponents/HeroSection";
import ServiceCollection from "@/pageComponents/home/ServiceCollection";
import Testimonial from "@/pageComponents/home/Testimonial";
import React from "react";

const index = () => {
  return (
    <div>
      <AppLayout>
        <HeroSection />
        <OurAssurance />
        {/* <CompanySuccess /> */}
        <ServiceCollection heading={true} />
        <CollegeFeature />
        <Testimonial />
        <BlogCard />

        <CallToAction />
      </AppLayout>
    </div>
  );
};

export default index;
