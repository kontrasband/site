import React from 'react';
import { getReleaseByName } from '../../utils';
import PageTitle from '../PageTitle';
import Release from '../Release';


export default function ReleasePageContainer({ title, children }) {
  const release = getReleaseByName(title);

  return (
    <>
      <PageTitle title={release.title} />
      <div className="gap-one-bottom-md">
        <Release release={release} md={4} />
      </div>
      {children}
    </>
  )
}
