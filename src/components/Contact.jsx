import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import artist_links from "./database/artist_links";
import StoreLinks from "./StoreLinks";

const CONTACT_LINKS = [
  {
    url: "https://web.facebook.com/kontrasband/",
    name: "facebook"
  },
  {
    url: "https://instagram.com/kontrasband/",
    name: "instagram"
  },
  ...artist_links
]

export default function Contact() {
  return (
    <section id="contact" className="contact main bg-secondary">
      <Container>
        <Row className="justify-content-center ">
          <Col xs={12} md={10} lg={9}>
            <div className="block-content gap-one-bottom-md text-center">
              <div className="block-title ">
                <h1 className="uppercase">Get in touch</h1>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} lg={10}>
            <Row as="ul" className="feature-list feature-list-sm text-center">
              <Col as="li" md={12} lg={12}>
                <div className="card text-center">
                  <div className="card-body">
                    <Row>
                      <Col md={{ span: 10, offset: 1 }}>
                        <h2 className="uppercase ">Bookings</h2>
                        <p className="mb-0">
                          <em className="uppercase h5 opc-70">
                            Arnold van der Walt
                          </em>
                          <a href="tel:+27762157185">(+27) 76 215 7185</a>
                          <br />
                          <a
                            className="text-center"
                            href="mailto:info@kontrasband.com"
                          >
                            info@kontrasband.com
                          </a>
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12}>
            <StoreLinks className="text-center mt-4" stores={CONTACT_LINKS} />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
