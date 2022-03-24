import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import entriesReducer from "../reducers/entries.reducers";
import modalsReducer from "../reducers/modals.reducers";

const storeConfig = () => {
    return createStore(
        combineReducers({
            entries: entriesReducer,
            modals: modalsReducer
        }),
        composeWithDevTools()
    )
}

export default storeConfig;