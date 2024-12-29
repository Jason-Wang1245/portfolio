"use client";

import Spline from "@splinetool/react-spline";
import { useState } from "react";

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
      <div className="intro-content">
        <div className="grid place-content-center h-screen">Hello</div>
      </div>
    </div>
  );
}
