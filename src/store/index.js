import {createStore,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"
import {combineReducers} from "redux-immutable"
import Classify from "./reducers/classify"

const reducer = combineReducers({
    Classify
})

const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;