"use client";

import posts from "@/data/posts.json";
import Image from "next/image";
import Link from "next/link";

import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";

import { Clock } from "lucide-react";
import { motion } from "framer-motion";

const Feature = () => {
  return (
    <section className="lg:mx-12 mx-3">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl text-center md:text-start font-bold tracking-tight uppercase my-8"
      >
        Featured
      </motion.div>
      <Swiper
        className="w-full lg:h-[500px] h-[550px] lg:px-7 lg:mx-10"
        modules={[Pagination, A11y]}
        a11y={{ enabled: true }}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {posts.slice(4, 10).map((item) => (
          <SwiperSlide key={item.id}>
            <Link
              href={`/blog/${item.id}`}
              className="flex justify-between lg:flex-row flex-col gap-x-7 "
            >
              <motion.div
                className="overflow-hidden shadow shadow-black rounded-lg"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  width={700}
                  height={700}
                  src={item.image_url}
                  alt="imgs"
                  className="hover:scale-110 transition-all duration-300"
                />
              </motion.div>
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="lg:text-4xl mt-4 md:mt-0 text-2xl lg:leading-relaxed font-light">
                  {item.title}
                </h1>
                <div className="my-5 flex lg:gap-x-20 gap-x-8">
                  <div className="flex gap-x-2 items-center">
                    <div className="w-6 h-6 bg-slate-300 rounded-full"></div>
                    <p className="uppercase font-bold text-sm">{item.author}</p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Clock size={20} />
                    <p className="text-sm font-bold">{item.date}</p>
                  </div>
                </div>
                <h2 className="lg:text-2xl text-lg">
                  {item.content}{" "}
                  <span className="text-orange-400 font-bold">
                    ... continue reading
                  </span>
                </h2>
              </motion.div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Feature;
