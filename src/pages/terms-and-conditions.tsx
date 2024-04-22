import PageHeader from "@/components/pageHeader/components/PageHeader";
import AppLayout from "@/layout/AppLayout";
import Terms from "@/pageComponents/TermsAndConditions/Terms";

const TermsAndConditions = () => {
  return (
    <AppLayout>
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
