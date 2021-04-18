import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPeopleRequest, selectPeople } from '../../redux/people/peopleSlice'

import PersonForm from './PersonForm'

const People = () => {
    const people = useSelector(selectPeople);
    const dispatch = useDispatch()
    useEffect(() => {       
        dispatch(getPeopleRequest())
    }, [])
    return(
        <>
            <PersonForm/>
            {
                people.map((person, index) => 
                <ul>
                    <li key={index}>{index}, {person.name}, {person.surname}</li>
                </ul>)
            }
        </>)}

export default People