import styled from 'styled-components';
const { TextSmall } = require("./Text")

const ItemBody = styled.div`
    flex: 3;
    @media (min-width: 720px) {
        flex: 8;
    }
`;
const ItemBodyTitle = styled.h3`
    font-weight: bold;
    color: #417baf;
    font-size: 16px;
`
const ItemBodyFlex = styled.div`
    margin-top: 5px;
    display: flex;
`
const ItemBodyFlexItem = styled(ItemBodyFlex)`
    align-items: center;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
    display: flex;
`
const ItemBodyText = styled(TextSmall)`
    color: #e09205;
    font-weight: bold;
    display: contents;
`
const ItemBodyTextOpen = styled.div`
    color: #e09205;
    font-weight: bold;
    font-size: 12px;
    margin-right: 5px;
    
`
const ItemBodyTextClosed = styled.div`
    font-size: 12px;
    font-weight: bold;

    &:before {
        content: " /  ";
    }
    
`
export {
    ItemBody,
    ItemBodyTitle,
    ItemBodyFlex,
    ItemBodyFlexItem,
    ItemBodyText,
    ItemBodyTextOpen,
    ItemBodyTextClosed,
}