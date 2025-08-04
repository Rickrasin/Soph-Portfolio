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
        className="gallery-swiper w-full max-w-full"
        modules={[Navigation, Pagination, Grid]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={2}
        grid={{
          rows: 2,
          fill: "row"
        }}
        breakpoints={{
          1024: {
            slidesPerView: 2,
            grid: { rows: 2 }
          },
          768: {
            slidesPerView: 1,
            grid: { rows: 2 }
          },
          0: {
            slidesPerView: 1,
            grid: { rows: 1 }
          }
        }}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx} className="!h-auto w-full">
            <PhotoView src={img.url}>
              <div className="relative w-full max-w-full aspect-square bg-gray-100 rounded-xl overflow-hidden cursor-zoom-in shadow-md hover:shadow-lg transition-all duration-300">
                <Image
                  src={img.url}
                  alt={`Imagem ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </PhotoView>
          </SwiperSlide>
        ))}
      </Swiper>
    </PhotoProvider>
  );
};

export default GallerySlider;
