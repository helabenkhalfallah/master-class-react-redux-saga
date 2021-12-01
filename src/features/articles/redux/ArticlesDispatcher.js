import ArticlesActions from './ArticlesActions';

const requestArticleList = (params) => ({
  type: ArticlesActions.ARTICLE_LIST_REQUEST,
  payload: params,
});

const ArticlesDispatcher = {
  requestArticleList,
};

export default ArticlesDispatcher;
