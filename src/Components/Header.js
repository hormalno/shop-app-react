import { Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css"

function Header (){
    return (
        <div>
            <Navbar>
                <Navbar.Brand href="/"><span className="fa fa-home"></span><span className="link"> Home</span></Navbar.Brand>
                {/* <div className="navbar-collapse collapse" id="collapse-1"> */}
                <Nav>
                    <NavDropdown as="li">
                        <NavDropdown.Toggle href="/" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            <span className="fa fa-tags"></span><span className="link"> Products</span> <span className="fa fa-caret-down"></span></NavDropdown.Toggle>
                        <NavDropdown.Menu className="dropdown-menu">
                            <NavDropdown.Item><NavLink to="/"><span className="fa fa-tag"></span> Catalogue 1</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink to="/"><span className="fa fa-tag"></span> Catalogue 2</NavLink></NavDropdown.Item>
                        </NavDropdown.Menu>
                    </NavDropdown>
                    <li className="dropdown">
                        <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                            <span className="fa fa-gears"></span><span className="link"> Services</span> <span className="fa fa-caret-down"></span></a>
                        <ul className="dropdown-menu">
                            <li><NavLink to="/"><span className="fa fa-gear"></span> Service 1</NavLink></li>
                            <li><NavLink to="/"><span className="fa fa-gear"></span> Service 2</NavLink></li>
                            <li><NavLink to="/"><span className="fa fa-gear"></span> Service 3</NavLink></li>
                        </ul>
                    </li>
                    <Nav.Item as="li"><NavLink to="/"><span className="fa fa-info-circle"></span><span className="link"> About</span></NavLink></Nav.Item>
                    <Nav.Item as="li"><NavLink to="/"><span className="fa fa-phone"></span><span className="link"> Contact</span></NavLink></Nav.Item>
                </Nav>
                <Form inline>
                    <Form.Group>
                        <input type="text" className="form-control" placeholder="Search" />
                    </Form.Group>
                    <button type="submit" className="btn"><span className="fa fa-search"></span></button>
                </Form>
                {/* </div> */}
            </Navbar>
        </div>
    )
}

export default Header;