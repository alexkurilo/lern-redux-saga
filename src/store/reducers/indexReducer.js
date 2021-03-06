import {combineReducers} from 'redux';

import loading from './loadingReducer';
import error from './errorReducer';
import news from './newsReducer';
import dog from './dogReducer';

export default combineReducers({
    loading,
    error,
    news,
    dog,
});