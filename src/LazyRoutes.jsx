import { lazy, } from 'react';

const AddArticlePage = (
  lazy(() => (
    import('./features/articles/pages/AddArticlePage')
  ))
);

const ArticleListPage = (
  lazy(() => (
    import('./features/articles/pages/ArticleListPage')
  ))
);

const LazyRoutes = {
  AddArticlePage,
  ArticleListPage,
};

export default LazyRoutes;
