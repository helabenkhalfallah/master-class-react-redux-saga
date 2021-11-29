import React, { Suspense, } from 'react';
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Spin from 'antd/es/spin';
import withReduxBoot from './core/redux/withReduxBoot';
import ReducerRooter from './commons/ReducerRooter';
import SagaRoot from './commons/SagaRoot';
import LazyRoutes from './LazyRoutes';
import Path from './Path';

const {
  ADD_ARTICLE_PAGE,
  LIST_ARTICLE_PAGE,
} = Path;

const {
  AddArticlePage,
  ArticleListPage,
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
          path={ADD_ARTICLE_PAGE}
          component={AddArticlePage}
        />
        <Route
          exact
          path={LIST_ARTICLE_PAGE}
          component={ArticleListPage}
        />
        <Redirect
          from="/"
          to={ADD_ARTICLE_PAGE}
        />
      </Switch>
    </HashRouter>
  </Suspense>
);

export default withReduxBoot(
  Router,
  ReducerRooter,
  SagaRoot
);
