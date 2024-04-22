import PageHeader from "@/components/pageHeader/components/PageHeader";
import AppLayout from "@/layout/AppLayout";
import BlogCard from "@/pageComponents/Blogs/BlogCard";

const Blog = () => {
  return (
    <AppLayout>
      <PageHeader
        data={{
          image:
            "https://www.andreeharpur.com/wp-content/uploads/2018/08/csp-base-page.jpg",
          title: "Blog",
        }}
      />
      <BlogCard />
    </AppLayout>
  );
};

export default Blog;
