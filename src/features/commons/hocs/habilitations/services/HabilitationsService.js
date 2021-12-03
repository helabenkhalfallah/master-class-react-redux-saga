import { put, call, } from 'redux-saga/effects';
import HabilitationsActions from '../redux/HabilitationsActions';
import HabilitationsApi from './HabilitationsApi';

const {
  GET_HABILITATIONS_REQUEST_FAIL,
  GET_HABILITATIONS_REQUEST_SUCCESS,
} = HabilitationsActions;

const {
  getHabilitations,
} = HabilitationsApi;

export default function* getArticlesListService() {
  try {
    const baseUrl = 'http://localhost:3000';
    const response = yield call(getHabilitations, baseUrl);

    // parse the response
    const habilitations = response.data?.value;

    // check if we have success or fail
    if (habilitations) {
      // dispatch a success action to the store
      yield put({
        type: GET_HABILITATIONS_REQUEST_SUCCESS,
        habilitations,
      });
    } else {
      yield put({
        type: GET_HABILITATIONS_REQUEST_SUCCESS,
        habilitations: false,
      });
    }
  } catch (error) {
    yield put({
      type: GET_HABILITATIONS_REQUEST_FAIL,
      habilitationsError: 'Une erreur technique c\'est produite, veuillez réessayez plus tard.',
    });
  }
}
