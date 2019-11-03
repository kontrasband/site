import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Slider() {
  return (
    <div className="main-slider slider flexslider">
      <ul className="slides">
        <li>
          <div className="background-img overlay zoom">
            <img src="/static/img/kontras-aandklas.jpg" alt="" />
          </div>
          <Container className="hero-content">
            <Row>
              <Col sm={12} className="text-center">
                <div className="inner-hero">
                  <h1 className="large text-whitppercase mb-0">Kontras</h1>
                  <h5 className="mb-0 text-white uppercase">
                    Afrikaans Music Made Real Good
                  </h5>
                </div>
              </Col>
            </Row>
          </Container>
        </li>
        <li>
          <div className="background-img overlay zoom">
            <img src="/static/img/album/2.jpg" alt="" />
          </div>
          <Container className="hero-content">
            <Row>
              <Col sm={12} className="text-center">
                <div className="inner-hero">
                  <h1 className="large text-white uppercase mb-0">"Side B"</h1>
                  <h5 className="mb-0 text-white uppercase">
                    Now Available Everywhere
                  </h5>
                  <a
                    className="video-play-but"
                    href="http://smarturl.it/xya64y"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &nbsp;
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </li>
      </ul>
    </div>
  );
}

export default Slider;
