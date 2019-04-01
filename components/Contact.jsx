import React from "react";

export default function Contact() {
  return (
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
  );
}
