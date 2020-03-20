import React, { useEffect, lazy, Suspense } from "react";

import Body from "./components/Body";
import Hero from "./components/Hero";

const LatestAlbum = lazy(() => import("./components/LatestAlbum"));
const About = lazy(() => import("./components/About"));
const Discography = lazy(() => import("./components/Discography"));
const BandMembers = lazy(() => import("./components/BandMembers"));
const Gallery = lazy(() => import("./components/Gallery"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollUp = lazy(() => import("./components/ScrollUp"));

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/static/js/script.js";
    document.getElementById("root").appendChild(script);
  }, []);

  return (
    <Body>
      <Hero />
      <Suspense fallback={<>Loading...</>}>
        <LatestAlbum />
        <About />
        <Discography />
        <BandMembers />
        <Gallery />
        <Contact />
        <Footer />
        <ScrollUp />
      </Suspense>
    </Body>
  );
}

export default App;
