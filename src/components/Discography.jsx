import React from "react";

import { Container, Row, Col } from "react-bootstrap";

export default function Discography() {
  return (
    <section id="discography" className="discography main">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={9}>
            <div className="block-content text-center gap-one-bottom-md">
              <div className="block-title ">
                <h1 className="uppercase">Discography</h1>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <div className="block-album block-content">
              <h5 className="mb-0 opc-70 uppercase">Side A</h5>
              <a className="link" href="http://smarturl.it/80n151">
                View Album ›
              </a>
              <a href="http://smarturl.it/80n151">
                <img
                  className="animated"
                  src="/static/img/album/1.jpg"
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
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className="block-album block-content">
              <h5 className="mb-0 opc-70 uppercase">Side B</h5>
              <a className="link" href="http://smarturl.it/xya64y">
                View Album ›
              </a>
              <a href="http://smarturl.it/xya64y">
                <img
                  className="animated"
                  src="/static/img/album/2.jpg"
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
          </Col>
        </Row>
      </Container>
    </section>
  );
}
