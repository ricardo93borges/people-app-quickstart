import {STORE_PEOPLE, STORE_PERSON} from "../actions/actions-types"

export const initialState = {
    people: []
}

const people = (state = initialState, action) => {
    switch (action.type) {
        case STORE_PEOPLE:{
            return {
                ...state,
                people: action.people
            }
        }
        case STORE_PERSON:{
            const people = state.people.slice()
            people.push(action.person)
            return {
                ...state,
                people
            }
        }
        default: {
            return state
        }

    }
}

export default people