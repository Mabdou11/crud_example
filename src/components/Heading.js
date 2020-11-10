import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, Navbar, NavbarBrand, Container} from 'reactstrap';
export const Heading = () => {
    return (
            <Navbar color="dark" dark>
                <Container>
                    <NavbarBrand href="/">CRUDExample</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <Link className=" btn btn-primary" to="/add" > Add a new box</Link>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
    )
}
