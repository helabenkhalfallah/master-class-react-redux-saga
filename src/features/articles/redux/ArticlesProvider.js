const ArticleListFragment = (state) => ({
  articleListLoading: state?.ArticleList?.articleListLoading,
  articleListError: state?.ArticleList?.articleListError,
  articleList: state?.ArticleList?.articleList,
});

const ArticlesProvider = {
  ArticleListFragment,
};

export default ArticlesProvider;
