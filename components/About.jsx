import React from "react";

export default function About() {
  return (
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
                We are Kontras – a Stellenbosch-based alternative Afrikaans rock
                band. We are a newly formed band with a signature blend of rock,
                punk and alternative soundscapes. Our first EP, Side A, is a
                collection of tracks that encapsulate the band’s contrasting
                sound as well as our dynamic range in subject matter. <br />
                <br />
                Kontras consists of four university friends who met at
                Stellenbosch University due to their shared musical experiences;
                Jacques Groenewald on vocals, Andrew Veldman on lead guitar,
                Louwrens Labuschagne on the bass guitar and Daniël Botha driving
                their sound forward on drums. Growing up listening to music that
                ranges from an eclectic mix of punk, pop, metal, and hip-hop,
                Kontras doesn’t define themselves as a singular concept, but as
                a collection of the shared experiences of young adults who feel
                frustrated with the status quo.
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
  );
}
