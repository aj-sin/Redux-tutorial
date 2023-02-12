//* Now this export everything in a combine manner to our actuall app.js file 

//*Now here we are importing many thing which honestly i have no idea what they are so we are gonna learn about them later

//!after taking all reducers it will create a store and export it to app.js

import { applyMiddleware,legacy_createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

export const store=legacy_createStore(reducers,{},applyMiddleware(thunk))