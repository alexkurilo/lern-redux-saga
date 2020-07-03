import { put, call, takeEvery } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import * as dogActions from '../actions/dogActions';

function* fetchDog() {
    try {
        const data = yield call(dogActions.fetchDog);

        yield put({ type: 'DOG_RECEIVED', payload: data.message });
    } catch (error) {
        yield put({ type: 'ERROR' });
    } finally {
        yield put({type: "LOADED"});
    }
}



export function* dogWatcher() {
    yield takeEvery('LOADING_DOG', fetchDog);
}
