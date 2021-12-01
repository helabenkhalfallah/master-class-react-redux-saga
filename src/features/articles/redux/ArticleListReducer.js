import ArticlesActions from './ArticlesActions';
import Matcher from '../../../core/utils/Matcher';

const initialState = {
  articleListLoading: false,
  articleListError: null,
  articleList: null,
};

const ArticleListReducer = (state = initialState, action) => Matcher()
  .on(() => action.type === ArticlesActions.ARTICLE_LIST_REQUEST, () => ({
    ...state,
    articleListLoading: true,
    articleListError: null,
    articleList: null,
  }))
  .on(() => action.type === ArticlesActions.ARTICLE_LIST_REQUEST_SUCCES, () => ({
    ...state,
    articleListLoading: false,
    articleListError: null,
    articleList: action.articleList,
  }))
  .on(() => action.type === ArticlesActions.ARTICLE_LIST_REQUEST_FAIL, () => ({
    ...state,
    articleListLoading: false,
    articleListError: action.articleListError,
    articleList: null,
  }))
  .otherwise(() => state);

export default ArticleListReducer;
