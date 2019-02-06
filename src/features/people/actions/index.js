import {
  STORE_PEOPLE
} from "./actionsType"

export const storePeople = (people) => ({
  type: STORE_PEOPLE,
  people
})
