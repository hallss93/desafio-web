// Libary
import React from 'react'
import { Image } from 'react-bootstrap';
import { Link } from "react-router-dom";

// Utils
import reduceString from './../../utils/reduceString'


// Styles
const { ItemContainerFlex } = require('./../../assets/styled/ItemContainer')
const { ItemBody, ItemBodyTitle, ItemBodyFlex, ItemBodyFlexItem, ItemBodyText } = require('./../../assets/styled/ItemBody')
const { ItemAvatar } = require('./../../assets/styled/ItemAvatar')
const { TextSmall, TextSmallCyan, TextH5 } = require('./../../assets/styled/Text')

export default function ListItem(course) {
    return (
        <li key={course.id}>
            <Link to={`/repo/${course.id}`}>
                <ItemContainerFlex>
                    <ItemBody>
                        <ItemBodyTitle>{reduceString(course.name, 20)}</ItemBodyTitle>
                        <TextH5>{reduceString(course.description)}</TextH5>
                        <ItemBodyFlex>
                            <ItemBodyFlexItem>
                                <Image src={require('./../../assets/img/branch.png')} width="10" />
                                <ItemBodyText>{course.forks_count}</ItemBodyText>
                            </ItemBodyFlexItem>
                            <ItemBodyFlexItem>
                                <Image src={require('./../../assets/img/star.png')} width="10" />
                                <ItemBodyText>{course.stargazers_count}</ItemBodyText>
                            </ItemBodyFlexItem>
                        </ItemBodyFlex>
                    </ItemBody>
                    <ItemAvatar>
                        <Image src={require('./../../assets/img/user.png')} width="45" />
                        <TextSmall>{course.owner.login}</TextSmall>
                        <TextSmallCyan>{new Date(course.created_at).toLocaleString()}</TextSmallCyan>
                    </ItemAvatar>
                </ItemContainerFlex>
            </Link>
        </li>
    )
}