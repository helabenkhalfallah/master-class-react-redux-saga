import axios from 'axios';

const getHabilitations = (baseUrl) => {
  const url = `${baseUrl}/habilitations`;
  return axios.get(url);
};

const HabilitationsApi = {
  getHabilitations,
};

export default HabilitationsApi;
