import React from 'react'
import Image from './Image';

export default function ReleaseArtwork({ img, url }) {
  if (!url) {
    return (
      <Image src={`${process.env.PUBLIC_URL}${img}`} alt="" className="animated" />
      )
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Image src={`${process.env.PUBLIC_URL}${img}`} alt="" className="animated" />
    </a>
  )
}
