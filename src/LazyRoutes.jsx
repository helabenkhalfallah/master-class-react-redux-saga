import { lazy, } from 'react';

const ArticleHomePage = (
  lazy(() => (
    import('./pages/ArticlesHomePage')
  ))
);

const LazyRoutes = {
  ArticleHomePage,
};

export default LazyRoutes;
