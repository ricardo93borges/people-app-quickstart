import {
    STORE_PEOPLE, STORE_PERSON,
  } from "../actions/actionsType"
  
  export const initialState = {
    people: []
  }

  const people = (state = initialState, action) => {
    switch (action.type) {
      case STORE_PEOPLE: {
        return {
          ...state,
          people: action.people
        }
      }
      
      case STORE_PERSON: {
        let people = state.people.slice()
        people.push(action.person)
        return {
          ...state,
          people: people
        }
      }

      default:
        return state
    }
  }
  
  export default people