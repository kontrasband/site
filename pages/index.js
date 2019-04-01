import React from "react";
import Head from "next/head";

import Header from "../components/Header";
import Preloader from "../components/Preloader";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <Header />
      <Preloader />

      {/* <!--Wrapper--> */}
      <div className="wrapper">
        <Hero />

        {/* <!--Latest album section--> */}
        <section id="album" className="latest main">
          {/* <!--Container--> */}
          <div className="container">
            {/* <!--Row--> */}
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-9 ">
                <div className="block-content text-center gap-one-bottom-md">
                  <div className="block-title ">
                    <h1 className="uppercase">Side B</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--End row--> */}
          </div>
          {/* <!--End container--> */}
          {/* <!--Container--> */}
          <div className="container">
            {/* <!--Row--> */}
            <div className="row justify-content-center">
              <div className="col-12  col-lg-4  ">
                <div className="block-content text-center gap-one-bottom-sm">
                  <div className="block-album-info">
                    <ul>
                      <li>
                        <h5 className=" uppercase list-inline-item ">Label</h5>
                        <span>Independant</span>
                      </li>
                      <li>
                        <h5 className=" uppercase list-inline-item">
                          Released
                        </h5>
                        <span>March 1st</span>
                      </li>
                      <li>
                        <h5 className=" uppercase list-inline-item">Genre</h5>
                        <span>Afrikaans Alternative Rock</span>
                      </li>
                      <li>
                        <h5 className="uppercase list-inline-item">Styles</h5>
                        <span>Punk</span>
                      </li>
                      <li />
                    </ul>
                  </div>
                  <ul className="block-social list-inline mt-4">
                    <li className="list-inline-item mr-0">
                      <a href="https://itunes.apple.com/za/artist/kontras/1445772282">
                        <i className="socicon-apple" />
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a href="https://play.google.com/store/music/artist/Kontras?id=Aanobdoml5f2absa7i3ooltrm3q&hl=en">
                        <i className="socicon-play" />
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a href="https://www.amazon.com/gp/product/B07KY4GB56/ref=dm_ws_sp_ps_dp">
                        <i className="socicon-amazon" />
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a href="https://open.spotify.com/artist/13mo5g6PR09u3Rq8bEstY2?si=sytJqeERQw2EI8u1mZn0UQ">
                        <i className="socicon-spotify" />
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a href="https://www.youtube.com/channel/UC3PTVGTBJz9UmWwOxhS1i9g">
                        <i className="socicon-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!--End row--> */}
          </div>
          {/* <!--End container--> */}
        </section>
        {/* <!--End latest album section--> */}
        {/* <!--About section--> */}
        <section id="about" className="about overlay main">
          <div className="background-img">
            <img src="static/img/about-bg.png" alt="" />
          </div>
          {/* <!--Container--> */}
          <div className="container">
            {/* <!--Row--> */}
            <div className="row  vertical-align">
              <div className="col-lg-5 col-md-12">
                <div className="front-p">
                  <h1 className="uppercase text-white">
                    A different <br />
                    kind of music
                  </h1>
                  <p className=" w-93">
                    We are Kontras – a Stellenbosch-based alternative Afrikaans
                    rock band. We are a newly formed band with a signature blend
                    of rock, punk and alternative soundscapes. Our first EP,
                    Side A, is a collection of tracks that encapsulate the
                    band’s contrasting sound as well as our dynamic range in
                    subject matter. <br />
                    <br />
                    Kontras consists of four university friends who met at
                    Stellenbosch University due to their shared musical
                    experiences; Jacques Groenewald on vocals, Andrew Veldman on
                    lead guitar, Louwrens Labuschagne on the bass guitar and
                    Daniël Botha driving their sound forward on drums. Growing
                    up listening to music that ranges from an eclectic mix of
                    punk, pop, metal, and hip-hop, Kontras doesn’t define
                    themselves as a singular concept, but as a collection of the
                    shared experiences of young adults who feel frustrated with
                    the status quo.
                  </p>
                  <ul className="block-social list-inline mb-4 mb-lg-0">
                    <li className="list-inline-item mr-0">
                      <a href="https://itunes.apple.com/za/artist/kontras/1445772282">
                        <i className="socicon-apple" />
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a href="https://play.google.com/store/music/artist/Kontras?id=Aanobdoml5f2absa7i3ooltrm3q&hl=en">
                        <i className="socicon-play" />
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a href="https://www.amazon.com/gp/product/B07KY4GB56/ref=dm_ws_sp_ps_dp">
                        <i className="socicon-amazon" />
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a href="https://open.spotify.com/artist/13mo5g6PR09u3Rq8bEstY2?si=sytJqeERQw2EI8u1mZn0UQ">
                        <i className="socicon-spotify" />
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a href="https://www.youtube.com/channel/UC3PTVGTBJz9UmWwOxhS1i9g">
                        <i className="socicon-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row ">
                  <div className="col-md-4 ">
                    <a
                      href="https://www.facebook.com/events/443377719742041/"
                      style={{ color: "white" }}
                    >
                      <div className="block-content front-p pt-3 pb-3 text-center rounded bg-red mb-4 mb-lg-0">
                        <h3 className="uppercase mb-0 font-weight-600">
                          Our Next Show
                        </h3>
                        <span className=" p mb-0">
                          Aandklas
                          <br />
                          Stellenbosch, WC
                        </span>
                      </div>
                    </a>
                  </div>
                  {/* <!--                         <div className="col-md-4">
                           <div className="block-content front-p">
                              <span className="btn btn-primary uppercase with-ico border-2"><i className="icon-ticket"></i>R40 at the door</span>
                           </div>
                        </div> --> */}
                </div>
              </div>
            </div>
            {/* <!--End row--> */}
          </div>
          {/* <!--End container--> */}
        </section>
        {/* <!--End about section--> */}
        {/* <!--Discography section--> */}
        <section id="discography" className="discography main">
          {/* <!--Container--> */}
          <div className="container">
            {/* <!--Row--> */}
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-9 ">
                <div className="block-content text-center gap-one-bottom-md">
                  <div className="block-title ">
                    <h1 className="uppercase">Discography</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--End row--> */}
          </div>
          {/* <!--End container--> */}
          {/* <!--Container--> */}
          <div className="container">
            {/* <!--Row--> */}
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <div className="block-album block-content">
                  <h5 className="mb-0 opc-70 uppercase">Side A</h5>
                  <a className="link" href="http://smarturl.it/80n151">
                    View Album ›
                  </a>
                  <a href="http://smarturl.it/80n151">
                    <img
                      className="animated"
                      src="static/img/album/1.jpg"
                      alt=""
                    />
                  </a>
                  <ul className="block-social list-inline mb-md-3">
                    <li className="list-inline-item mr-0">
                      <a href="https://itunes.apple.com/za/artist/kontras/1445772282">
                        <i className="socicon-apple" />
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a href="https://play.google.com/store/music/artist/Kontras?id=Aanobdoml5f2absa7i3ooltrm3q&hl=en">
                        <i className="socicon-play" />
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a href="https://www.amazon.com/gp/product/B07KY4GB56/ref=dm_ws_sp_ps_dp">
                        <i className="socicon-amazon" />
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a href="https://open.spotify.com/artist/13mo5g6PR09u3Rq8bEstY2?si=sytJqeERQw2EI8u1mZn0UQ">
                        <i className="socicon-spotify" />
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a href="https://www.youtube.com/channel/UC3PTVGTBJz9UmWwOxhS1i9g">
                        <i className="socicon-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="block-album block-content">
                  <h5 className="mb-0 opc-70 uppercase">Side B</h5>
                  <a className="link" href="http://smarturl.it/xya64y">
                    View Album ›
                  </a>
                  <a href="http://smarturl.it/xya64y">
                    <img
                      className="animated"
                      src="static/img/album/2.jpg"
                      alt=""
                    />
                  </a>
                  <ul className="block-social list-inline mb-md-3">
                    <li className="list-inline-item mr-0">
                      <a href="https://itunes.apple.com/za/artist/kontras/1445772282">
                        <i className="socicon-apple" />
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a href="https://play.google.com/store/music/artist/Kontras?id=Aanobdoml5f2absa7i3ooltrm3q&hl=en">
                        <i className="socicon-play" />
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a href="https://www.amazon.com/gp/product/B07KY4GB56/ref=dm_ws_sp_ps_dp">
                        <i className="socicon-amazon" />
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a href="https://open.spotify.com/artist/13mo5g6PR09u3Rq8bEstY2?si=sytJqeERQw2EI8u1mZn0UQ">
                        <i className="socicon-spotify" />
                      </a>
                    </li>
                    <li className="list-inline-item mr-0">
                      <a href="https://www.youtube.com/channel/UC3PTVGTBJz9UmWwOxhS1i9g">
                        <i className="socicon-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!--End row--> */}
          </div>
          {/* <!--End container--> */}
        </section>
        {/* <!--End discography section--> */}
        {/* <!--Band members section--> */}
        <section id="band" className="band main ">
          {/* <!--Container--> */}
          <div className="container">
            {/* <!--Row--> */}
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-9">
                <div className="block-content text-center gap-one-bottom-md">
                  <div className="block-title ">
                    <h1 className="uppercase">Band members</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--End row--> */}
          </div>
          {/* <!--End container--> */}
          {/* <!--Container--> */}
          <div className="container">
            {/* <!--Row--> */}
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="block-member">
                  <img
                    src="static/img/band_members/Jacques.jpg"
                    alt="Jacques"
                  />
                  <div className="member-info">
                    <h6 className="uppercase mb-0 ">Jacques Groenewald</h6>
                    <span className=" mt-0">Vocals</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="block-member">
                  <img src="static/img/band_members/Andrew.jpg" alt="Andrew" />
                  <div className="member-info">
                    <h6 className="uppercase mb-0 ">Andrew Veldman</h6>
                    <span className=" mt-0">Lead Guitar</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="block-member">
                  <img src="static/img/band_members/Daniel.jpg" alt="Daniel" />
                  <div className="member-info">
                    <h6 className="uppercase mb-0 ">Daniel Botha</h6>
                    <span className=" mt-0">Drums</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="block-member">
                  <img
                    src="static/img/band_members/Louwrens.jpg"
                    alt="Louwrens"
                  />
                  <div className="member-info">
                    <h6 className="uppercase mb-0 ">Louwrens Labuschagne</h6>
                    <span className=" mt-0">Bass Guitar</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--End row--> */}
          </div>
          {/* <!--End container--> */}
        </section>
        {/* <!--End band members section--> */}
        {/* <!--Gallery section--> */}
        <section id="gallery" className="gallery main">
          {/* <!--Container--> */}
          <div className="container">
            {/* <!--Row--> */}
            <div className="row justify-content-center ">
              <div className="col-12 col-md-10 col-lg-9">
                <div className="block-content  gap-one-bottom-md text-center">
                  {/* <!-- As a general rule, include a heading (h1-h6) as a child of each section and article element for screen readers purposes--> */}
                  <h1 className="uppercase indent">Upcoming tours</h1>
                  <i className="icon-camera-7 big-icon adjust-space " />
                </div>
              </div>
            </div>
            {/* <!--End row--> */}
          </div>
          {/* <!--End container--> */}
          {/* <!--Container--> */}
          <div className="container">
            {/* <!--Row--> */}
            <div className="row justify-content-center text-center">
              <div className="col-12 ">
                <div className="card-gallery image-gallery">
                  <a
                    href="static/img/gallery/Kontras Band-6.jpg"
                    className="popup-image mb-0"
                  >
                    <img
                      className="animated"
                      alt=""
                      src="static/img/gallery/Kontras Band-6.jpg"
                    />
                  </a>
                  <a
                    href="static/img/gallery/Tuesday Rehearsal-4.jpg"
                    className="popup-image mb-0"
                  >
                    <img
                      className="animated"
                      alt=""
                      src="static/img/gallery/Tuesday Rehearsal-4.jpg"
                    />
                  </a>
                  <a
                    href="static/img/gallery/IMG_9761.JPG"
                    className="popup-image mb-0"
                  >
                    <img
                      className="animated"
                      alt=""
                      src="static/img/gallery/IMG_9761.JPG"
                    />
                  </a>
                  <a
                    href="static/img/gallery/Tuesday Rehearsal-7.jpg"
                    className="popup-image mb-0"
                  >
                    <img
                      className="animated"
                      alt=""
                      src="static/img/gallery/Tuesday Rehearsal-7.jpg"
                    />
                  </a>
                  <a
                    href="static/img/gallery/IMG_0163.JPG"
                    className="popup-image mb-0"
                  >
                    <img
                      className="animated"
                      alt=""
                      src="static/img/gallery/IMG_0163.JPG"
                    />
                  </a>
                  <a
                    href="static/img/gallery/Kontras Band-4.jpg"
                    className="popup-image mb-0"
                  >
                    <img
                      className="animated"
                      alt=""
                      src="static/img/gallery/Kontras Band-4.jpg"
                    />
                  </a>
                  <a
                    href="static/img/gallery/kontras-aandklas-migael.jpg"
                    className="popup-image mb-0"
                  >
                    <img
                      className="animated"
                      alt=""
                      src="static/img/gallery/kontras-aandklas-migael.jpg"
                    />
                  </a>
                  <a
                    href="static/img/gallery/IMG_0073.JPG"
                    className="popup-image mb-0"
                  >
                    <img
                      className="animated"
                      alt=""
                      src="static/img/gallery/IMG_0073.JPG"
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* <!--End row--> */}
          </div>
          {/* <!--End container--> */}
        </section>
        {/* <!--End gallery section--> */}
        {/* <!--Contact section--> */}
        <section id="contact" className="contact main bg-secondary">
          {/* <!--Container--> */}
          <div className="container">
            {/* <!--Row--> */}
            <div className="row justify-content-center ">
              <div className="col-12 col-md-10 col-lg-9">
                <div className="block-content  gap-one-bottom-md text-center">
                  <div className="block-title ">
                    <h1 className="uppercase">Get in touch</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--End row--> */}
          </div>
          {/* <!--End container--> */}
          {/* <!--Container--> */}
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-10">
                <ul className="feature-list feature-list-sm text-center row">
                  <li className="col-md-12  col-lg-12">
                    <div className="card text-center">
                      <div className="card-body">
                        <h2 className="uppercase ">Info Booking Press</h2>
                        <p className="mb-0">
                          <em className="uppercase h5 opc-70">Daniel Botha</em>{" "}
                          (+27) 60 526 6825
                          <br />
                          <a href="mailto:info@kontrasband.com">
                            info@kontrasband.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12">
                <ul className="block-social list-inline text-center mt-4">
                  <li className="list-inline-item">
                    <a href="https://web.facebook.com/kontrasband/">
                      <i className="socicon-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/kontrasband/">
                      <i className="socicon-instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.youtube.com/channel/UC3PTVGTBJz9UmWwOxhS1i9g">
                      <i className="socicon-youtube" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://itunes.apple.com/za/artist/kontras/1445772282">
                      <i className="socicon-apple" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.amazon.com/gp/product/B07KY4GB56/ref=dm_ws_sp_ps_dp">
                      <i className="socicon-amazon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!--End container--> */}
        </section>
        {/* <!--End contact section--> */}
        <footer className="pt-5 pb-5 footer">
          {/* <!--Container--> */}
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-6">
                <small className="small">
                  <span>&copy; 2019 all rights reserved</span>
                </small>
              </div>
            </div>
          </div>
          {/* <!--End container--> */}
        </footer>
        <a className="block-top scroll" href="#wrapper">
          <i className="icon-angle-up" />
        </a>
      </div>
      {/* <!-- End wrapper--> */}
      {/* <!--Javascript--> */}
      <script src="/static/js/jquery-1.12.4.min.js" />
      <script src="/static/js/jquery.flexslider-min.js" />
      <script src="/static/js/smooth-scroll.js" />
      <script src="/static/js/jquery.magnific-popup.min.js" />
      <script src="/static/js/audio.min.js" />
      <script src="/static/js/twitterFetcher_min.js" />
      <script src="/static/js/jquery.countdown.min.js" />
      <script src="/static/js/placeholders.min.js" />
      <script src="/static/js/script.js" />
      {/* <!-- Google analytics --> */}
      {/* <!-- End google analytics --> */}
    </div>
  );
}

export default Home;
