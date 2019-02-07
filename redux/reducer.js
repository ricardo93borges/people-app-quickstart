import { combineReducers } from "redux"
import people from "../src/features/people/reducers/index"

const appReducer = combineReducers({
  people
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer