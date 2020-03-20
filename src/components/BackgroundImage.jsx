import React from 'react'

export default function BackgroundImage({ src, className }) {
    return (
      <div className={`background-img ${className}`} style={{ backgroundImage: `url("${src}")`}}>
        <img src={src} alt="" />
      </div>
    )
}
