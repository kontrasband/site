import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import RELEASES from '../components/database/discography';

export const getLatestRelease = () => {
  return RELEASES[0];
}

export const getReleaseByName = name => {
  return RELEASES.find(release => release.title.toLowerCase() === name.toLowerCase()) || {};
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getSize);
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);

    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
