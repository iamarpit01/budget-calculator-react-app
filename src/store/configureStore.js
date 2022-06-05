import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import entriesReducer from "../reducers/entries.reducers";
import modalsReducer from "../reducers/modals.reducers";
import createSagaMiddleware from "@redux-saga/core";
import { initSagas } from "../sagas";

const sagaMiddlewares = createSagaMiddleware();
const middlewares = [sagaMiddlewares];
const storeConfig = () => {
    const store = createStore(
        combineReducers({
            entries: entriesReducer,
            modals: modalsReducer
        }),
        composeWithDevTools(applyMiddleware(...middlewares))
    );
    initSagas(sagaMiddlewares);
    return store;
}

export default storeConfig;