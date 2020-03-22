import React, { Suspense, lazy } from 'react'
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import Page from './Page'

const Home = lazy(() => import('../components/lyrics/Home'));
const Velde = lazy(() => import('../components/lyrics/Velde'));
const VierEnTwintig = lazy(() => import('../components/lyrics/24'));
const SideB = lazy(() => import('../components/lyrics/SideB'));
const SideA = lazy(() => import('../components/lyrics/SideA'));

export default function Lyrics() {
  const { path } = useRouteMatch();

  return (
    <Page name="lyrics">
      <Suspense fallback={<div />}>
        <Switch>
          <Route exact path={path} component={Home} />
          <Route path={`${path}/velde`} component={Velde} />
          <Route path={`${path}/24`} component={VierEnTwintig} />
          <Route path={`${path}/side-b`} component={SideB} />
          <Route path={`${path}/side-a`} component={SideA} />
        </Switch>
      </Suspense>
    </Page>
  )
}
