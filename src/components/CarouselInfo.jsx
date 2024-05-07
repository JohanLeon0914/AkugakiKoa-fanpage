import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

export function Carrousel() {
  return (
    <Swiper
        spaceBetween={20}
      slidesPerView={2}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      <SwiperSlide>
        <div className="relative">
          <img src="/assets/merch.jpg" className="max-h-[900px] w-full" alt="koa_carrousel" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-main bg-opacity-50 rounded-md p-4">
              <a href="https://shop.idol-company.com/products/koa-akugaki-regular-collection?_pos=1&_fid=9aba85553&_ss=c" target='_BLANK'>
                <p className="text-white text-xl text-color_text_secund">Merch Oficial</p>
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img src="/assets/horario.jpg" className="max-h-[900px] w-full" alt="koa_carrousel" />
          <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-main bg-opacity-50 rounded-md p-4">
            <a href="https://twitter.com/AkugakiKoa/status/1786804288582218001" target='_BLANK'>
              <p className="text-white text-xl text-color_text_secund">Horario Semanal</p>
            </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img src="/assets/koa2.jpg" className="max-h-[900px] w-full" alt="koa_carrousel" />
          <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-main bg-opacity-50 rounded-md p-4">
            <a href="https://www.youtube.com/watch?v=NHli4ClMOuA&t=845s" target='_BLANK'>
              <p className="text-white text-xl text-color_text_secund">Stream Debut</p>
            </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};