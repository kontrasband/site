import React, { Suspense, lazy } from 'react'
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import Page from './Page'
import Loading from '../components/lyrics/Loading';
import Home from '../components/lyrics/Home';

const DieHappySong = lazy(() => import('../components/lyrics/DieHappySong'));
const Velde = lazy(() => import('../components/lyrics/Velde'));
const VierEnTwintig = lazy(() => import('../components/lyrics/24'));
const SideB = lazy(() => import('../components/lyrics/SideB'));
const SideA = lazy(() => import('../components/lyrics/SideA'));

export default function Lyrics() {
  const { path } = useRouteMatch();

  return (
    <Page name="lyrics">
        <Switch>
          <Route exact path={path} component={Home} />
          <Suspense fallback={<Loading />}>
            <Route path={`${path}/die-happy-song`} component={DieHappySong} />
            <Route path={`${path}/velde`} component={Velde} />
            <Route path={`${path}/24`} component={VierEnTwintig} />
            <Route path={`${path}/side-b`} component={SideB} />
            <Route path={`${path}/side-a`} component={SideA} />
          </Suspense>
        </Switch>
    </Page>
  )
}
