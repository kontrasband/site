import React from 'react'

export default function ReleaseArtwork({ img, url }) {
  if (!url) {
    return (
      <img src={`${process.env.PUBLIC_URL}${img}`} alt="" className="animated" />
    )
  }
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={`${process.env.PUBLIC_URL}${img}`} alt="" className="animated" />
    </a>
  )
}
