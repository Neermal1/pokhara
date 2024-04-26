import { Modal } from "antd";
import { useState } from "react";
//images
import school from "../../../public/images/ads.jpg";
import Image from "next/image";

const Advertisement = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered={true}
        footer={false}
      >
        <div className=" mt-10">
          <Image
            src={school}
            alt="loading"
            className="object-cover rounded-[8px]  w-[100%]"
          ></Image>
        </div>
      </Modal>
    </div>
  );
};

export default Advertisement;
