import { all, } from 'redux-saga/effects';
import ArticlesServiceRoot from '../../articles/services/ArticlesServiceRoot';

export default function* rootSaga() {
  yield all([
    ...ArticlesServiceRoot,
  ]);
}
