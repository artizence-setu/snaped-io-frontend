"use client";
// import { rubik } from "@/app/layout";
import { Button } from "@/components/button";
import { Rubik } from "next/font/google";
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["500"],
});

const FirstSection = () => {
  const texts = ["Typewriter CSS", "YouTube", "Marketing"];
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setCurrentText(texts[textIndex]);
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(typingInterval);
  }, [textIndex, texts]);
  return (
    <div className="flex flex-col md:flex-row items-start justify-center gap-3 pt-0 md:pt-8 py-8 px-4 sm:px-6 md:px-8 lg:px-20 bg-background">
      <div className="py-4 md:w-[50%]">
        <h1
          className={clsx(
            "text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#1c2946] font-semibold leading-tight",
            rubik.className
          )}
        >
          Generate Faceless Videos from any Idea for{" "}
          <span className="bg-custom-gradient bg-clip-text text-gradient">
            Youtubers
          </span>
        </h1>
        <p
          className={clsx(
            "text-sm sm:text-base md:text-lg lg:text-xl mt-3 font-extralight md:w-[82%] text-foreground/80 tracking-wider"
          )}
        >
          Turn your ideas into faceless videos in minutes with our AI-powered
          platform. Create engaging videos with high-quality visuals, dynamic
          captions, and natural-sounding voiceovers effortlessly. Perfect for
          marketers, influencers, or creators—video production has never been
          easier!
        </p>
        <Button className="mt-4 text-lg lg:text-xl">
          Start Your Free Trial
        </Button>
      </div>
      <div className="flex w-full md:w-fit items-center justify-center md:justify-start">
        <Image
          src="/home-page-demo.png"
          alt="Home Page Demo"
          height={400}
          width={400}
          className=""
        />
      </div>
    </div>
  );
};

export default FirstSection;
