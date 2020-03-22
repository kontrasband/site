import React from 'react';
import { Container } from 'react-bootstrap';
import TitleSkeleton from '../loading/TitleSkeleton';
import ReleaseSkeleton from '../loading/ReleaseSkeleton';
import LyricsSkeleton from '../loading/LyricsSkeleton';


export default function Loading() {
  return (
    <>
      <TitleSkeleton />
      <div className="gap-one-bottom-md">
        <ReleaseSkeleton md={4} />
      </div>
      <div className="even-odd-bg">
        <TitleSkeleton height={30} />
        <Container className="lyrics-container">
          <LyricsSkeleton />
        </Container>
      </div>
    </>
  )
}
