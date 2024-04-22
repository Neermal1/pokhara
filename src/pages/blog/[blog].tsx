import PageHeader from "@/components/pageHeader/components/PageHeader";
import { pageConstant } from "@/constants/pageConstant";
import AppLayout from "@/layout/AppLayout";
import BlogDetail from "@/pageComponents/BlogDetail/BlogDetail";
import { useRouter } from "next/router";

const BlogPage = () => {
  const router = useRouter();
  const { blog } = router.query;

  return (
    <AppLayout>
      <PageHeader
        data={{
          image:
            "https://www.andreeharpur.com/wp-content/uploads/2018/08/csp-base-page.jpg",
          title: "Blog Detail",
        }}
      />
      <BlogDetail slug={blog} />
    </AppLayout>
  );
};

export default BlogPage;

export async function getStaticPaths() {
  try {
    const paths = pageConstant.map((data) => ({
      params: { blog: data?.link },
    }));
    return { paths, fallback: false };
  } catch (e) {
    console.log(e);
  }
}

export async function getStaticProps() {
  return {
    props: { pageConstant },
  };
}
