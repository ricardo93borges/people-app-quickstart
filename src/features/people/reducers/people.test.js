import { expect } from 'chai'
import deepFreeze from 'deep-freeze'
import people, { initialState } from './index'
import { STORE_PEOPLE, STORE_PERSON } from '../actions/actionsType'

describe('People reducer', () => {

    it('should todo be a function', () => {
        expect(people).to.be.a('function')
    })

    it('should return inital state when state before is undefined', () => {
        const before = undefined
        const action = {type: 'UNKNOWN'}
        const after = initialState
        expect(people(before, action)).to.be.deep.equal(after)
    })

    it('should add a person', () => {
        let person = {id:1, name:'name', age:1, birth_at:'2019-02-05T00:00:00.000Z'}
        
        const before = initialState
        const action = {type: STORE_PERSON, person}
        const after = {people: [person]}
        const state = people(before, action)

        expect(state).to.be.deep.equal(after)
    })

    it('should add people', () => {
        let person = {id:1, name:'name', age:1, birth_at:'2019-02-05T00:00:00.000Z'}
        let peopleArr = [person, person]

        const before = initialState
        const action = {type: STORE_PEOPLE, people: peopleArr}
        const after = {people: peopleArr}
        const state = people(before, action)

        expect(state).to.be.deep.equal(after)
    })

})