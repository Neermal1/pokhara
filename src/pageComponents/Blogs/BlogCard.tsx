import ComponentHeader from "@/components/componentHeader/ComponentHeader";
import Link from "next/link";

const BlogCard = () => {
  const BlogImages = [
    {
      img: "https://img.freepik.com/free-photo/happy-young-female-student-holding-notebooks-from-courses-smiling-camera-standing-spring-clothes-against-blue-background_1258-70161.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1713657600&semt=sph",
      link: "how-to-improve-your-study",
      title: "How to Improve your study",
    },
    {
      img: "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.webp?b=1&s=170667a&w=0&k=20&c=M1Lvq7d-B4vrGasRQJCsvUO5zJdOvwvswjqaWmHPYyA=",
      link: "how-to-study-without-pressure",
      title: "How to Study Without Pressure",
    },
    {
      img: "https://img.freepik.com/premium-photo/teenager-student-girl-yellow-pointing-finger-side_1368-40175.jpg",
      link: "how-to-increase-brain-capacity",
      title: "How to increase brain capacity",
    },
  ];
  return (
    <div className="layout component-padding ">
      <div className="flex flex-col gap-10">
        <div>
          <ComponentHeader
            data={{
              heading: "Latest Blog and Trends",
              subheading:
                "Insights from satisfied customers: their feedback tells the story of our quality service and products",
            }}
          />
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {BlogImages?.map((data, index) => {
            return (
              <Link href={`/blog/${data?.link}`} key={index} className="">
                <div className="flex flex-col gap-6">
                  <img
                    src={data?.img}
                    alt=""
                    className="object-cover h-[40vh] rounded-[8px]   w-[100%] transform transition duration-500 ease-in-out group-hover:scale-110 "
                  />
                  <div className="text-xl">{data?.title}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
