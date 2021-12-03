import HabilitationsReducer from '../hocs/habilitations/redux/HabilitationsReducer';
import ArticleListReducer from '../../articles/redux/ArticleListReducer';

const ReducerRooter = {
  ArticleList: ArticleListReducer,
  Habilitations: HabilitationsReducer,
};

export default ReducerRooter;
