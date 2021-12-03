import { all, } from 'redux-saga/effects';
import HabilitationsServiceRoot from '../hocs/habilitations/services/HabilitationsServiceRoot';
import ArticlesServiceRoot from '../../articles/services/ArticlesServiceRoot';

export default function* rootSaga() {
  yield all([
    ...HabilitationsServiceRoot,
    ...ArticlesServiceRoot,
  ]);
}
