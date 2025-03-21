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

// Define the props type for Home page
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
  // Fallback UI when data is missing or an error occurs
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
        {/* Meta tag component */}
        <Metatag
          heading="Home"
          subheading={data?.meta_title}
          og_image={data?.image_link}
          description={data?.meta_description}
          keywords={data?.meta_keywords}
        />
        
        {/* Add Advertisement and Calendar */}
        <Advertisement />
        <Calendar />

        {/* Render Hero Section if data exists */}
        {heroSection && <HeroSection data={heroSection} />}

        {/* Render Our Assurance section if data exists */}
        {whyUs && <OurAssurance data={whyUs} />}

        {/* Render Service Collection if data exists */}
        {academicProgram && <ServiceCollection heading={true} data={academicProgram} />}

        {/* Render College Feature if data exists */}
        {teachingProcess && <CollegeFeature data={teachingProcess} />}

        {/* Render Testimonial section if data exists */}
        {testimonial && <Testimonial data={testimonial} />}

        {/* Render Blog Cards and header if blogs data exists */}
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

        {/* Call to Action */}
        <CallToAction />
      </AppLayout>
    </div>
  );
};

export default Index;

export async function getServerSideProps() {
  try {
    // Fetch all the data concurrently using Promise.all for performance improvement
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
    // Return null for data in case of an error, you can handle it in the component
    return {
      props: {
        data: null,
      },
    };
  }
}
