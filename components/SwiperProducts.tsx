import React from "react"
import Image from "next/image"
import Link from "next/link"

// import Swiper from 'swiper';
import { Swiper, SwiperSlide, } from "swiper/react";
import 'swiper/swiper-bundle.css';
import SwiperCore, { Mousewheel, Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Mousewheel]);

function LinkOrImg (image: string): JSX.Element {
  if (image.includes("http")) {
    return <img src={image}></img>
  } else {
    return <Image src={image} height={200} width={200} layout="responsive"></Image>
  }
}

export interface Slide {
  name: string;
  url: string;
  img: string;
}

export type Slides = Array<Slide>
// export interface Slides{
//     id: number;
//     name: string;
//     description: string;
//     img: string;
//     url: string;
//     recipes: {
//       name: string;
//       url: string;
//       img: string;
//     }[];
//     pairings: string[];
//     price: number;
//     nutrition: string;
//     ingredients: string;
//   }[]


// export default function SwiperProducts({slides}) : JSX.Element {
export default function SwiperProducts({slides}: {slides: Slides}
) : JSX.Element {

  return (
    <div >
      <Swiper
        className="mySwiper"
        navigation
        pagination={{"clickable": true}}
        preventClicks={false}
        // spaceBetween={30}
        // slidesPerView={5}
        mousewheel={true}
        // height={200}
        // autoHeight={true}
        // When cssMode enabled it will use modern CSS Scroll Snap API. It doesn't support all of Swiper's features, but potentially should bring a much better performance in simple configurations.
        // This is what is not supported when it is enabled:
        // All effects (Fade, Coverflow, Flip, Cube), Zoom, Virtual Slides, speed parameter will have no effect, All transition start/end related events
        // cssMode={true}
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
          return (
            <Link href={url} passHref>
              <a>
                <SwiperSlide
                  style={{
                  // backgroundImage: `url(${img})`,
                    height: "200px"
                  }}>
                  {LinkOrImg(img)}
                  <h3>{name}</h3>
                </SwiperSlide>
              </a>
            </Link>
          )
        })}
      </Swiper>
    </div>
  )
}
