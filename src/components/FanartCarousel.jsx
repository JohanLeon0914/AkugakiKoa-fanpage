import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

export function FantartCarousel() {
  const images = [
    {
      id: 1,
      url: "/assets/fanarts/1.jpg",
      link: "https://twitter.com/equus_ignis/status/1788623222742589771",
    },
    {
      id: 2,
      url: "/assets/fanarts/2.jpg",
      link: "https://twitter.com/Ginokio1/status/1788645115663147087",
    },
    {
      id: 3,
      url: "/assets/fanarts/3.jpg",
      link: "https://twitter.com/Matiimatiz/status/1788019218467737800",
    },
    {
      id: 4,
      url: "/assets/fanarts/4.jpg",
      link: "https://twitter.com/nonamexnon93741/status/1788327154624643350",
    },
    {
      id: 5,
      url: "/assets/fanarts/5.jpg",
      link: "https://twitter.com/AGoshiki/status/1788422505985913084",
    },
    {
      id: 6,
      url: "/assets/fanarts/6.jpg",
      link: "https://twitter.com/sorathwack/status/1787180282673615245",
    },
    {
      id: 7,
      url: "/assets/fanarts/7.jpg",
      link: "https://twitter.com/TrebasD995/status/1788052040788123776",
    },
    {
      id: 8,
      url: "/assets/fanarts/8.jpg",
      link: "https://twitter.com/ExspiravitBag/status/1786991669314789492",
    },
    {
      id: 9,
      url: "/assets/fanarts/9.jpg",
      link: "https://twitter.com/harukissed/status/1785876488987845041",
    },
    {
      id: 10,
      url: "/assets/fanarts/10.jpg",
      link: "https://twitter.com/_Mewth/status/1786544379697438818",
    },
    {
      id: 11,
      url: "/assets/fanarts/11.jpg",
      link: "https://twitter.com/sorathwack/status/1788032315186188340",
    },
    {
      id: 12,
      url: "/assets/fanarts/12.jpg",
      link: "https://twitter.com/KrauserWolf_/status/1787654312203849871",
    },
    {
      id: 13,
      url: "/assets/fanarts/13.jpg",
      link: "https://twitter.com/SamaLilia/status/1786677082745151759/photo/1",
    },
    {
      id: 14,
      url: "/assets/fanarts/14.jpg",
      link: "https://twitter.com/SamaLilia/status/1786677082745151759/photo/2",
    },
    {
      id: 15,
      url: "/assets/fanarts/15.jpg",
      link: "https://twitter.com/SamaLilia/status/1786677082745151759/photo/3",
    },
    {
      id: 16,
      url: "/assets/fanarts/16.jpg",
      link: "https://twitter.com/SamaLilia/status/1786677082745151759/photo/4",
    },
  ];
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
    >
      {images.map((image) => (
        <SwiperSlide key={image.id}>
          <a href={image.link} target="_blank" rel="noopener noreferrer">
            <img src={image.url} alt={`Fanart ${image.id}`} />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
