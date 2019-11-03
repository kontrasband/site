import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Slide({ slide }) {
  const { bg, title, body, href } = slide;
  return (
    <li>
      <div className="background-img overlay zoom">
        <img src={bg} alt="" />
      </div>
      <Container className="hero-content">
        <Row>
          <Col sm={12} className="text-center">
            <div className="inner-hero">
              <h1 className="large text-whitppercase mb-0">{title}</h1>
              <h5 className="mb-0 text-white uppercase">{body}</h5>

              {href && (
                <a
                  className="video-play-but"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &nbsp;
                </a>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </li>
  );
}

export default Slide;
