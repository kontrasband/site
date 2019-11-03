import React from "react";

import galleryImages from "./database/gallery";

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
              <h1 className="uppercase indent">Image Gallery</h1>
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
              {galleryImages.map(im => (
                <a
                  href={`/static/img/gallery/${im}`}
                  className="popup-image mb-0"
                  key={im}
                >
                  <img
                    className="animated"
                    alt=""
                    src={`/static/img/gallery/${im}`}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* <!--End row--> */}
      </div>
      {/* <!--End container--> */}
    </section>
  );
}
