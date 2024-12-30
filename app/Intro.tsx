"use client";

import { Titillium_Web } from "next/font/google";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const playfairDisplay = Titillium_Web({ subsets: ["latin"], weight:["700"] });

export default function Intro() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="intro-container">
      {isLoading && (
        <div className="w-full h-full flex flex-col justify-center items-center bg-black">
          <div className="w-16 h-16 border-4 border-t-4 border-gray-700 border-t-blue-500 rounded-full animate-spin mb-4"></div>
          <p className="text-lg text-white animate-bounce">Loading...</p>
        </div>
      )}
      <div className="spline-background">
        <Spline
          onLoad={() => {
            setIsLoading(false);
          }}
          style={{ height: "110vh" }}
          scene="https://prod.spline.design/mtne7ggQp72SlTvd/scene.splinecode"
        />
      </div>
      <div className={`intro-content ${playfairDisplay.className}`}>
        <Image src="/profile.jpg" width={128} height={128} alt="profile.jpg" className="rounded-full shadow-xl" />
        <h1 className="text-6xl my-2">Hello. I&apos;m Jason Wang</h1>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "I am a University Student",
            1500,
            "I am a Software Engineer",
            1500,
            "I am a Artist",
            1500
          ]}
          wrapper="h2"
          speed={30}
          style={{ fontSize: "1.5em" }}
          repeat={Infinity}
        />
      </div>
    </div>
  );
}
