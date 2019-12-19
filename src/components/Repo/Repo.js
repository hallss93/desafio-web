// Libary
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";

//Components
import Opx from './../../store/operations'
import Item from './Item'

// Style
const { ContainerMargin, ContainerBread } = require('./../../assets/styled/Container')
const { ItemBodyTextOpen, ItemBodyTextClosed } = require('./../../assets/styled/ItemBody')
const { ListCustom } = require('./../../assets/styled/ListCustom')

export default function Repo({ parentCallback }) {
    const dispatch = useDispatch()
    let pulls = useSelector(state => state.pulls)
    let open = pulls.filter(e => e.state == "open").length
    let closed = pulls.filter(e => e.state != "open").length

    let { id } = useParams();
    let course_info = useSelector(state => state.data.find(e => e.id == id))

    // Validate repository in store
    if (!course_info) window.location = "/"

    // Prepare Repository for get pulls 
    let pulls_url = course_info.pulls_url.replace('{/number}', '')

    useEffect(() => {
        window.scrollTo(0, 0);
        parentCallback(pulls_url.split('/')[5])
        dispatch(Opx.getRepository(pulls_url));
    }, [])
    return (
        <ContainerMargin>
            {pulls.length > 0 ? <ContainerBread>
                <ItemBodyTextOpen>{`${open} opened`}</ItemBodyTextOpen>
                <ItemBodyTextClosed>{`${closed} closed`}</ItemBodyTextClosed>
            </ContainerBread> : <></>
            }
            <ListCustom>
                {
                    pulls.map(Item)
                }
            </ListCustom>
        </ContainerMargin>
    )
}