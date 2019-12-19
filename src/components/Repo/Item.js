// Libary
import React from 'react'
import { Image } from 'react-bootstrap';

// Styles
import './../List/ListItem.css';

// Utils
import reduceString from './../../utils/reduceString'

export default function Item(pulls) {
    return (
        <li key={pulls.id}>
            <div className="item-container block">
                <div className="item-body">
                    <h3 className="title">{reduceString(pulls.title, 20)}</h3>
                    <h5>{reduceString(pulls.body)}</h5>
                </div>
                <div className="avatar-container">
                    <Image src={require('./../../assets/img/user.png')} width="45" />
                    <div className="flex-1-1">
                        <p className="title">{pulls.user.login}</p>
                        <p>Created at: {new Date(pulls.created_at).toLocaleString()}</p>

                    </div>
                </div>
            </div>
        </li>
    )
}