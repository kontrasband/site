import React from "react";
import { Container, Col, Row } from "react-bootstrap";

export default function LatestAlbum() {
  return (
    <section id="album" className="latest main">
      <Container className="container">
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={9}>
            <div className="block-content text-center gap-one-bottom-md">
              <div className="block-title ">
                <h1 className="uppercase">Side B</h1>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="justify-content-center">
          <Col xs={12} lg={4}>
            <div className="block-content text-center gap-one-bottom-sm">
              <div className="block-album-info">
                <ul>
                  <li>
                    <h5 className="uppercase list-inline-item ">Label</h5>
                    <span>Independent</span>
                  </li>
                  <li>
                    <h5 className="uppercase list-inline-item">Released</h5>
                    <span>March 1st</span>
                  </li>
                  <li>
                    <h5 className="uppercase list-inline-item">Genre</h5>
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
          </Col>
        </Row>
      </Container>
    </section>
  );
}
