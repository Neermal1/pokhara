import Link from "next/link";

const Galleries = ({ data }: { data: any[] }) => {
  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">No galleries found.</p>;
  }

  return (
    <div className="layout component-padding">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
        {data.map((item: any, index: number) => (
          <div key={index}>
            <Link
              href={`/gallery/${item?.slug}`}
              className="hover:cursor-pointer group overflow-hidden rounded-[8px] flex flex-col gap-4"
            >
              <div className="overflow-hidden rounded-[8px]">
                <img
                  src={item?.image_link}
                  alt={item?.name || "Gallery Image"}
                  className="object-cover h-[40vh] w-[100%] transform transition duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="text-[20px] font-medium">{item?.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galleries;
