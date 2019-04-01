import React from "react";

export default function Gallery() {
  return (
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
  );
}
