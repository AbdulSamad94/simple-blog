"use client";
import Image from "next/image";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="bg-slate-50 overflow-hidden">
      <motion.div
        className="flex justify-between lg:flex-row flex-col items-center lg:px-10 px-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="lg:w-1/2 mt-24 lg:mt-0"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="text-4xl flex leading-relaxed">
            <motion.span
              className="text-3xl font-semibold mr-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              &quot;
            </motion.span>
            <motion.h1
              className="font-extralight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              You don&lsquo;t need magic to change the world; all it takes is an{" "}
              <span className="text-orange-500 font-normal">
                act of kindness
              </span>
              <span className="text-3xl font-semibold ml-2">&quot;</span>
            </motion.h1>
          </div>
          <motion.h1
            className="text-xl font-semibold tracking-wide ml-5 mt-7"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            ~ AbdulSamad(me)
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Image src="/right-img.png" width={600} height={600} alt="hero-img" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
