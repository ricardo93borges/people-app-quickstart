import {
    SHOW_PERSON,
    STORE_PEOPLE,
    CREATE_PERSON,
    UPDATE_PERSON,
    DESTROY_PERSON
  } from "./actionsType"

  export const showPerson = (person) => ({
    type: SHOW_PERSON,
    person
  })

  export const storePeople = (people) => ({
    type: STORE_PEOPLE,
    people
  })

  export const createPerson = (person) => ({
    type: CREATE_PERSON,
    person
  })

  export const updatePerson = (person) => ({
    type: UPDATE_PERSON,
    person
  })

  export const destroyPerson = (person) => ({
    type: DESTROY_PERSON,
    person
  })