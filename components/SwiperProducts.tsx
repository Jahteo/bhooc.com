import React from "react"
// import Image from "next/image"
import Link from "next/link"

// import Swiper from 'swiper';
import { Swiper, SwiperSlide, } from "swiper/react";
import 'swiper/swiper-bundle.css';
import SwiperCore, { Mousewheel, Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Mousewheel]);



// export default function SwiperProducts({slides}) : JSX.Element {
export default function SwiperProducts({slides}
//   : Array<{
//   name: string;
//   description: string;
//   img: string;
//   url: string;
//   recipes: {
//     name: string;
//     url: string;
//     img: string;
//   }[];
//   pairings: string[];
//   nutrition: string;
//   ingredients: string;
// }>
) : JSX.Element {

  return (
    <div >
      <Swiper
        className="mySwiper"
        navigation
        pagination={{"clickable": true}}
        // spaceBetween={30}
        // slidesPerView={5}
        mousewheel={true}
        // height={200}
        // autoHeight={true}
        // When cssMode enabled it will use modern CSS Scroll Snap API. It doesn't support all of Swiper's features, but potentially should bring a much better performance in simple configurations.
        // This is what is not supported when it is enabled:
        // All effects (Fade, Coverflow, Flip, Cube), Zoom, Virtual Slides, speed parameter will have no effect, All transition start/end related events
        cssMode={true}
        // Todo: set breakpoints properly
        breakpoints={{
          // when window width is >= 640px
          "640": {
            "slidesPerView": 4,
            "spaceBetween": 20
          },
          "768": {
            "slidesPerView": 4,
            "spaceBetween": 40
          },
          "1024": {
            "slidesPerView": 5,
            "spaceBetween": 50
          }
        }}
        style={{width: "100%", height: "250px"}}
      >
        {slides.map(({ name, img, url }) => {
          // Todo: Fix broken <Link>
          return <Link href={url}>
            <a>
              <SwiperSlide style={{backgroundImage: `url(${img})`, height: "200px"}}>
                {name}
              </SwiperSlide>
            </a>
          </Link>
        })}
      </Swiper>
    </div>
  )
}
