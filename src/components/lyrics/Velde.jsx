import React from 'react';
import { getReleaseByName, getLyricsByReleaseName } from '../../utils';
import PageTitle from '../PageTitle';
import Release from '../Release';
import { Container } from 'react-bootstrap';


export default function Velde() {
  const release = getReleaseByName("Velde");
  const lyrics = getLyricsByReleaseName("Velde");

  return (
    <>
      <PageTitle title={release.title} />
      <div className="gap-one-bottom-md">
        <Release release={release} md={4} />
      </div>
      <div className="even-odd-bg">
        <PageTitle title="Velde" subtitle/>
        <Container className="lyrics-container">
          {lyrics.lyrics}
        </Container>
      </div>
    </>
  )
}
