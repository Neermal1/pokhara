import Image from "next/image";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = () => {
  const galleryCollection = [
    {
      img: "https://www.usfca.edu/sites/default/files/styles/16_9_768x432/public/2022-07/college_access-students.jpg.jpeg?itok=OuQiBSZT",
    },
    {
      img: "https://www.montclair.edu/responsive-media/cache/early-college-program/wp-content/uploads/sites/238/2022/03/Student-Life.jpg.2.2x.generic.jpg",
    },
    {
      img: "https://epe.brightspotcdn.com/dims4/default/cee5d4e/2147483647/strip/true/crop/1415x960+25+0/resize/840x570!/quality/90/?url=https%3A%2F%2Fepe-brightspot.s3.us-east-1.amazonaws.com%2Fbf%2F3b%2F22106c934cb2a66a0c7e1b4634eb%2F051623-after-school-reading-ap-bs.jpg",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/MITRUS/images/MITRE-Interns-Collaboration-1663852310612.jpg",
    },
    {
      img: "https://explore.avid.org/wp-content/uploads/2022/03/student-summer-programs-hero.jpg",
    },
  ];

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number>();
  const handleImage = (image_source: any) => {
    setSelectedImage(image_source);
    setOpen(true);
  };

  const updatedFetchedData = galleryCollection?.map((data: any) => {
    return {
      src: data?.img,
    };
  });

  return (
    <div className="layout component-padding">
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-10">
        {galleryCollection?.map((data: any, index: any) => {
          return (
            <div key={data?.id}>
              <div
                onClick={() => handleImage(index)}
                className="hover:cursor-pointer group overflow-hidden rounded-[8px]"
              >
                <div className="">
                  <img
                    src={data?.img}
                    alt=""
                    className="object-cover h-[40vh]   w-[100%] transform transition duration-500 ease-in-out group-hover:scale-110 "
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={selectedImage}
        slides={updatedFetchedData}
      />
    </div>
  );
};

export default Gallery;
