import { put, call, takeEvery } from 'redux-saga/effects';

import {fetchDogAction} from '../actions/dogActions';

function* fetchDog() {
    try {
        const data = yield call(fetchDogAction);

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
