import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Opx from './../../store/operations'
import ListItem from './ListItem'
function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}
export default function List() {
    const dispatch = useDispatch()
    let courses = useSelector(state => state.data)
    let page = useSelector(state => state.page)

    function verifyScrool() {
        let offsetTop = document.querySelector("#root > ul > li:last-child").offsetTop
        let scrollY = window.scrollY
        let innerHeight = window.innerHeight;
        let nextHeight = offsetTop - scrollY - (innerHeight * 2)
        if (nextHeight < 2000) {
            let newPage = page + 1
            dispatch(Opx.setPage(newPage));
        }
    }
    useInterval(() => {
        verifyScrool();
    }, 2000);
    useEffect(() => {
        dispatch(Opx.getRepositories(page));
    }, [page]);

    return (
        <ul>
            {
                courses.map(ListItem)
            }
        </ul>
    )
}