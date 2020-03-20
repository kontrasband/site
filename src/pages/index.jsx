import React, { lazy, Suspense } from 'react'
import Hero from '../components/Hero';
const LatestAlbum = lazy(() => import("../components/LatestAlbum"));
const About = lazy(() => import("../components/About"));
const Discography = lazy(() => import("../components/Discography"));
const BandMembers = lazy(() => import("../components/BandMembers"));
const Gallery = lazy(() => import("../components/Gallery"));
const Contact = lazy(() => import("../components/Contact"));

function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<>Loading...</>}>
        <LatestAlbum />
        <About />
        <Discography />
        <BandMembers />
        <Gallery />
        <Contact />
      </Suspense>
    </>
  );
}

export default Home;
