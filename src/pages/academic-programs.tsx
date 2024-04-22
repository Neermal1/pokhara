import CallToAction from "@/components/Footer/components/callToAction/CallToAction";
import CompanySuccess from "@/components/companySuccess/CompanySuccess";
import CollegeFeature from "@/components/feature/CollegeFeature";
import PageHeader from "@/components/pageHeader/components/PageHeader";
import AppLayout from "@/layout/AppLayout";
import ServiceCollection from "@/pageComponents/home/ServiceCollection";
import React from "react";

const AcademicPrograms = () => {
  return (
    <div>
      <AppLayout>
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
        <CollegeFeature />
        {/* <CompanySuccess /> */}
        <CallToAction />
      </AppLayout>
    </div>
  );
};

export default AcademicPrograms;
