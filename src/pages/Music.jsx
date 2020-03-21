import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Page from './Page'
import RELEASES from '../components/database/discography';
import StoreLinks from '../components/StoreLinks';
import ReleaseDetails from '../components/ReleaseDetails';
import PageTitle from '../components/PageTitle';
import ReleaseArtwork from '../components/ReleaseArtwork';

export default function Music() {
  return (
    <Page name="music">
      <PageTitle title="Discography" />
      {RELEASES.map(release => (
        <div className="even-odd-bg">
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
                  <ReleaseArtwork
                    url={release.url}
                    img={release.img}
                  />
                  <StoreLinks stores={release.stores} show={release.released} classname="mb-md-3"/>
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