import {
  takeLatest,
} from 'redux-saga/effects';
import ArticlesActions from '../redux/ArticlesActions';
import ArticlesListService from './ArticlesListService';

const ArticlesServiceRoot = [
  takeLatest(ArticlesActions.ARTICLE_LIST_REQUEST, ArticlesListService),
];

export default ArticlesServiceRoot;
