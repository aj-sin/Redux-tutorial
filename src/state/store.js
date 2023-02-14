//* Now this export everything in a combine manner to our actuall app.js file 

//*Now here we are importing many thing which honestly i have no idea what they are so we are gonna learn about them later

//!after taking all reducers it will create a store and export it to app.js

import { applyMiddleware,legacy_createStore ,compose} from "redux";
import thunk from "redux-thunk";
import rootreducers from "./reducers";
const composedEnhancer = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const store=legacy_createStore(rootreducers,{},composedEnhancer)