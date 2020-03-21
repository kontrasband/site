import React from 'react'
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import Page from './Page'
import { Home, Velde, VierEnTwintig, SideB, SideA } from '../components/lyrics';

export default function Lyrics() {
  const { path } = useRouteMatch();

  return (
    <Page name="lyrics">
      <Switch>
        <Route exact path={path} component={Home} />
        <Route path={`${path}/velde`} component={Velde} />
        <Route path={`${path}/24`} component={VierEnTwintig} />
        <Route path={`${path}/side-b`} component={SideB} />
        <Route path={`${path}/side-a`} component={SideA} />
      </Switch>
    </Page>
  )
}
