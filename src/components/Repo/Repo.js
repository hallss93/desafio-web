// Libary
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from "react-router-dom";

//Components
import Opx from './../../store/operations'
import Item from './Item'

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
        window.scrollTo(0,0);
        parentCallback(pulls_url.split('/')[5])
        dispatch(Opx.getRepository(pulls_url));
    }, [])
    return (
        <div className="container-margin">
            {pulls.length > 0 ? <div className="bread-c">
                <div className="open">{open} opened</div>
                <div className="closed">{closed} closed</div>
            </div> : <></>
            }
            <ul>
                {
                    pulls.map(Item)
                }
            </ul>
        </div>
    )
}