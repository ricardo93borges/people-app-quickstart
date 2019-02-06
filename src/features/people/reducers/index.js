import {
    STORE_PEOPLE, STORE_PERSON,
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
      
      case STORE_PERSON: {
        let people = state.people.slice()
        people.push(action.person)
        return {
          people: people
        }
      }

      default:
        return state
    }
  }
  
  export default people