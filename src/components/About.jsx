import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ARTIST_LINKS from './database/artist_links';
import StoreLinks from "./StoreLinks";
import BackgroundImage from "./BackgroundImage";

export default function About() {
  return (
    <section id="about" className="about overlay main">
      <BackgroundImage src="/static/img/gallery/Rocking Stellies-7.jpg"/>
      <Container>
        <Row className="vertical-align">
          <Col lg={5} md={12}>
            <div className="front-p">
              <h1 className="uppercase text-white">
                &ldquo;Ons almal is 'n kontras&hellip;
              </h1>
              <p className="w-93">
                &hellip;Ons haat die dinge wat ons self die meeste doen.&rdquo;
              </p>
              <p className="w-93">
                Ons maak Afrikaanse alternatiewe rock met 'n punk invloed. Van
                ons tunes is hard. Van ons tunes trek jou hartsnare. Word deel
                van die kontras.
              </p>
              <StoreLinks stores={ARTIST_LINKS} className="mb-4 mb-lg-0" />
            </div>
          </Col>
          <Col lg={7}>{/* <UpcomingEvents /> */}</Col>
        </Row>
      </Container>
    </section>
  );
}
