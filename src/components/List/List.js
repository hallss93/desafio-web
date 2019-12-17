import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Opx from './../../store/operations'

export default function List() {
    const dispatch = useDispatch()
    let courses = useSelector(state => state.data)

    useEffect(() => {
        dispatch(Opx.getRepositories(1));
    }, []);


    return (
        <ul>
            {
                courses.map(course => <li key={course.id}>{course.name}</li>)
            }
        </ul>
    )
}