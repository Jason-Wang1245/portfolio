"use client";

import { useState } from "react";
import Details from "../Details";
import Intro from "../Intro";

export default function PortfolioContent() {
  const [isIntroHidden, setIsIntroHidden] = useState(false);

  return (
    <div className="relative">
      <Intro onHide={() => setIsIntroHidden(true)} />
      <Details isIntroHidden={isIntroHidden} />
    </div>
  );
}
