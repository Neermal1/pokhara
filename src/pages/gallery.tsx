import PageHeader from "@/components/pageHeader/components/PageHeader";
import AppLayout from "@/layout/AppLayout";
import Gallery from "@/pageComponents/Gallery/Gallery";
import { useState } from "react";

const gallery = () => {
  return (
    <div>
      <AppLayout>
        <PageHeader
          data={{
            image:
              "https://www.andreeharpur.com/wp-content/uploads/2018/08/csp-base-page.jpg",
            title: "Gallery",
          }}
        />
        <Gallery />
      </AppLayout>
    </div>
  );
};

export default gallery;
