/* eslint-disable @next/next/no-img-element */

import ComponentHeader from "@/components/componentHeader/ComponentHeader";

const Message = ({ data }: any) => {
  return (
    <section className="layout component-padding flex flex-col gap-10">
      <div className="">
        <ComponentHeader
          data={{
            heading: "Message from Prinicpal",
          }}
        />
      </div>

      <div className="grid lg:grid-cols-12 gap-[100px]">
        <div className="col-span-5 relative flex  justify-center lg:p-8">
          <div className="relative">
            <div className="relative p-8  w-[500px] h-[500px] rounded-[4px] bg-primary">
              <div className="absolute w-[500px] h-[500px]">
                <img
                  src={data?.principal_image_link}
                  alt=""
                  className="h-[500px] w-[500px] object-cover rounded-[8px]"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-span-7 "
          dangerouslySetInnerHTML={{
            __html: data?.principal_message,
          }}
        />
      </div>
    </section>
  );
};

export default Message;
