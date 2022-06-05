import * as entriesSaga from './entriesSaga';
import * as entriesDeletionSaga from './entriesSagaDeletion';
// import * as testSaga from './test-saga';

export function initSagas(sagaMiddleware){
    // Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
    Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
    Object.values(entriesDeletionSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware))
}