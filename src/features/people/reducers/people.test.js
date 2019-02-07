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

    


})