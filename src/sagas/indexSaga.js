import { all } from 'redux-saga/effects';

import {dogWatcher} from './dogSaga';
import {newsWatcher} from './newsSaga';

export default function* rootSaga() {
    yield all([
        newsWatcher(),
        dogWatcher(),
    ]);
}