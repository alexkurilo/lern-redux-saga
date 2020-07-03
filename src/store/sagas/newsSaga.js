import { put, call, takeLatest } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import * as newsAction from '../actions/newsActions';

function* fetchNews() {
    try{
        const data = yield call(newsAction.fetchNews);

        yield put({
            type: "NEWS_RECEIVED",
            payload: data.articles,
        });
    } catch (error) {
        yield put({ type: 'ERROR' });
    } finally {
        yield put({type: "LOADED"});
    }
}

export function* newsWatcher() {
    yield takeLatest('LOADING_NEWS', fetchNews);
}
