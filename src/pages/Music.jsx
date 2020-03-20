import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Page from './Page'
import RELEASES from '../components/database/discography';
import StoreLinks from '../components/StoreLinks';
import ReleaseDetails from '../components/ReleaseDetails';

export default function Music() {
  return (
    <Page name="music">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={9}>
            <div className="block-content text-center gap-one-bottom-md">
              <div className="block-title ">
                <h1 className="uppercase">Discography</h1>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {RELEASES.map(release => (
        <div className="release">
          <Container>
            <Row>
              <Col xs={12}>
                <h5 className="mb-0 opc-70 uppercase">{release.title}</h5>
                <a className="link" href={release.url}>
                  View Release ›
                </a>
              </Col>
              <Col xs={12} md={6} lg={6} key={release.id}>
                <div className="block-album block-content">
                  <a href={release.url}>
                    <img
                      className="animated"
                      src={release.img}
                      alt=""
                    />
                  </a>
                  <StoreLinks stores={release.stores} show={release.released} className="mb-md-3"/>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <ReleaseDetails details={release.details} hideArtwork/>
              </Col>
            </Row>
          </Container>
        </div>
      ))}
    </Page>
  )
}