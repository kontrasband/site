import React from 'react';
import Page from './Page';
import PageTitle from '../components/PageTitle';
import { usePopup } from '../utils';
import { Container } from 'react-bootstrap';
import Masonry from '../components/Masonry';
import { posters, live, press } from '../components/database/gallery';

export default function Gallery() {
  usePopup();

  return (
    <Page name="Gallery">
      <PageTitle title="Gallery" />
      <PageTitle title="Press" subtitle />
      <Container>
        <Masonry images={press} />
        <footer className="photo-credit">Photos by <a href="https://www.instagram.com/paige_fiddes_creative/" target="_blank" rel="noopener noreferrer">Paige Fiddes</a></footer>
      </Container>
      <PageTitle title="Live" subtitle />
      <Container>
        <Masonry images={live} />
        <footer className="photo-credit">Photos by <a href="https://www.instagram.com/justin_reinecke_adv/" target="_blank" rel="noopener noreferrer">Justin Reinecke</a> &amp; <a href="https://www.instagram.com/itisiwilne/" target="_blank" rel="noopener noreferrer">Wilné van Rooyen</a></footer>
      </Container>
      <PageTitle title="Posters" subtitle />
      <Container>
        <Masonry images={posters} />
      </Container>
    </Page>
  )
}
