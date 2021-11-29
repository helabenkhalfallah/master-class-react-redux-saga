import React, { Suspense, lazy, } from 'react';
import {
  Spin,
} from 'antd';
import withPageLayout from '../core/hocs/withPageLayout';

const ArticlesList = (
  lazy(() => (
    import('../components/ArticlesList')
  ))
);

@withPageLayout()
class ArticleListPage extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <Suspense fallback={(
        <Spin
          spinning
          size="large"
        />
      )}
      >
        <ArticlesList
          articlesLoading={false}
          articles={[]}
          articlesError={null}
        />
      </Suspense>
    );
  }
}

export default ArticleListPage;
