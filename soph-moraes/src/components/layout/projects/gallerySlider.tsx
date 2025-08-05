import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";

interface Props {
  images: { url: string }[];
}

const GallerySlider = ({ images }: Props) => {
  return (
    <PhotoProvider>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={16}
        breakpoints={{
          0: {
            slidesPerView: 4
          },
          768: {
            slidesPerView: 6
          }
        }}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <PhotoView src={img.url}>
              <Image
                src={img.url}
                alt={`Imagem ${idx + 1}`}
                width={600}
                height={400}
                className="rounded-md object-cover w-full h-full max-h-[300px]"
              />
            </PhotoView>
          </SwiperSlide>
        ))}
      </Swiper>
    </PhotoProvider>
  );
};

export default GallerySlider;
