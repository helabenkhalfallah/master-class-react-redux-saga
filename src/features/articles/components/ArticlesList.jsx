import React from 'react';
import Proptypes from 'prop-types';
import {
  Spin,
  Button,
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
        description="Une erreur c'est produite"
        type="error"
      />
    );
  }

  return (
    <>
      {articles?.map((item) => {
        const {
          title,
          description,
        } = item;
        return (
          <Button
            key={title}
            onClick={(event) => console.log(event)}
          >
            {`${title} - ${description}`}
          </Button>
        );
      })}
    </>
  );
};

ArticlesList.propTypes = {
  articles: Proptypes.arrayOf(Proptypes.shape({
    title: Proptypes.string,
    description: Proptypes.string,
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
