import styled from 'styled-components';
import { Image, Navbar } from 'react-bootstrap';

const Nav = styled.nav`
    top:0;
    width: 100%;
    background: #343438;
    position: fixed!important;
    color: white;
`;

const MenuIcon = styled(Image)`
    margin-right: 20px;
`
const NavbarBrand = styled(Navbar.Brand)`
    flex: 1;
    color: white;

`

export {
    Nav,
    MenuIcon,
    NavbarBrand
} 