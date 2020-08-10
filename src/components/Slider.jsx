import React from "react";
import { Row, Container, Col, Carousel } from "react-bootstrap";
import BackgroundImage from "./BackgroundImage";

const SLIDES = [
  {
    "id": 3,
    "bg": "/static/img/artwork/die-ruimtevaarder-banner.jpg",
    "title": "Die Ruimtevaarder",
    "body": "Stream dit nou op alle platforms",
    "href": "http://smarturl.it/sp1ih4" // TODO
  },
  {
    "id": 1,
    "bg": "/static/img/paige-shoot.jpg",
    "title": "Kontras",
    "body": "Alternatiewe Afrikaanse Musiek"
  },
  {
    "id": 2,
    "bg": "/static/img/kontras-aandklas.jpg",
    "title": "Ons almal is 'n kontras",
    "body": "Ons haat die dinge wat ons self die meeste doen."
  },
  {
    "id": 4,
    "bg": "/static/img/velde-vid.jpeg",
    "title": "Velde",
    "body": "Kyk hom op YouTube",
    "href": "https://www.youtube.com/watch?v=2OeLrsLnCio"
  }
]

function Slider() {
  return (
    <Carousel controls={false} fade={true} >
      {SLIDES.map(slide => {
        const { id, bg, title, body, href } = slide;
        return (
          <Carousel.Item key={id}>
            <BackgroundImage src={bg} className="overlay zoom" />
            <Container className="hero-content">
              <Row>
                <Col sm={12} className="text-center">
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
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default Slider;
