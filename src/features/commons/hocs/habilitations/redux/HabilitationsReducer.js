import HabilitationsActions from './HabilitationsActions';
import Matcher from '../../../../../core/utils/Matcher';

const initialState = {
  habilitationsLoading: false,
  habilitationsError: null,
  habilitations: false,
};

const HabilitationsReducer = (state = initialState, action) => Matcher()
  .on(() => action.type === HabilitationsActions.GET_HABILITATIONS_REQUEST, () => ({
    ...state,
    habilitationsLoading: true,
    habilitationsError: null,
    habilitations: null,
  }))
  .on(() => action.type === HabilitationsActions.GET_HABILITATIONS_REQUEST_SUCCESS, () => ({
    ...state,
    habilitationsLoading: false,
    habilitationsError: null,
    habilitations: action.habilitations,
  }))
  .on(() => action.type === HabilitationsActions.GET_HABILITATIONS_REQUEST_FAIL, () => ({
    ...state,
    habilitationsLoading: false,
    habilitationsError: action.habilitationsError,
    habilitations: null,
  }))
  .otherwise(() => state);

export default HabilitationsReducer;
