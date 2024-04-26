import ContactDetail from "./ContactDetail";
import ContactForm from "./ContactForm";

//css

const ContactInfo = () => {
  return (
    <div>
      <div className="layout component-padding">
        <div className="grid lg:grid-cols-8 grid-cols-1 gap-20">
          <div className="lg:col-span-3 ">
            <div className="sticky top-[140px]">
              <ContactDetail />
            </div>
          </div>
          <div className="lg:col-span-5 flex lg:justify-end">
            <ContactForm />
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112488.2548218461!2d83.8742163731218!3d28.229848957455868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995937bbf0376ff%3A0xf6cf823b25802164!2sPokhara!5e0!3m2!1sen!2snp!4v1714108976470!5m2!1sen!2snp"
        className="w-full lg:h-[80vh] h-[40vh]"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default ContactInfo;
