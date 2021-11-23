import React, { Suspense, } from 'react';
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Spin from 'antd/es/spin';
import LazyRoutes from './LazyRoutes';
import Path from './Path';

const {
  ARTICLE_HOME_PAGE,
} = Path;

const {
  ArticleHomePage,
} = LazyRoutes;

const Router = () => (
  <Suspense fallback={(
    <Spin spinning />
  )}
  >
    <HashRouter>
      <Switch>
        <Route
          exact
          path={ARTICLE_HOME_PAGE}
          component={ArticleHomePage}
        />
        <Redirect
          from="/"
          to={ARTICLE_HOME_PAGE}
        />
      </Switch>
    </HashRouter>
  </Suspense>
);

export default Router;
