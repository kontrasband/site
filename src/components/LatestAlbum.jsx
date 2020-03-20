import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import StoreLinks from "./StoreLinks";
import { getLatestRelease } from "../utils";

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

      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <a href={RELEASE.url} target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}${RELEASE.img}`} alt="Latest Release" className="animated" />
            </a>
          </Col>
          <Col xs={12} md={6}>
            <div className="block-content gap-one-bottom-sm">
              <div className="block-album-info">
                <ul>
                  <li>
                    <h5 className="uppercase list-inline-item ">Title</h5>
                    <span>Velde</span>
                  </li>
                  <li>
                    <h5 className="uppercase list-inline-item ">Album</h5>
                    <span>Ruimtevaarder</span>
                  </li>
                  <li>
                    <h5 className="uppercase list-inline-item">Released</h5>
                    <span>20 March 2020</span>
                  </li>
                  <li>
                    <h5 className="uppercase list-inline-item ">Label</h5>
                    <span>Independent</span>
                  </li>
                  <li>
                    <h5 className="uppercase list-inline-item">Genre</h5>
                    <span>Afrikaans Pop Rock</span>
                  </li>
                  <li>
                    <h5 className="uppercase list-inline-item">Artwork</h5>
                    <span><a href="http://instagram.com/nannaventer" target="_blank" rel="noopener noreferrer">@nannaventer</a></span>
                  </li>
                  <li>
                    <h5 className="uppercase list-inline-item">Produced</h5>
                    <span><a href="http://instagram.com/joellismusic" target="_blank" rel="noopener noreferrer">@joellismusic</a></span>
                  </li>
                  <li>
                    <h5 className="uppercase list-inline-item">Music Video</h5>
                    <span><a href="https://www.youtube.com/watch?v=2OeLrsLnCio" target="_blank" rel="noopener noreferrer">YouTube</a></span>
                  </li>
                </ul>
              </div>
              <StoreLinks stores={RELEASE.stores} show={RELEASE.released} className="mt-4" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
