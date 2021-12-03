import { put, call, } from 'redux-saga/effects';
import ArticlesActions from '../redux/ArticlesActions';
import ArticlesApi from './ArticlesApi';

const {
  ARTICLE_LIST_REQUEST_SUCCES,
  ARTICLE_LIST_REQUEST_FAIL,
} = ArticlesActions;

const {
  getArticlesList,
} = ArticlesApi;

export default function* getArticlesListService(action) {
  try {
    const baseUrl = 'http://localhost:3000';
    const response = yield call(getArticlesList, baseUrl, action.payload);
    /* if (response.data === null
      && action.nbreOfRetry < 4) {
      yield delay(1000); //
      yield call(getArticlesListService, {
        ...action,
        nbreOfRetry: 1,
      });
    } */

    // parse the response
    const articles = response.data;
    /// map

    // check if we have success or fail
    if (articles
            && articles.length) {
      // dispatch a success action to the store
      yield put({
        type: ARTICLE_LIST_REQUEST_SUCCES,
        articleList: articles,
      });
    } else {
      yield put({
        type: ARTICLE_LIST_REQUEST_FAIL,
        articleListError: 'Echec lors de la récupération des articles, veuillez réessayez plus tard.',
      });
    }
  } catch (error) {
    yield put({
      type: ARTICLE_LIST_REQUEST_FAIL,
      articleListError: 'Une erreur technique c\'est produite, veuillez réessayez plus tard.',
    });
  }
}
