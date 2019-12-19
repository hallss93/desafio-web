import styled from 'styled-components';

const ItemContainer = styled.div`
    border-bottom: 1px solid #ccc;
    padding: 10px;
    &:hover{
        background: #cccccc1a;
    }
    @media (min-width: 720px) {
        padding: 10px 0px 10px 30px;
    }
`;
const ItemContainerFlex = styled(ItemContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const ItemContainerBlock = styled(ItemContainer)`
  display: block;
`;

export {
    ItemContainer,
    ItemContainerFlex,
    ItemContainerBlock,
}