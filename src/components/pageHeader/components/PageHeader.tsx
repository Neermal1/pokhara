const PageHeader = ({ data }: any) => {
  return (
    <div
      style={{
        backgroundImage: `url(${data?.image})`,
      }}
      className="h-[55vh] text-white bg-fixed bg-cover relative flex items-center justify-center white-color"
    >
      <div className="absolute bg-gradient-to-l from-[#0c090f] to-[#2d1749] opacity-80 3xl:opacity-70 w-full h-full top-0 left-0 right-0 bottom-0"></div>

      <div className="relative flex flex-col items-center justify-center">
        <div className="lg:text-[45px] text-center text-[35px] font-medium">
          {data?.title}
        </div>
        <div className="lg:w-[60%] text-center ">
          <div className="">{data?.subDetail}</div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
