import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RELEASES from './database/discography';
import StoreLinks from "./StoreLinks";
import ReleaseArtwork from "./ReleaseArtwork";

export default function Discography() {
  return (
    <section id="discography" className="discography main">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={9}>
            <div className="block-content text-center gap-one-bottom-md">
              <div className="block-title ">
                <h1 className="uppercase">New Music</h1>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {RELEASES.slice(0, 3).map(release => (
            <Col xs={12} md={6} lg={4} key={release.id}>
              <div className="block-album block-content">
                <h5 className="mb-0 opc-70 uppercase">{release.title}</h5>
                <a className="link" href={release.url}>
                  View Release ›
                </a>
                <ReleaseArtwork url={release.url} img={release.img} />
                <StoreLinks stores={release.stores} show={release.released} className="mb-md-3"/>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
