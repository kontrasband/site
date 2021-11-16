import React from "react";
import PageTitle from "../PageTitle";
import { Container } from "react-bootstrap";
import { titleToSlug } from "../../utils";

export default function Song({ song }) {
  const { title, lyrics } = song;

  return (
    <div className="even-odd-bg" id={titleToSlug(title)}>
      <PageTitle title={title} subtitle />
      <Container className="lyrics-container">{lyrics}</Container>
    </div>
  );
}
