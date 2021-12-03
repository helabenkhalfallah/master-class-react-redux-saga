import HabilitationsActions from './HabilitationsActions';

const requestHabilitations = (params) => ({
  type: HabilitationsActions.GET_HABILITATIONS_REQUEST,
  payload: params,
});

const HabilitationsDispatcher = {
  requestHabilitations,
};

export default HabilitationsDispatcher;
