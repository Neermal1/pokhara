import PageHeader from "@/components/pageHeader/components/PageHeader";
import AppLayout from "@/layout/AppLayout";
import AllTeams from "@/pageComponents/teams/AllTeams";

const Teams = () => {
  return (
    <AppLayout>
      <PageHeader
        data={{
          image:
            "https://t4.ftcdn.net/jpg/05/10/86/29/360_F_510862902_K5o4Sz7odYbuFs6FLKqTH3L79eTDtjYc.jpg",
          title: "Teams",
        }}
      />
      <AllTeams />
    </AppLayout>
  );
};

export default Teams;
