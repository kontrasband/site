import React from "react";
import Slider from "./Slider";
import { useWindowSize } from "../utils";

export default function Hero() {
  const { height } = useWindowSize();

  return (
    <section id="hero" className="hero" style={{ height }}>
      <Slider />
    </section>
  );
}
