import { lazy, } from 'react';

const AddArticlePage = (
  lazy(() => (
    import('./pages/AddArticlePage')
  ))
);

const ArticleListPage = (
  lazy(() => (
    import('./pages/ArticleListPage')
  ))
);

const LazyRoutes = {
  AddArticlePage,
  ArticleListPage,
};

export default LazyRoutes;
