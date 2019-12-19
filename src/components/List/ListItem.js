// Libary
import React from 'react'
import { Image } from 'react-bootstrap';
import { Link } from "react-router-dom";

// Styles
import './../List/ListItem.css';

// Utils
import reduceString from './../../utils/reduceString'

export default function ListItem(course) {
    return (
        <li key={course.id}>
            <Link to={`/repo/${course.id}`}>
                <div className="item-container pointer flex">
                    <div className="item-body">
                        <h3 className="title">{reduceString(course.name, 20)}</h3>
                        <h5>{reduceString(course.description)}</h5>
                        <div className="body-flex">
                            <div>
                                <Image src={require('./../../assets/img/branch.png')} width="10" />
                                <p>{course.forks_count}</p>
                            </div>
                            <div>
                                <Image src={require('./../../assets/img/star.png')} width="10" />
                                <p>{course.stargazers_count}</p>
                            </div>
                        </div>
                    </div>
                    <div className="item-avatar">
                        <Image src={require('./../../assets/img/user.png')} width="45" />
                        <p className="title">{course.owner.login}</p>
                        <p>{new Date(course.created_at).toLocaleString()}</p>
                    </div>
                </div>
            </Link>
        </li>
    )
}