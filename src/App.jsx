import React from "react";

import Body from "./components/Body";
import Hero from "./components/Hero";
import LatestAlbum from "./components/LatestAlbum";
import About from "./components/About";
import Discography from "./components/Discography";
import BandMembers from "./components/BandMembers";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";

function App() {
  return (
    <Body>
      <Hero />
      <LatestAlbum />
      <About />
      <Discography />
      <BandMembers />
      <Gallery />
      <Contact />
      <Footer />
      <ScrollUp />
    </Body>
  );
}

export default App;
