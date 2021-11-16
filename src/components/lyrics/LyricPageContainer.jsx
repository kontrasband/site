import React from "react";
import { Container } from "react-bootstrap";
import { Redirect, useParams } from "react-router-dom";
import {
  getReleaseBySlug,
  getLyricsByReleaseName,
  titleToSlug,
} from "../../utils";
import PageTitle from "../PageTitle";
import Release from "../Release";
import Song from "./Song";

export default function LyricPageContainer() {
  const { slug } = useParams();

  const release = getReleaseBySlug(slug);
  const { tracks } = getLyricsByReleaseName(release.title);

  if (!release || !tracks) return <Redirect to="/lyrics" />;

  return (
    <>
      <PageTitle title={release.title} />
      <div className="gap-one-bottom-md">
        <Release release={release} md={4} />
      </div>
      {tracks.length > 1 && (
        <div className="even-odd-bg">
          <PageTitle title="Tracks" subtitle />
          <Container className="lyrics-container">
            <ul className="tracklist-container">
              {tracks.map((track) => (
                <li>
                  <a href={`#${titleToSlug(track.title)}`}>{track.title}</a>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
      {tracks.map((song) => (
        <Song key={song.title} song={song} />
      ))}
    </>
  );
}
