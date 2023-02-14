//*This our main index file in reducers which will combine all the reducers in our project and export them to our redux store

import { combineReducers } from "redux";
import amountreducer from "./amountreducer";
import amountmultiplier from "./amountmultiplier"

const rootreducer=combineReducers({
    amountreducer,
    amountmultiplier
})

export default rootreducer