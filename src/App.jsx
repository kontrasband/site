import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Body from "./components/Body";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";

import Home from './pages';

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  }
]

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/static/js/script.js";
    document.getElementById("root").appendChild(script);
  }, []);

  return (
    <Router>
      <Body>
        <Nav />
        <Switch>
          {routes.map(route => (
            <Route path={route.path} exact={route.exact || false} component={route.component} />
          ))}
        </Switch>
        <Footer />
        <ScrollUp />
      </Body>
    </Router>
  );
}

export default App;
