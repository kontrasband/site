import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { getLatestRelease } from "../utils";
import Release from "./Release";

const RELEASE = getLatestRelease();

export default function LatestAlbum() {
  return (
    <section id="album" className="latest main">
      <Container className="container">
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={9}>
            <div className="block-content text-center gap-one-bottom-md">
              <div className="block-title ">
                <h1 className="uppercase">Latest Release</h1>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Release release={RELEASE} />
    </section>
  );
}
