"use client";

import posts from "@/data/posts.json";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";

const Articles = () => {
  const [load, setLoad] = useState(5);

  return (
    <section className="md:mx-10 mx-3 mt-10 overflow-hidden">
      <h1 className="text-3xl md:text-left text-center tracking-tight font-bold uppercase my-16">
        Related Articles
      </h1>
      <div className="my-8 flex gap-10 flex-col">
        {posts.slice(0, load).map((item, index) => (
          <Link
            href={`/blog/${item.id}`}
            className="flex justify-between lg:flex-row flex-col gap-x-10"
            key={index}
          >
            <div className="lg:w-[35%]">
              <Image
                className="h-96 w-[100%]"
                width={300}
                height={300}
                src={item.image_url}
                alt="img"
              />
            </div>
            <div className="lg:w-9/12 mt-8 lg:mt-0">
              <h1 className="lg:text-4xl text-3xl lg:leading-relaxed font-light">
                {item.title}
              </h1>
              <div className="my-5 flex gap-x-20">
                <div className="flex gap-x-2 items-center">
                  <div className="w-6 h-6 bg-slate-300 rounded-full"></div>
                  <p className="uppercase font-bold text-sm">{item.author}</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <Clock size={20} />
                  <p className="text-sm font-bold">{item.date}</p>
                </div>
              </div>
              <h2 className="lg:text-2xl text-lg mt-8">
                {item.content}{" "}
                <span className="text-orange-400 font-bold">
                  ... continue reading
                </span>
              </h2>
            </div>
          </Link>
        ))}
      </div>
      <div
        className={`${
          load > 5 ? "hidden" : "flex"
        } w-full justify-center items-center my-14`}
      >
        <button
          onClick={() => setLoad(10)}
          className="text-xl font-light text-orange-500 uppercase py-2 px-16 border w-auto justify-center items-center h-14 border-orange-500"
        >
          Load more
        </button>
      </div>
    </section>
  );
};

export default Articles;
