"use client";

import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import { Titillium_Web } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const playfairDisplay = Titillium_Web({ subsets: ["latin"], weight: ["700"] });

export default function Intro({ onHide }: { onHide?: () => void }) {
  const [hidden, setHidden] = useState(false); // used to ensure its hidden from dom
  const [toggleHidden, setToggleHidden] = useState(false); // used to trigger hiding animation

  function hide() {
    setToggleHidden(true);
    setTimeout(() => {
      setHidden(true);
      onHide?.();
    }, 500);
  }

  if (!hidden)
    return (
      <div
        className={`${playfairDisplay.className} ${
          !toggleHidden ? "translate-y-0" : "-translate-y-full"
        } absolute top-0 left-0 h-screen w-screen flex flex-col items-center justify-center px-4 cursor-pointer bg-black z-10 transform transition-transform duration-500`}
        onClick={hide}
      >
        <Image
          src="/profile.jpg"
          width={128}
          height={128}
          alt="profile.jpg"
          className="rounded-full shadow-xl w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 object-cover mb-4 sm:mb-6"
        />
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-2 text-center px-4 leading-tight">Hello. I&apos;m Jason Wang</h1>
        <div className="text-center px-4 mt-2 sm:mt-4">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "I am a University Student",
              1500,
              "I am a Software Engineer",
              1500,
            ]}
            wrapper="h2"
            speed={30}
            className="text-base sm:text-lg md:text-xl lg:text-2xl"
            repeat={Infinity}
          />
        </div>
        <div className="absolute bottom-0 mb-4 sm:mb-6 md:mb-8 flex flex-col items-center">
          <MdKeyboardDoubleArrowDown className="text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 animate-bounce" />
        </div>
      </div>
    );
  else return true;
}
