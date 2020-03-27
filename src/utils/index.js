import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import RELEASES from '../components/database/discography';
import LYRICS from '../components/database/lyrics';

export const slugToTitle = slug => {
  return slug.split('-').map(word => `${word[0].toUpperCase()}${word.substring(1).toLowerCase()}`).join(' ');
}

export const titleToSlug = title => {
  return title.replace(/\s+/g, '-').toLowerCase();
}

export const getLatestRelease = () => {
  return RELEASES[0];
}

export const getReleaseBySlug = name => {
  if (!name) return {};

  const title = slugToTitle(name);

  return RELEASES.find(release => release.title === title ) || {};
}

export const getLyricsByReleaseName = name => {
  if (!name) return [];

  return LYRICS.find(lyric => lyric.title === name);
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

export const usePopup = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/static/js/popup.js";
    document.getElementById("root").appendChild(script);
  }, []);
}