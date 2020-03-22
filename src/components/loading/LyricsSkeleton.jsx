import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function LyricsSkeleton() {
  return (
    <div className="text-center gap-one-bottom-md">
      <div style={{ maxWidth: 350, width: '100%', margin: '0 auto' }}>
        <div className="mb-5">
          <Skeleton count={6} />
        </div>
        <div className="mb-5">
          <Skeleton count={6} />
        </div>
        <div className="mb-5">
          <Skeleton count={6} />
        </div>
        <div className="mb-5">
          <Skeleton count={6} />
        </div>
      </div>
    </div>
  )
}
