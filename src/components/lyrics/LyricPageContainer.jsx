import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getReleaseBySlug, getLyricsByReleaseName } from '../../utils';
import PageTitle from '../PageTitle';
import Release from '../Release';
import Song from './Song';


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
      {tracks.map(song => (
        <Song key={song.title} song={song} />
      ))}
    </>
  )
}
