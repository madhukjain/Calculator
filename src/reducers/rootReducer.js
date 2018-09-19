import {combineReducers} from "redux";
import operationsReducer from "./operationsReducer";
import valuesReducer from "./valuesReducer";
import resultReducer from "./resultReducer";

const rootReducer = combineReducers({
    operationsReducer,
    valuesReducer,
    resultReducer,
})

export default rootReducer;
