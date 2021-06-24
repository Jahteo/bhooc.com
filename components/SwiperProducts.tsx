import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Product } from "../types/Product"
import { Recipe } from "../types/Recipe"

import { Swiper, SwiperSlide, } from "swiper/react";
import 'swiper/swiper-bundle.css';
import SwiperCore, { Mousewheel, Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Mousewheel]);

function LinkOrImg (image: string): JSX.Element {
  //todo: remove http option after unsplash is gone
  if (image.includes("http")) {
    return <img src={image}></img>
  } else if (image == "") {
    return <Image src="/images/recipes/norecipeImg.jpg" height={200} width={200} layout="responsive"></Image>
  } else {
    return <Image src={image} height={200} width={200} layout="responsive"></Image>
  }
}

export default function SwiperProducts({slides}: {slides: Product[] | Recipe[] }
) : JSX.Element {
  // console.log(slides)
  return (
    <div >
      <Swiper
        // className="mySwiper"
        navigation
        pagination={{"clickable": true}}
        preventClicks={false}
        preventClicksPropagation={false}
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
        {slides.map(({ name, img, slug }) => {
          // Todo: Fix broken <Link>
          return (
            <SwiperSlide key={slug}
              style={{
                // backgroundImage: `url(${img})`,
                height: "200px"
              }}>
              <Link href={`/product/${slug}`} passHref>
                <a>
                  {LinkOrImg(img)}
                  <h3>{name}</h3>
                </a>
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
