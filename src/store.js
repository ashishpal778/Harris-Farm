//import {createStore} from "redux";
import {configureStore }  from "@reduxjs/toolkit"
import listReducer from "./reducers/listReducer"
import cartReducer from "./reducers/cartReducer"

const store = configureStore({reducer:{count:listReducer,detail:cartReducer,}});
export default store;