import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";

const AllTeams = () => {
  const teams = [
    {
      name: "Emma",
      image:
        "https://toppng.com/uploads/preview/kids-school-students-images-png-115533576868gljqduyfu.png",
      phone: "980000000",
      email: "emma@gmail.com",
    },
    {
      name: "Sophia",
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlN19waG90b2dyYXBoeV9vZl9oYXBweV9pbmRpYW5fa2lkX3ByaW1hcnlfZWxlbWVudF9mNjg5YjljMC1kZTY3LTQxZGUtOTdlOC0yNTc0ZjNjMzA2MzhfMS5wbmc.png",
      phone: "980000000",
      email: "sophia@gmail.com",
    },
    {
      name: "Olivia",
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAzL3Jhd3BpeGVsb2ZmaWNlMTBfcGhvdG9ncmFwaHlfb2ZfaGFwcHlfaW5kaWFuX2tpZF9wcmltYXJ5X2VsZW1lbl84MjU4YjIxZC1mYWY3LTRhY2ItYWEwNy0zZWE5MjI4NTNiYjEucG5n.png",
      phone: "980000000",
      email: "olivia@gmail.com",
    },
    {
      name: "Ava",
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yMl9waG90b2dyYXBoX29mX2FuX2luZGlhbl9naXJsX3dpdGhfYV9iYWNrcGFja181YjYxMjg3NS04NjVhLTRkYTgtYWYzYi05NWQwNTI5ZTdjZmIucG5n.png",
      phone: "980000000",
      email: "ava@gmail.com",
    },
    {
      name: "Isabella",
      image:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAzL2ZyZWVpbWFnZXNjb21wYW55X3Bob3RvX29mX3lvdW5nX2luZGlhbl9naXJsX2hvbGRpbmdfc3R1ZGVudF9iYV80NDZhOThmNy03MzA0LTQ2MTctOWJkMy00NzI1ZDc2ZWQ2NTIucG5n.png",
      phone: "980000000",
      email: "isabella@gmail.com",
    },
  ];
  return (
    <div className="layout component-padding">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 ">
        {teams?.map((data: any, index: number) => {
          return (
            <div key={index}>
              <div className="">
                <div className=" product-card w-[300px] rounded-md shadow-xl overflow-hidden z-[10] relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
                  <div className="absolute -left-[40%] top-0 group-hover:rotate-12 transition-all duration-300 group-hover:scale-150"></div>
                  <div className="absolute rounded-full bg-[#dee6f5] z-20 left-1/2 top-[44%] h-[110%] w-[110%] -translate-x-1/2 group-hover:top-[58%] transition-all duration-300"></div>
                  <div className="para uppercase text-center leading-none z-40">
                    <div className="text-[20px] font-medium mb-4 h-[25px]">
                      {data?.name}
                    </div>
                  </div>
                  <div className="img w-[180px] aspect-square z-40 rounded-md">
                    <img
                      src={data?.image}
                      alt=""
                      className="h-[200px] object-cover"
                    />
                  </div>
                  <div className="btm-_container z-40 flex flex-row justify-between items-end gap-10">
                    <div className="flex flex-col items-center gap-1">
                      <div className="inline-flex gap-3 items-center justify-center">
                        <div className="p-1  bg-white flex items-center justify-center rounded-full">
                          <FaPhoneAlt className="text-color text-[12px]" />
                        </div>
                        <a
                          href={`tel:${data?.phone}`}
                          className="font-semibold text-xs text-color"
                        >
                          {data?.phone}
                        </a>
                      </div>
                      <div className="flex flex-row gap-2">
                        <div className="inline-flex gap-3 items-center justify-center">
                          <div className="p-1 bg-white flex items-center justify-center rounded-full">
                            <BiLogoGmail className="text-color text-[12px]" />
                          </div>
                          <a
                            href={`tel:${data?.email}`}
                            className="font-semibold text-sm text-color"
                          >
                            {data?.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTeams;
