import {
    STORE_PEOPLE,
  } from "../actions/actionsType"
  
  const initialState = {
    people: []
  }

  const people = (state = initialState, action) => {
    switch (action.type) {
      case STORE_PEOPLE: {
        return {
          people: action.people
        }
      }

      default:
        return state
    }
  }
  
  export default people