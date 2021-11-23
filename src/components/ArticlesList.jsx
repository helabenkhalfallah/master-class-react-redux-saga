import React from 'react';
import { Button, } from 'antd';

// présentation
// pure, fonction, maximiser la réutilisation
// ils ne s'interessent pas à comment chercher les data
// règles de gestion
// simple à tester car ils dépendent que de l'entrée et ne créent pas de side effects
const ArticlesList = ({ title, }) => <Button>{title}</Button>;

export default ArticlesList;
