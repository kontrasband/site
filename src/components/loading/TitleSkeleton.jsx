import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function TitleSkeleton({ width = 250, height = 50 }) {
  return (
    <div className="text-center gap-one-bottom-md">
      <Skeleton width={width} height={height} />
    </div>
  )
}
