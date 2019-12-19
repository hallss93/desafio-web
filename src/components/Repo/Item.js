// Libary
import React from 'react'
import { Image } from 'react-bootstrap';

// Utils
import reduceString from './../../utils/reduceString'

// Styles
const { ContainerAvatar, ContainerFlex1 } = require('./../../assets/styled/Container')
const { ItemContainerBlock } = require('./../../assets/styled/ItemContainer')
const { ItemBody, ItemBodyTitle } = require('./../../assets/styled/ItemBody')
const { TextSmall, TextSmallCyan, TextH5 } = require('./../../assets/styled/Text')

export default function Item(pulls) {
    return (
        <li key={pulls.id}>
            <ItemContainerBlock>
                <ItemBody>
                    <ItemBodyTitle>{reduceString(pulls.title, 20)}</ItemBodyTitle>
                    <TextH5>{reduceString(pulls.body)}</TextH5>
                </ItemBody>
                <ContainerAvatar>
                    <Image src={require('./../../assets/img/user.png')} width="45" />
                    <ContainerFlex1>
                        <TextSmall>{pulls.user.login}</TextSmall>
                        <TextSmallCyan>Created at: {new Date(pulls.created_at).toLocaleString()}</TextSmallCyan>
                    </ContainerFlex1>
                </ContainerAvatar>
            </ItemContainerBlock>
        </li>
    )
}