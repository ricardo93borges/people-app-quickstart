import {
    SHOW_PERSON,
    STORE_PEOPLE,
    CREATE_PERSON,
    UPDATE_PERSON,
    DESTROY_PERSON
  } from "../actions/actionsType"
  
  const initialState = {

  }

  const people = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_PERSON: {
        return Object.assign({}, state, { people: action.people })
      }
      
      case STORE_PEOPLE: {
        return Object.assign({}, state, { people: action.people })
      }

      case CREATE_PERSON: {
        return Object.assign({}, state, { people: action.people })
      }

      case UPDATE_PERSON: {
        return Object.assign({}, state, { people: action.people })
      }

      case DESTROY_PERSON: {
        return Object.assign({}, state, { people: action.people })
      }
  
      default:
        return state
    }
  }
  
  export default people