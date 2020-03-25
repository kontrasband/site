import React, { useEffect, lazy, Suspense } from "react";
import { SkeletonTheme } from 'react-loading-skeleton';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/Header";
import Body from "./components/Body";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from './pages/Home';
import Page from "./pages/Page";

const Music = lazy(() => import('./pages/Music'));
const Lyrics = lazy(() => import("./pages/Lyrics"));
const AboutPage = lazy(() => import("./pages/About"));
const Gallery = lazy(() => import("./pages/Gallery"));

export const routes = [
  {
    path: "/about-us",
    title: "About",
    exact: true,
    component: AboutPage
  },
  {
    path: "/photos",
    title: "Gallery",
    component: Gallery
  },
  {
    path: "/lyrics",
    title: "Lyrics",
    component: Lyrics
  },
  {
    path: "/music",
    title: "Discography",
    component: Music
  },
  {
    path: "/",
    title: "Home",
    component: Home
  },
]

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/static/js/script.js";
    document.getElementById("root").appendChild(script);
  }, []);

  return (
    <SkeletonTheme color="#202020" highlightColor="#444">
      <Router>
        <Header />
        <Body>
          <Nav />
          <Suspense fallback={<Page />}>
            <Switch>
              {routes.map(route => (
                <Route key={route.path} path={route.path} exact={!!route.exact} component={route.component} />
              ))}
            </Switch>
          </Suspense>
          <Footer />
        </Body>
      </Router>
    </SkeletonTheme>
  );
}

export default App;
