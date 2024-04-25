import PageHeader from "@/components/pageHeader/components/PageHeader";
import AppLayout from "@/layout/AppLayout";
import Terms from "@/pageComponents/TermsAndConditions/Terms";
import Metatag from "@/utils/Metatag";

const TermsAndConditions = () => {
  return (
    <AppLayout>
      <Metatag
        heading={`School`}
        subheading="Terms and Conditions"
        og_image={`https://media.istockphoto.com/id/577971232/photo/young-nepali-boys-in-classroom-bhaktapur.jpg?s=612x612&w=0&k=20&c=o4shD8gBdj02sFjLJLZXFJKMU5xYMJ26FPb11CVaKKE=`}
        description={` Explore our diverse undergraduate and graduate programs, state-of-the-art facilities, and vibrant campus life. Join us in shaping the leaders of tomorrow.`}
      />

      <PageHeader
        data={{
          image:
            "https://www.andreeharpur.com/wp-content/uploads/2018/08/csp-base-page.jpg",
          title: "Terms And Conditions",
        }}
      />
      <div>
        <Terms />
      </div>
    </AppLayout>
  );
};

export default TermsAndConditions;