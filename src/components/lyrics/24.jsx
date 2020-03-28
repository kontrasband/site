import React from 'react';
import { getReleaseByName } from '../../utils';
import PageTitle from '../PageTitle';
import Release from '../Release';
import { Container } from 'react-bootstrap';


export default function VierEnTwintig() {
  const release = getReleaseByName("24");
  return (
    <>
      <PageTitle title={release.title} />
      <div className="gap-one-bottom-md">
        <Release release={release} md={4} />
      </div>
      <div className="even-odd-bg">
        <PageTitle title="24" subtitle/>
        <Container className="lyrics-container">

        </Container>
      </div>
    </>
  )
}
