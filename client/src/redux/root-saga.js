import { all, call } from 'redux-saga/effects';

import { listSagas } from './days-list/days-list.sagas';
 
export default function* rootSaga() {
    yield all([ call(listSagas), 
                                ]);
}