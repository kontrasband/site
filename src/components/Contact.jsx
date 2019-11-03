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
                    <div className="row">
                      <div className="col-md-4">
                        <h2 className="uppercase">Info</h2>
                        <p className="mb-0">
                          <em className="uppercase h5 opc-70">Daniel Botha</em>
                          <a href="tel:+27605266825">(+27) 60 526 6825</a>
                        </p>
                      </div>
                      <div className="col-md-4">
                        <h2 className="uppercase ">Booking</h2>
                        <p className="mb-0">
                          <em className="uppercase h5 opc-70">
                            Arnold van der Walt
                          </em>
                          <a href="tel:+27762157185">(+27) 76 215 7185</a>
                        </p>
                      </div>
                      <div className="col-md-4">
                        <h2 className="uppercase">Press</h2>
                        <p className="mb-0">
                          <em className="uppercase h5 opc-70">
                            Andrew Veldman
                          </em>
                          <a href="tel:+27827986803">(+27) 82 798 6803</a>
                        </p>
                      </div>
                    </div>

                    <h2 className="uppercase mt-5">Email</h2>
                    <a
                      className="text-center"
                      href="mailto:info@kontrasband.com"
                    >
                      info@kontrasband.com
                    </a>
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
