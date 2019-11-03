import React from "react";

import { Container, Row, Col } from "react-bootstrap";

// import UpcomingEvents from "./UpcomingEvents";

export default function About() {
  return (
    <section id="about" className="about overlay main">
      <div className="background-img">
        <img src="/static/img/gallery/Rocking Stellies-7.jpg" alt="" />
      </div>
      <Container>
        <Row className="vertical-align">
          <Col lg={5} md={12} className="col-lg-5 col-md-12">
            <div className="front-p">
              <h1 className="uppercase text-white">
                &ldquo;Ons almal is 'n kontras&hellip;
              </h1>
              <p className=" w-93">
                &hellip;Ons haat die dinge wat ons self die meeste doen.&rdquo;
              </p>
              <p className="w-93">
                Ons maak Afrikaanse alternatiewe rock met 'n punk invloed. Van
                ons tunes is hard. Van ons tunes trek jou hartsnare. Word deel
                van die kontras.
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
          </Col>
          <Col lg={7}>{/* <UpcomingEvents /> */}</Col>
        </Row>
      </Container>
    </section>
  );
}
