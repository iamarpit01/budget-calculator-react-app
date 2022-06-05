import {take, call, put, fork} from 'redux-saga/effects';
import entriesTypes, { populateEntries, populateEntryDetail } from '../actions/entries.actions'
import axios from 'axios';

export function* getAllEntries() {
    yield take(entriesTypes.GET_ALL_ENTRIES)
    const {data} = yield call(axios, 'http://localhost:3001/entries');
    yield put(populateEntries(data))
}

export function* getEntryDetail(id) {
    const { data } = yield call(axios, `http://localhost:3001/values/${id}`)
    yield put(populateEntryDetail(id, data))
}

export function* getAllEntriesDetails() {
    const { payload } = yield take(entriesTypes.POPULATE_ENTRIES)
    for (let index = 0; index < payload.length; index++) {
        const entry = payload[index];
        yield fork(getEntryDetail, entry.id);
    }
}