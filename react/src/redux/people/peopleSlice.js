import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

const peopleSlice =  createSlice({
    name: 'people', 
    initialState, 
    reducers: {
        //add-person
        addPerson: (state, action) => {}, 
        //get-people
        getPeople: (state, action) => {
            state.value = action.payload
        },
        //get-people-request
        getPeopleRequest: (state, action) => {},
    }
})

export const {addPerson, getPeople, getPeopleRequest} = peopleSlice.actions
export const selectPeople = (state) => state.people.value
export default peopleSlice.reducer