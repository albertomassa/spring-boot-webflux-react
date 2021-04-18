import { all } from 'redux-saga/effects'

import watchPeopleSaga from './people/peopleSaga'

export default function* rootSaga() {
    yield all([watchPeopleSaga()])
}