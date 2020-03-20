import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Header from "./components/Header";
import Body from "./components/Body";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";

import Home from './pages/Home';
import Music from './pages/Music';

export const routes = [
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
    <Router>
      <Header />
      <Body>
        <Nav />
        <Switch>
          {routes.map(route => (
            <Route path={route.path} exact={!!route.exact} component={route.component} />
          ))}
        </Switch>
        <Footer />
        <ScrollUp />
      </Body>
    </Router>
  );
}

export default App;
