import { expectSaga, } from 'redux-saga-test-plan';
import { throwError, } from 'redux-saga-test-plan/providers';
import * as matchers from 'redux-saga-test-plan/matchers';
import ArticleListReducer from '../redux/ArticleListReducer';
import ArticlesListService from './ArticlesListService';
import ArticlesApi from './ArticlesApi';

const {
  getArticlesList,
} = ArticlesApi;

const articleFakeAction = {
  payload: {
    type: 'ARTICLE_LIST_REQUEST',
    payload: {
      idArticle: '1',
    },
  },
};

const articlesFakeResponse = {
  data: [
    {
      title: '',
      description: '',
      imageUrl: '',
      keywords: [],
    },
  ],
};

describe('Test Suite - Get Articles Service', () => {
  it('Get Articles Service (success', () => {
    const { data, } = articlesFakeResponse;
    expectSaga(ArticlesListService, articleFakeAction)
      .withReducer(ArticleListReducer)
      .provide([
        matchers.call.fn(getArticlesList), articlesFakeResponse,
      ])
      .put({
        type: 'ARTICLE_LIST_REQUEST',
        articleList: data,
      })
      .hasFinalState({
        articleListLoading: false,
        articleList: null,
        articleListError: null,
      })
      .run();
  });

  it('Get Articles Service (fail)', () => {
    const data = {};
    const error = 'Echec lors de la récupération des articles, veuillez réessayez plus tard.';
    expectSaga(ArticlesListService, articleFakeAction)
      .withReducer(ArticleListReducer)
      .provide([
        matchers.call.fn(getArticlesList), data,
      ])
      .put({
        type: 'ARTICLE_LIST_REQUEST_FAIL',
        error,
      })
      .hasFinalState({
        articleListLoading: false,
        articleList: null,
        articleListError: error,
      })
      .run();
  });

  it('Get Articles Service (exception)', () => {
    const error = 'Une erreur technique c\'est produite, veuillez réessayez plus tard.';
    const exception = new Error(error);
    expectSaga(ArticlesListService, articleFakeAction)
      .withReducer(ArticleListReducer)
      .provide([
        matchers.call.fn(getArticlesList), throwError(exception),
      ])
      .put({
        type: 'ARTICLE_LIST_REQUEST_FAIL',
        error,
      })
      .hasFinalState({
        articleListLoading: false,
        articleList: null,
        articleListError: error,
      })
      .run();
  });
});
