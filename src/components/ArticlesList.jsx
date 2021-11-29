import React from 'react';
import Proptypes from 'prop-types';
import { Button, } from 'antd';

// présentation
// pure, fonction, maximiser la réutilisation
// ils ne s'interessent pas à comment chercher les data
// règles de gestion
// simple à tester car ils dépendent que de l'entrée et ne créent pas de side effects
const ArticlesList = ({ articles, }) => (
  <>
    {articles?.map((item) => {
      const {
        title,
        description,
      } = item;
      return <Button onClick={(event) => console.log(event)}>{`${title} - ${description}`}</Button>;
    })}
  </>
);

ArticlesList.propTypes = {
  articles: Proptypes.arrayOf(Proptypes.shape({
    title: Proptypes.string,
    description: Proptypes.string,
  })),
};

ArticlesList.defaultProps = {
  articles: [],
};

export default ArticlesList;
