import CallToAction from "@/components/Footer/components/callToAction/CallToAction";
import PageHeader from "@/components/pageHeader/components/PageHeader";
import AppLayout from "@/layout/AppLayout";
import AllTeams from "@/pageComponents/teams/AllTeams";
import Metatag from "@/utils/Metatag";

const Teams = () => {
  return (
    <AppLayout>
      <Metatag
        heading={`School`}
        subheading="Teams"
        og_image={`https://media.istockphoto.com/id/577971232/photo/young-nepali-boys-in-classroom-bhaktapur.jpg?s=612x612&w=0&k=20&c=o4shD8gBdj02sFjLJLZXFJKMU5xYMJ26FPb11CVaKKE=`}
        description={` Explore our diverse undergraduate and graduate programs, state-of-the-art facilities, and vibrant campus life. Join us in shaping the leaders of tomorrow.`}
      />

      <PageHeader
        data={{
          image:
            "https://t4.ftcdn.net/jpg/05/10/86/29/360_F_510862902_K5o4Sz7odYbuFs6FLKqTH3L79eTDtjYc.jpg",
          title: "Teams",
        }}
      />
      <AllTeams />
      <CallToAction />
    </AppLayout>
  );
};

export default Teams;
