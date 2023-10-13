import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const images = [
  new URL('../assets/gallery_preview/1.jpg', import.meta.url).href,,
  new URL('../assets/gallery_preview/2.jpg', import.meta.url).href,,
  new URL('../assets/gallery_preview/3.jpg', import.meta.url).href,,
  new URL('../assets/gallery_preview/4.jpg', import.meta.url).href,,
  new URL('../assets/gallery_preview/5.jpg', import.meta.url).href,,
];

export default () => {
  return (
    <div className="gallery-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        spaceBetween={50}
        pagination={{ clickable: true }}
        loop
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <img
              src={new URL(`${image}`, import.meta.url).href}
              class="d-block"
              alt="image"
              id="carousel-img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
