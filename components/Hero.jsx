import React from "react";

function Hero() {
  return (
    <section className="hero">
      {/* <!--Main slider--> */}
      <div className="main-slider slider flexslider">
        <ul className="slides">
          <li>
            <div className="background-img overlay zoom">
              <img src="static/img/kontras-aandklas.jpg" alt="" />
            </div>
            {/* <!--Container--> */}
            <div className="container hero-content">
              {/* <!--Row--> */}
              <div className="row">
                <div className="col-sm-12 text-center">
                  {/* <!--Inner hero--> */}
                  <div className="inner-hero">
                    <h1 className="large text-white uppercase mb-0">Kontras</h1>
                    <h5 className="mb-0 text-white uppercase">
                      Afrikaans Music Made Real Good
                    </h5>
                  </div>
                </div>
                {/* <!--End row--> */}
              </div>
              {/* <!--End container--> */}
            </div>
            {/* <!--End inner hero--> */}
          </li>
          <li>
            <div className="background-img overlay zoom">
              <img src="static/img/album/2.jpg" alt="" />
            </div>
            {/* <!--Container--> */}
            <div className="container hero-content">
              {/* <!--Row--> */}
              <div className="row">
                <div className="col-sm-12 text-center">
                  {/* <!--Inner hero--> */}
                  <div className="inner-hero">
                    <h1 className="large text-white uppercase mb-0">
                      "Side B"
                    </h1>
                    <h5 className="mb-0 text-white uppercase">
                      Now Available Everywhere
                    </h5>
                    <a
                      className="video-play-but"
                      href="http://smarturl.it/xya64y"
                      target="_blank"
                    />
                  </div>
                </div>
                {/* <!--End row--> */}
              </div>
              {/* <!--End container--> */}
            </div>
            {/* <!--End inner hero--> */}
          </li>
        </ul>
      </div>
      {/* <!--End main slider--> */}
      {/* <!--Header--> */}
      <header className="header default">
        <div className=" left-part">
          <a className="logo scroll" href="#wrapper">
            <h2 className="mb-0 uppercase">Kontras</h2>
          </a>
        </div>
        <div className="right-part">
          <nav className="main-nav">
            <div className="toggle-mobile-but">
              <a href="#" className="mobile-but">
                <div className="lines" />
              </a>
            </div>
            <ul className="main-menu list-inline">
              <li>
                <a className="scroll list-inline-item" href="#wrapper">
                  Home
                </a>
              </li>
              <li>
                <a className="scroll list-inline-item" href="#about">
                  about
                </a>
              </li>
              <li>
                <a className="scroll list-inline-item" href="#discography">
                  discography
                </a>
              </li>
              <li>
                <a className="scroll list-inline-item" href="#band">
                  Band
                </a>
              </li>
              <li>
                <a className="scroll list-inline-item" href="#gallery">
                  Gallery
                </a>
              </li>
              <li>
                <a className="scroll list-inline-item" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* <!--End header--> */}
    </section>
  );
}

export default Hero;
