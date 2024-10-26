"use client";

import posts from "@/data/posts.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Feature = () => {
  return (
    <section>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {posts.slice(0, 6).map((item) => (
          <SwiperSlide key={item.id}>
            <div>
              <div>{item.author}</div>
              <h2>{item.content}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Feature;
