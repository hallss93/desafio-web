import styled from 'styled-components';

const TextSmall = styled.p`
    margin: 0px;
    font-size: 12px;
`;
const TextSmallCyan = styled(TextSmall)`
    color:#908f8f;
`;

const TextH5 = styled.h5`
    margin: 0px;
    font-size: 12px;
`

export {
    TextSmall,
    TextSmallCyan,
    TextH5
}