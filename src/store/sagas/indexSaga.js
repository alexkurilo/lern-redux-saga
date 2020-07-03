import { all } from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';

import {dogWatcher} from './dogSaga';
import {newsWatcher} from './newsSaga';

export default function* rootSaga() {
    yield all([
        newsWatcher(),
        dogWatcher(),
    ]);
}