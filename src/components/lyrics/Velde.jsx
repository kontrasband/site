import React from 'react';
import { getReleaseByName } from '../../utils';
import PageTitle from '../PageTitle';
import Release from '../Release';
import { Container } from 'react-bootstrap';


export default function Velde() {
  const release = getReleaseByName("Velde");
  return (
    <>
      <PageTitle title={release.title} />
      <Release release={release} md={4} />
      <div className="even-odd-bg">
        <PageTitle title="Velde" subtitle/>
        <Container className="lyrics-container">
          Beloftes, leë woorde<br/>
          Vals akoorde<br/>
          Kan jy my hoor?<br/>
          Gedagtes, die verdagte<br/>
          Groot verwagtinge<br/>
          Fluister in my oor<br/>
          <br/>
          Jare, die snare<br/>
          Deur die blare<br/>
          Sal jy my mis<br/>
          My are oop gegrawe<br/>
          En dit alles was vir niks<br/>
          <br/>
          Ja, ons hardloop deur die velde<br/>
          Wees ons eie helde<br/>
          Net vir die aand<br/>
          Ja, ons hardloop deur die velde<br/>
          Wees ons eie helde<br/>
          Net vir die die aand<br/>
          <br/>
          Verlore, gebore, bekore, en alleen<br/>
          My ore, verdowe, ornamente vir die wet<br/>
          Verlore, gebore, bekore, en alleen<br/>
          My ore, verdowe, ornamente vir die wet<br/>
          <br/>
          Monsters; groot oë<br/>
          Loop geboë, word so groot<br/>
          Die lafhard<br/>
          Kyk wie lag hard<br/>
          Sal die pad vat<br/>
          Wat ons altyd verloor<br/>
          <br/>
          Jare; vol trane<br/>
          Deur die blare<br/>
          Sal jy my mis<br/>
          My are oop gegrawe<br/>
          En dit alles was vir niks<br/>
          <br/>
          So ja, ons hardloop deur die velde<br/>
          Wees ons eie helde<br/>
          Net vir die aand<br/>
          Ja, ons hardloop deur die velde<br/>
          Wees ons eie helde<br/>
          Net vir die die aand<br/>
          <br/>
          Verlore, gebore, bekore, en alleen<br/>
          My ore, verdowe, ornamente vir die wet<br/>
          Verlore, gebore, bekore, en alleen<br/>
          My ore, verdowe, ornamente vir die wet<br/>
        </Container>
      </div>
    </>
  )
}
