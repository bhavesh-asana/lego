import {createStore} from "redux"
import reducers from "./reducer/combine"

const store =createStore(reducers)

export default store