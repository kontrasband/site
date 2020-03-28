import React from 'react'
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import Page from './Page'
import Home from '../components/lyrics/Home';
import LyricPageContainer from '../components/lyrics/LyricPageContainer';

export default function Lyrics() {
  const { path } = useRouteMatch();

  return (
    <Page name="lyrics">
      <Switch>
        <Route path={`${path}/:slug`} children={<LyricPageContainer />} />
        <Route exact path={path} component={Home} />
      </Switch>
    </Page>
  )
}
