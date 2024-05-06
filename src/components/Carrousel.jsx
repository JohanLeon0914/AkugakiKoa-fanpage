import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export function Carrousel() {
  return (
    <Swiper
      slidesPerView={1}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <img src="/assets/koa1.jpg" className='max-h-[900px] w-full' alt="koa_carrousel" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/koa2.jpg" className='max-h-[900px] w-full' alt="koa_carrousel" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/koa3.jpg" className='max-h-[900px] w-full' alt="koa_carrousel" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/assets/koa4.jpg" className='max-h-[900px] w-full' alt="koa_carrousel" />
      </SwiperSlide>
    </Swiper>
  );
};