import React from "react";
import {createStore,applyMiddleware} from "redux";
import {UserInfo} from "../reducer/userInfo.js";
import thunk from "redux-thunk"

 
export default  createStore(UserInfo,  applyMiddleware(thunk) );
 