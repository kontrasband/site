import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { live } from "./database/gallery";
import { usePopup } from "../utils";
import Masonry from "./Masonry";

export default function Gallery() {
  usePopup();

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
        <Masonry images={live} />
      </Container>
    </section>
  );
}
