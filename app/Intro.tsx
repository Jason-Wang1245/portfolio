"use client";

import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import { Titillium_Web } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const playfairDisplay = Titillium_Web({ subsets: ["latin"], weight: ["700"] });

export default function Intro() {
  const [hidden, setHidden] = useState(false); // used to ensure its hidden from dom
  const [toggleHidden, setToggleHidden] = useState(false); // used to trigger hiding animation

  function hide() {
    setToggleHidden(true);
    setTimeout(() => setHidden(true), 500);
  }

  if (!hidden)
    return (
      <div
        className={`${playfairDisplay.className} ${
          !toggleHidden ? "translate-y-0" : "-translate-y-full"
        } absolute top-0 left-0 h-screen w-screen flex flex-col items-center place-content-center cursor-pointer bg-black z-10 transform transition-transform duration-500`}
        onClick={hide}
      >
        <Image src="/profile.jpg" width={128} height={128} alt="profile.jpg" className="rounded-full shadow-xl" />
        <h1 className="text-6xl my-2">Hello. I&apos;m Jason Wang</h1>
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
          style={{ fontSize: "1.5em" }}
          repeat={Infinity}
        />
        <div className="absolute bottom-0 mb-8 flex flex-col items-center">
          <MdKeyboardDoubleArrowDown className="text-white w-12 h-12 animate-bounce" />
        </div>
      </div>
    );
  else return true;
}
