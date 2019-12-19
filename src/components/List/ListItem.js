import React, { useEffect } from 'react'
import { Navbar, Container, Image } from 'react-bootstrap';
import './ListItem.css';

export default function ListItem(course) {
    return (
        <li key={course.id}>
            <div className="item-container">
                <div className="item-body">
                    <h3 className="title">{course.name}</h3>
                    <h5>{course.description}</h5>
                    <div className="flex">
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
                </div>
            </div>
        </li>
    )
}