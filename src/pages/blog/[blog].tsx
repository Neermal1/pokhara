import PageHeader from "@/components/pageHeader/components/PageHeader";
import { SSR_fetchData } from "@/helperfunctions/fetchData.helper";
import AppLayout from "@/layout/AppLayout";
import BlogDetail from "@/pageComponents/BlogDetail/BlogDetail";
import { useRouter } from "next/router";

const BlogPage = ({ blogDetail }: any) => {
  return (
    <AppLayout>
      <PageHeader
        data={{
          image:
            "https://www.andreeharpur.com/wp-content/uploads/2018/08/csp-base-page.jpg",
          title: "Blog Detail",
        }}
      />
      <BlogDetail data={blogDetail} />
    </AppLayout>
  );
};

export default BlogPage;

export async function getStaticPaths() {
  try {
    const pageConstant: any = await SSR_fetchData("home/blogs");
    const paths = pageConstant?.data?.map((data: any) => ({
      params: { blog: data?.slug },
    }));
    return { paths, fallback: false };
  } catch (e) {
    console.log(e);
  }
}

export async function getStaticProps({ params }: any) {
  const { data: blogDetail } = await SSR_fetchData(`blog/${params?.blog}`);
  return {
    props: {
      blogDetail,
    },
  };
}
