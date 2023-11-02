import React from "react";
import { Row, Container, Col, Carousel } from "react-bootstrap";
import BackgroundImage from "./BackgroundImage";

const SLIDES = [
  {
    id: 1,
    bg: "/static/img/artwork/soos-n-brander.png",
    title: "Soos 'n Brander",
    body: "Luister hom op jou gunstelling platform",
    href: "https://lnkfi.re/DnvaCxWI",
  },
  {
    id: 3,
    bg: "/static/img/kiffme-vid.png",
    title: "Iets Is Fokken Fout Met My",
    body: "Kyk hom op YouTube",
    href: "https://www.youtube.com/watch?v=A-g0e-LFRNE",
  },
  {
    id: 4,
    bg: "/static/img/artwork/somer-sonder-sondes-banner.jpeg",
    title: "Somer Sonder Sondes",
    body: "Stream dit nou op alle platforms",
    href: "https://distrokid.com/hyperfollow/kontras/somer-sonder-sondes",
  },
  {
    id: 2,
    bg: "/static/img/kontras-aandklas.jpg",
    title: "Ons almal is 'n kontras",
    body: "Ons haat die dinge wat ons self die meeste doen.",
  },
];

function Slider() {
  return (
    <Carousel controls={false} fade={true}>
      {SLIDES.map((slide) => {
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
