import React from "react";
import Slide from "./Slide";

const SLIDES = [
  {
    "id": 1,
    "bg": "/static/img/paige-shoot.jpg",
    "title": "Kontras",
    "body": "Alternatiewe Afrikaanse Musiek"
  },
  {
    "id": 2,
    "bg": "/static/img/kontras-aandklas.jpg",
    "title": "Ons almal is 'n kontras",
    "body": "Ons haat die dinge wat ons self die meeste doen."
  },
  {
    "id": 3,
    "bg": "/static/img/velde-vid.jpeg",
    "title": "Velde",
    "body": "Kyk hom op YouTube",
    "href": "https://www.youtube.com/watch?v=2OeLrsLnCio"
  }
  // {
  //   "id": 4,
  //   "bg": "/static/img/artwork/velde-banner.jpg",
  //   "title": "Velde",
  //   "body": "Kry hom nou op alle platforms",
  //   "href": "http://smarturl.it/xya64y"
  // }
]

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
