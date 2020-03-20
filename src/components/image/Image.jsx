import React, { useState } from 'react'
import LazyLoad from 'react-lazyload'
import Skeleton from 'react-loading-skeleton';
import './style.css';

export default function Image({ height = '100%', src, placeholder, alt, ...rest}) {
  const [loaded, setLoaded] = useState(false);

  if (!loaded)  {
    return (
      <div
        className="iron-image__container"
        style={{ backgroundImage: `url(${placeholder})` }}
      >
        <img
          className={`iron-image ${loaded && 'iron-image--fade-in'}`}
          alt={alt}
          src={src}
          onLoad={() => setLoaded(true)}
        />
      </div>
    );
  }

  return (
      <img
        className={`iron-image ${loaded && 'iron-image--fade-in'}`}
        alt={alt}
        src={src}
      />
  )
};