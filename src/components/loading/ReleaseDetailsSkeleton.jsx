import React from 'react'
import Skeleton from 'react-loading-skeleton';

const sections = [
  "Title",
  "Album",
  "Released",
  "Label",
  "Genre",
  "Artwork",
  "Produced",
  "Music Video",
  "Lyrics",
]

export default function ReleaseDetailsSkeleton() {
  return (
    <div className="block-content gap-one-bottom-sm">
      <div className="block-album-info">
        <ul>
          {sections.map(str => (
            <li key={str}>
              <h5 className="uppercase list-inline-item">{str}</h5>
              <Skeleton width="50%" />
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <Skeleton height={36} width="80%" />
      </div>
    </div>
  )
}
