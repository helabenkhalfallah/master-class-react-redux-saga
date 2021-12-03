import React, { Suspense, lazy, } from 'react';
import Proptypes from 'prop-types';
import {
  Spin,
} from 'antd';
import ReduxConnect from '../../../core/redux/ReduxConnect';
import withPageLayout from '../../commons/hocs/withPageLayout';
import withHabilitations from '../../commons/hocs/habilitations/withHabilitations';
import ArticlesProvider from '../redux/ArticlesProvider';
import ArticlesDispatcher from '../redux/ArticlesDispatcher';

const ArticlesList = (
  lazy(() => (
    import('../components/ArticlesList')
  ))
);

const {
  ArticleListFragment,
} = ArticlesProvider;

@withHabilitations()
@ReduxConnect((state) => ({
  ...ArticleListFragment(state),
}), {
  ...ArticlesDispatcher,
})
@withPageLayout()
class ArticleListPage extends React.Component {
  static propTypes = {
    articleList: Proptypes.arrayOf(Proptypes.shape({
      title: Proptypes.string,
      description: Proptypes.string,
    })),
    articleListLoading: Proptypes.bool,
    articleListError: Proptypes.string,
    requestArticleList: Proptypes.func,
  };

  static defaultProps = {
    articleList: [],
    articleListLoading: false,
    articleListError: null,
    requestArticleList: null,
  };

  componentDidMount() {
    const {
      requestArticleList,
    } = this.props;
    requestArticleList({
      idArticle: '1',
    });
  }

  render() {
    const {
      articleListLoading,
      articleList,
      articleListError,
    } = this.props;

    return (
      <Suspense fallback={(
        <Spin
          spinning
          size="large"
        />
      )}
      >
        <ArticlesList
          articlesLoading={articleListLoading}
          articles={articleList}
          articlesError={articleListError}
        />
      </Suspense>
    );
  }
}

export default ArticleListPage;
