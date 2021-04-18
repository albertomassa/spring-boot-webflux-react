import {call, takeEvery, take, put} from 'redux-saga/effects'

import {getPeopleRequest, getPeople, addPerson} from './peopleSlice'

import axios from 'axios'

function* getPeopleServer() {
    try {
        const response = yield call(() => axios.get('http://localhost:8080/people'))
        yield put(getPeople(response.data)) 
    } catch(error) {}
} 

function* addPersonServer(action) {
    try {
        yield call(() => axios.post('http://localhost:8080/people', action.payload))       
        yield put(getPeopleRequest())
    } catch(error) {}
} 

export default function* watchPeopleSaga() {
    yield takeEvery(getPeopleRequest, getPeopleServer)
    yield takeEvery(addPerson, addPersonServer)
}