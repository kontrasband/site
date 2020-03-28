import React from 'react';
import { getReleaseByName } from '../../utils';
import PageTitle from '../PageTitle';
import Release from '../Release';
import { Container } from 'react-bootstrap';


export default function SideB() {
  const release = getReleaseByName("Side B");
  return (
    <>
      <PageTitle title={release.title} />
      <div className="gap-one-bottom-md">
        <Release release={release} md={4} />
      </div>
      <div className="even-odd-bg">
        <PageTitle title="Raak 'n bietjie fucked" subtitle/>
        <Container className="lyrics-container">

        </Container>
      </div>
      <div className="even-odd-bg">
        <PageTitle title="My Dolla Nee" subtitle/>
        <Container className="lyrics-container">
          ""
        </Container>
      </div>
      <div className="even-odd-bg">
        <PageTitle title="Seeman" subtitle/>
        <Container className="lyrics-container">
          ""
        </Container>
      </div>
    </>
  )
}
