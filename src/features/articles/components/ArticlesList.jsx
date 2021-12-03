import React from 'react';
import Proptypes from 'prop-types';
import {
  Spin,
  Avatar,
  List,
  Typography,
  Alert,
} from 'antd';

// présentation
// pure, fonction, maximiser la réutilisation
// ils ne s'interessent pas à comment chercher les data
// règles de gestion
// simple à tester car ils dépendent que de l'entrée et ne créent pas de side effects
const ArticlesList = ({
  articles,
  articlesLoading,
  articlesError,
}) => {
  if (articlesLoading) {
    return (
      <Spin
        spinning
        size="large"
      />
    );
  }

  if (articlesError) {
    return (
      <Alert
        message="Chargement des articles"
        description={articlesError}
        type="error"
      />
    );
  }

  if (!articles || !articles.length) {
    return (
      <Alert
        message="Chargement des articles"
        description="Aucun article à afficher"
        type="info"
      />
    );
  }

  // const siderStatus = useSelector((state) => state.siderStatus)
  // const dispatch = useDispatch()
  /*
  <button onClick={() => dispatch({ type: 'open-sider' })}>
        Open/close sider
      </button>
  */

  return (
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={articles}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item.urlToImage} />}
            title={item.title}
            description={(
              <Typography.Paragraph level={4}>
                {item.description}
              </Typography.Paragraph>
            )}
          />
        </List.Item>
      )}
    />
  );
};

ArticlesList.propTypes = {
  articles: Proptypes.arrayOf(Proptypes.shape({
    title: Proptypes.string,
    description: Proptypes.string,
    urlToImage: Proptypes.string,
  })),
  articlesLoading: Proptypes.bool,
  articlesError: Proptypes.string,
};

ArticlesList.defaultProps = {
  articles: [],
  articlesLoading: false,
  articlesError: null,
};

export default ArticlesList;
