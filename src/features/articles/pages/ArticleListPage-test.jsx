import React from 'react';
import { Provider, } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount, } from 'enzyme';
import ArticleListPage from './ArticleListPage';

const articlesFakeResponse = [
  {
    title: '',
    description: '',
    imageUrl: '',
    keywords: [],
  },
];

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('Test Suite - ArticleListPage', () => {
  const initialState = {};
  it('Should render loading state', () => {
    const loadingArticles = {
      ArticleList: {
        articleList: null,
        articleListLoading: true,
        articleListError: null,
      },
    };
    const store = mockStore({
      ...initialState,
      ...loadingArticles,
    });
    const wrapper = mount(
      <Provider store={store}>
        <ArticleListPage
          articleListLoading
          articleList={null}
          articleListError={null}
        />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('Should render articles', () => {
    const articlesState = {
      ArticleList: {
        articleList: articlesFakeResponse,
        articleListLoading: true,
        articleListError: null,
      },
    };
    const store = mockStore({
      ...initialState,
      ...articlesState,
    });
    const wrapper = mount(
      <Provider store={store}>
        <ArticleListPage
          articleListLoading={false}
          articleList={articlesFakeResponse}
          articleListError={null}
        />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('Should render error', () => {
    const error = 'Une erreur technique c\'est produite, veuillez réessayez plus tard.';
    const articlesErrorState = {
      ArticleList: {
        articleList: null,
        articleListLoading: false,
        articleListError: error,
      },
    };
    const store = mockStore({
      ...initialState,
      ...articlesErrorState,
    });
    const wrapper = mount(
      <Provider store={store}>
        <ArticleListPage
          articleListLoading={false}
          articleList={null}
          articleListError={error}
        />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
