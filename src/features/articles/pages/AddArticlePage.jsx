import React, { lazy, Component, Suspense, } from 'react';
import {
  Spin,
} from 'antd';
import withPageLayout from '../../commons/hocs/withPageLayout';

const ArticleForm = (
  lazy(() => (
    import('../components/AddArticleForm')
  ))
);

@withPageLayout()
class AddArticlePage extends Component {
  componentDidMount() {
  }

  onSubmitForm = (article) => {
    console.log('onSubmitForm : ', article);
  };

  onCancelForm = () => {
    console.log('onCancelForm');
  };

  render() {
    return (
      <Suspense fallback={(
        <Spin
          spinning
          size="large"
        />
      )}
      >
        <ArticleForm
          onSubmitForm={this.onSubmitForm}
          onCancelForm={this.onCancelForm}
        />
      </Suspense>
    );
  }
}

export default AddArticlePage;
