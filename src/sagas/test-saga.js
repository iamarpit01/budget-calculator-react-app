import {take, put, call, fork, delay, takeEvery, cancel, cancelled, takeLatest} from 'redux-saga/effects';

function double(number) {
    return number * 2;
}

export function* testSaga(){
    while(true){
        console.log('STARTING SAGA')
        const state = yield take('TEST_MESSAGE');
        console.log('CLOSING SAGA', state)
    }
}

function* doNothing() {
    console.log("I have been called");
    yield delay(1000);
    console.log("I am doing nothing..")
}

export function* testSagaFork() {
    while(true){
        yield take('TEST_MESSAGE_2')
        yield call(doNothing)
        yield call(doNothing)
        yield call(doNothing)
    }
}

export function* testSagaTakeEveryProcess({payload}){
    console.log('Process for every', payload);
}

export function* testSagaForEvery() {
    const {payload} = yield takeEvery('TEST_MESSAGE_3', testSagaTakeEveryProcess);
    console.log('Finish every',payload);
}

function* infinitySaga() {
    console.log("Starting infinity saga");
    let index = 0;
    while(true){
        index++;
        try{
            console.log(`Inside infinity loop: ${index}`);
            yield delay(500)
        } catch(error) {
            console.log("Error", error);
        } finally {
            console.log("The fork was cancelled", yield cancelled());
        }
    }
    console.log("Ending Infinity loop");
}

export function* testSagaCancelled() {
    yield take('TEST_MESSAGE_4');
    const handleCancel = yield fork(infinitySaga)
    yield delay(1000);
    yield cancel(handleCancel);
}

export function* testSagaLatest() {
    yield takeLatest('TEST_MESSAGE_5', infinitySaga);
}

// export function* dispatchTest() {
//     let index = 0;
//     yield put({type: 'TEST_MESSAGE_4', payload: index})
    // while(true){
    //     yield delay(1000);
    //     yield put({type: 'TEST_MESSAGE_4', payload: index})
    //     index++;
    // }
// }

export function* dispatchTest() {
    let index = 0;
    // yield put({type: 'TEST_MESSAGE_5', payload: index})
    while(true){
        yield delay(1000);
        yield put({type: 'TEST_MESSAGE_5', payload: index})
        index++;
    }
}