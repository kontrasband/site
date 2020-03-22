import React, { useState, useEffect } from 'react'
import ImageSkeleton from './loading/ImageSkeleton';

export default function BackgroundImage({ src, className, paddingTop, ...rest })  {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => setLoaded(true);
    image.onerror = () => {
      console.error('Failed to load', src);
      setError(true);
    }

    return () => {
      image.onerror = null;
      image.onload = null;
    }
  }, []);

  return (
    <div className={`background-img ${className}`} style={{ backgroundImage: `url("${src}")`}} {...rest}>
      {!loaded && !error && <ImageSkeleton paddingTop={paddingTop} className={className} />}
    </div>
  );
}