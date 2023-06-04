"use client";
import Image from "next/image";
import Link from "next/link";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
        <div className="md:w-1/2 md:mt-2xl">
          <Image
            className="rounded-full shadow-2xl"
            src="/profile.png"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">
            Hi, I&#39;m Alicia!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Full Stack Developer
            </span>{" "}
            based in Villa Mercedes, San Luis, Argentina. Working towards
            creating software that makes life easier and more meaningful.
          </p>
          <Link
            href="/projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <Link href="/about">
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
