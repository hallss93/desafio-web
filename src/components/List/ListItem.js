import React, { useEffect } from 'react'
import { Navbar, Container, Image } from 'react-bootstrap';
import './ListItem.css';

export default function ListItem(course) {
    return (
        <li key={course}>
            <div className="item-container">
                <div className="item-body">
                    <h3 className="title">Nome repositorio</h3>
                    <h5>Descriçaõ dsfhsdf jhsdfjs dfsd fsdf fd hsdfhdf</h5>
                </div>
                <div className="item-avatar">
                <Image src={require('./../../assets/img/profile.png')} width="45"/>
                <p className="title">username</p>
                <p>username</p>
                </div>
            </div>
        </li>
    )
}