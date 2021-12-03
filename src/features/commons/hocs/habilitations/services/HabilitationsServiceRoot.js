import {
  takeLatest,
} from 'redux-saga/effects';
import HabilitationsActions from '../redux/HabilitationsActions';
import HabilitationsService from './HabilitationsService';

const HabilitationsServiceRoot = [
  takeLatest(HabilitationsActions.GET_HABILITATIONS_REQUEST, HabilitationsService),
];

export default HabilitationsServiceRoot;
