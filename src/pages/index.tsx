import Advertisement from "@/components/Advertisement/Advertisement";
import Calendar from "@/components/Calendar/Calendar";
import CallToAction from "@/components/Footer/components/callToAction/CallToAction";
import ComponentHeader from "@/components/componentHeader/ComponentHeader";
import CollegeFeature from "@/components/feature/CollegeFeature";
import OurAssurance from "@/components/ourAssurance/components/OurAssurance";
import { SSR_fetchData } from "@/helperfunctions/fetchData.helper";
import AppLayout from "@/layout/AppLayout";
import BlogCard from "@/pageComponents/Blogs/BlogCard";
import HeroSection from "@/pageComponents/HeroSection";
import ServiceCollection from "@/pageComponents/home/ServiceCollection";
import Testimonial from "@/pageComponents/home/Testimonial";
import Metatag from "@/utils/Metatag";

// Define Types for Props
interface HomeProps {
  data: any;
  heroSection: any;
  whyUs: any;
  academicProgram: any;
  teachingProcess: any;
  testimonial: any;
  blogs: any;
}

const Index = ({
  data,
  heroSection,
  whyUs,
  academicProgram,
  teachingProcess,
  testimonial,
  blogs,
}: HomeProps) => {
  // Render fallback UI if data is missing or there's an error
  if (!data) {
    return (
      <div>
        <h1>Error loading the data. Please try again later.</h1>
      </div>
    );
  }

  return (
    <div>
      <AppLayout data={data}>
        <Metatag
          heading="Home"
          subheading={data?.meta_title}
          og_image={data?.image_link}
          description={data?.meta_description}
          keywords={data?.meta_keywords}
        />
        
        {/* Add the Header component */}
        <Header data={data} /> {/* This line should now work correctly */}
        
        <Advertisement />
        <Calendar />
        {heroSection && <HeroSection data={heroSection} />}
        {whyUs && <OurAssurance data={whyUs} />}
        {academicProgram && <ServiceCollection heading={true} data={academicProgram} />}
        {teachingProcess && <CollegeFeature data={teachingProcess} />}
        {testimonial && <Testimonial data={testimonial} />}
        {blogs && (
          <div className="lg:mt-[100px] mt-[80px]">
            <ComponentHeader
              data={{
                heading: "Latest Blogs and Trends",
              }}
            />
            <BlogCard data={blogs} />
          </div>
        )}
        <CallToAction />
      </AppLayout>
    </div>
  );
};

export default Index;

export async function getServerSideProps() {
  try {
    // Fetch data concurrently to improve performance
    const [
      { data },
      { data: heroSection },
      { data: whyUs },
      { data: academicProgram },
      { data: teachingProcess },
      { data: testimonial },
      { data: blogs },
    ] = await Promise.all([
      SSR_fetchData("company-profile"),
      SSR_fetchData("home/banner"),
      SSR_fetchData("home/why-us"),
      SSR_fetchData("home/academic-program"),
      SSR_fetchData("home/teaching-process"),
      SSR_fetchData("home/testimonial"),
      SSR_fetchData("home/blogs"),
    ]);

    // Return the fetched data as props
    return {
      props: {
        data,
        heroSection,
        whyUs,
        academicProgram,
        teachingProcess,
        testimonial,
        blogs,
      },
    };
  } catch (e) {
    console.error("Error fetching data:", e);
    return {
      props: {
        data: null, // Fallback in case of error
      },
    };
  }
}
