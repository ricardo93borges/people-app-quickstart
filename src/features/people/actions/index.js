import {
  STORE_PEOPLE, STORE_PERSON
} from "./actionsType"

export const storePeople = (people) => ({
  type: STORE_PEOPLE,
  people
})

export const storePerson = (person) => ({
  type: STORE_PERSON,
  person
})
