import PageHeader from "@/components/pageHeader/components/PageHeader";
import AppLayout from "@/layout/AppLayout";
import Privacy from "@/pageComponents/PrivacyPolicy/Privacy";

const PrivacyPolicy = () => {
  return (
    <AppLayout>
      <PageHeader
        data={{
          image:
            "https://www.andreeharpur.com/wp-content/uploads/2018/08/csp-base-page.jpg",
          title: "Privacy Policy",
        }}
      />
      <Privacy />
    </AppLayout>
  );
};

export default PrivacyPolicy;
