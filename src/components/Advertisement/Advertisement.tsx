// import { Modal } from "antd";
// import { useState } from "react";
// //images
// import School from "../../../public/images/ads.jpg";
// import Image from "next/image";

// const Advertisement = () => {
//   const [isModalOpen, setIsModalOpen] = useState(true);

//   const handleOk = () => {
//     setIsModalOpen(false);
//   };

//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };
//   return (
//     <div>
//       <Modal
//         open={isModalOpen}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         centered={true}
//         footer={false}
//       >
//         <div className=" mt-10">
//           <Image
//             src={School}
//             alt="loading"
//             className="object-cover rounded-[8px] w-[100%]"
//           ></Image>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default Advertisement;
import { useEffect, useState } from "react";
import { Modal } from "antd";

//hooks
import useFetchData from "@/hooks/useFetchData";

const Advertisement = () => {
  const { fetchedData } = useFetchData("home/notices");

  const [advLength, setAdvLength] = useState<any>();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [img, setImage] = useState("");

  const advertisementLength = fetchedData?.length;

  const reversedAdvertisementData = fetchedData
    ? [...fetchedData].reverse()
    : null;

  useEffect(() => {
    setAdvLength(advertisementLength);
  }, [advertisementLength]);

  useEffect(() => {
    setImage(reversedAdvertisementData?.[advLength - 1]?.image_link);
    console.log(reversedAdvertisementData?.[advLength - 1]?.image_link);
  }, [advLength]);

  const handleCancel = () => {
    if (advLength > 1) {
      setAdvLength(advLength - 1);
    } else {
      setIsModalOpen(false);
    }
  };

  if (fetchedData?.length > 0) {
    return (
      <div className="">
        {fetchedData && (
          <Modal
            open={isModalOpen}
            onCancel={handleCancel}
            footer={false}
            centered={true}
          >
            <img src={img} alt="" />
          </Modal>
        )}
      </div>
    );
  }
};

export default Advertisement;
