import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface GalleryItem {
  id: number;
  image_link: string;
}

interface GalleryProps {
  galleryCollection?: GalleryItem[];
}

const Gallery = ({ galleryCollection = [] }: GalleryProps) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleImage = (index: number) => {
    setSelectedImage(index);
    setOpen(true);
  };

  // Convert galleryCollection to Lightbox-compatible format
  const slides = galleryCollection
    .filter((item) => item.image_link) // Ensure image_link is not undefined
    .map((item) => ({ src: item.image_link }));

  return (
    <div className="layout component-padding">
      {galleryCollection.length === 0 ? (
        <p className="text-center text-gray-500">No images available.</p>
      ) : (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
          {galleryCollection.map((data, index) => (
            <div key={data.id}>
              <div
                onClick={() => handleImage(index)}
                className="hover:cursor-pointer group overflow-hidden rounded-[8px]"
              >
                <div>
                  <img
                    src={data.image_link}
                    alt={`Gallery image ${index + 1}`}
                    className="object-cover h-[40vh] w-[100%] transform transition duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={selectedImage ?? 0}
        slides={slides}
      />
    </div>
  );
};

export default Gallery;
