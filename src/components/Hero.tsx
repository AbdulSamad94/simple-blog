import Image from "next/image";

const Hero = () => {
  return (
    <section className=" bg-slate-50">
      <div className="flex justify-between items-center px-10">
        <div className="w-1/2">
          <div className="text-4xl flex leading-relaxed">
            <span className="text-3xl font-semibold mr-2">&quot;</span>
            <h1 className="font-extralight">
              You don&lsquo;t need magic to change the world; all it takes is an{" "}
              <span className="text-orange-500 font-normal">
                act of kindness
              </span>
              <span className="text-3xl font-semibold ml-2">&quot;</span>
            </h1>
          </div>
          <h1 className="text-xl font-semibold tracking-wide ml-5 mt-7">
            ~ AbdulSamad(me)
          </h1>
        </div>
        <div>
          <Image src="/right-img.png" width={600} height={600} alt="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
