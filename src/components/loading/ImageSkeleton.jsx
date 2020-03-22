import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function ImageSkeleton({ className, paddingTop = '100%', ...rest }) {
  return (
    <div className={`image-skeleton-container ${className}`} style={{ paddingTop }}>
      <span className="image-skeleton">
        <Skeleton width="100%" height="100%" />
      </span>
    </div>
  )
}
