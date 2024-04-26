import CallToAction from "@/components/Footer/components/callToAction/CallToAction";
import ComponentHeader from "@/components/componentHeader/ComponentHeader";
import CollegeFeature from "@/components/feature/CollegeFeature";
import OurAssurance from "@/components/ourAssurance/components/OurAssurance";
import AppLayout from "@/layout/AppLayout";
import BlogCard from "@/pageComponents/Blogs/BlogCard";
import HeroSection from "@/pageComponents/HeroSection";
import ServiceCollection from "@/pageComponents/home/ServiceCollection";
import Testimonial from "@/pageComponents/home/Testimonial";
import Metatag from "@/utils/Metatag";

const index = () => {
  return (
    <div>
      <AppLayout>
        <Metatag
          heading={`School`}
          subheading="Home"
          og_image={`https://media.istockphoto.com/id/577971232/photo/young-nepali-boys-in-classroom-bhaktapur.jpg?s=612x612&w=0&k=20&c=o4shD8gBdj02sFjLJLZXFJKMU5xYMJ26FPb11CVaKKE=`}
          description={` Explore our diverse undergraduate and graduate programs, state-of-the-art facilities, and vibrant campus life. Join us in shaping the leaders of tomorrow.`}
        />

        <HeroSection />
        <OurAssurance />
        {/* <CompanySuccess /> */}
        <ServiceCollection heading={true} />
        <CollegeFeature />
        <Testimonial />
        <div className="lg:mt-[100px] mt-[80px]">
          <ComponentHeader
            data={{
              heading: "Latest Blogs and Trends",
            }}
          />
          <BlogCard />
        </div>

        <CallToAction />
      </AppLayout>
    </div>
  );
};

export default index;
