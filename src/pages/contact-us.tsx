import PageHeader from "@/components/pageHeader/components/PageHeader";
import AppLayout from "@/layout/AppLayout";
import ContactInfo from "@/pageComponents/ContactUs/components/ContactInfo";

const ContactUs = () => {
  return (
    <AppLayout>
      <PageHeader
        data={{
          image:
            "https://www.andreeharpur.com/wp-content/uploads/2018/08/csp-base-page.jpg",
          title: "Contact Us",
        }}
      />
      <ContactInfo />
    </AppLayout>
  );
};

export default ContactUs;
