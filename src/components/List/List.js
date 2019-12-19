// Libary
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Components
import ListItem from './ListItem'

// Store
import Opx from './../../store/operations'

// Utils
import useInterval from './../../utils/useInterval'

// Style
const { ContainerMargin } = require('./../../assets/styled/Container')
const { ListCustom } = require('./../../assets/styled/ListCustom')

export default function List({ parentCallback }) {
    const dispatch = useDispatch()
    let courses = useSelector(state => state.data)
    let page = useSelector(state => state.page)

    function verifyScrool() {
        let offsetTop = document.querySelector("#root > div > ul > li:last-child").offsetTop
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
        parentCallback(undefined)
        dispatch(Opx.clearPull());
        dispatch(Opx.getRepositories(page));
    }, [page]);

    return (
        <ContainerMargin>
            <ListCustom>
                {
                    courses.map(ListItem)
                }
            </ListCustom>
        </ContainerMargin>
    )
}