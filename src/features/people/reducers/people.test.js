import { expect } from 'chai'
import people, { initialState } from './index'
import { STORE_PEOPLE, STORE_PERSON } from '../actions/actions-types'

describe('People Reducer tests', () => {
    
    it('should people be a function', () => {
        expect(people).to.be.a('function')
    })

    it('should return initial state when a action is unknown', () => {
        const before = initialState
        const action = {type: 'UNKNOWN'}
        const after = initialState
        const state = people(before, action)
        expect(state).to.be.deep.equal(after)
    })

    it('should add people', () => {
        const person = {id:0, name:'Test', birth_at:'2018-02-06'}
        const peopleArr = [person, person]

        const before = initialState
        const action = {type: STORE_PEOPLE, people: peopleArr}
        const after = { people: peopleArr }
        const state = people(before, action)
        expect(state).to.be.deep.equal(after)    
    })

    it('should add a person', () => {
        let person = {id:1, name:'name', age:1, birth_at:'2019-02-05T00:00:00.000Z'}
        
        const before = initialState
        const action = {type: STORE_PERSON, person}
        const after = {people: [person]}
        const state = people(before, action)

        expect(state).to.be.deep.equal(after)  
    })


})