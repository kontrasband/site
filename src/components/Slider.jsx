import React from "react";
import Slide from "./Slide";

import SLIDES from "./database/slides";

function Slider() {
  return (
    <div className="main-slider slider flexslider">
      <ul className="slides">
        {SLIDES.map(slide => (
          <Slide key={slide.id} slide={slide} />
        ))}
      </ul>
    </div>
  );
}

export default Slider;
