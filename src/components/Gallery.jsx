import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import galleryImages from "./database/gallery";

export default function Gallery() {
  return (
    <section id="gallery" className="gallery main">
      <Container>
        <Row className="justify-content-center ">
          <Col xs={12} md={10} lg={9}>
            <div className="block-content  gap-one-bottom-md text-center">
              <h1 className="uppercase indent">Image Gallery</h1>
              <i className="icon-camera-7 big-icon adjust-space " />
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center text-center">
          <Col xs={12}>
            <div className="card-gallery image-gallery">
              {galleryImages.map(im => (
                <a
                  href={`/static/img/gallery/${im}`}
                  className="popup-image mb-0"
                  key={im}
                >
                  <img
                    className="animated"
                    alt=""
                    src={`/static/img/gallery/${im}`}
                  />
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
