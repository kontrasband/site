import React, { useState } from 'react'
import ImageSkeleton from '../loading/ImageSkeleton';

export default function Image({ src, alt, className, paddingTop, style, ...rest }) {
  const [display, setDisplay] = useState('none');

  return (
    <>
      {display === 'none' && <ImageSkeleton className={`mb-3 ${className}`} paddingTop={paddingTop} />}
      <img src={src} alt={alt} className={className} {...rest} style={{ ...style, display }} onLoad={() => setDisplay('block')} />
    </>
  )
};