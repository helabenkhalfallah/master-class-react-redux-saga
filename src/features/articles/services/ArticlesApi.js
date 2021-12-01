import axios from 'axios';
import ArticlesServicesConstants from './ArticlesServicesConstants';

const getArticlesList = (baseUrl, params) => {
  const url = `${baseUrl}/${ArticlesServicesConstants.GET_ARTICLE_LIST_PATH}`;
  // params
  return axios.get(url);
};

const ArticlesApi = {
  getArticlesList,
};

export default ArticlesApi;
