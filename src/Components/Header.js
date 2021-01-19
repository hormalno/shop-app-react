import { faHome, faInfoCircle, faPhone, faSearch, faShoppingCart, faUserCircle, faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import './Header.css';

const Header = (props) => {

    const StyledSpan = styled.span `
        width: 0;
        font-family: 'Roboto', sans-serif;
        transition: 0.2s ease-in-out;
        visibility: hidden;
        font-size: 0px;
        color: white;
    `

    const StyledLink = styled(NavLink)`
        max-height: 50px;
        width: auto;
        background: transparent;
        font-size: 18px;
        transition: 0.2s ease-in-out;
        &:hover {
            background-color: rgba(255,255,255,0.2);
	        font-size: 14px;
        };
    `
    

    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => setIsOpen(!isOpen);
    
    return (
    <div>
        <Navbar>
            <Navbar.Brand href="/"><FontAwesomeIcon icon={faCode} color="white" /> <span>My Shop</span></Navbar.Brand>
            {/* <div className="navbar-collapse collapse" id="collapse-1"> */}
            <Nav>
                <Nav.Item as="li"><NavLink to="/"><FontAwesomeIcon icon={faHome} color="white" /><StyledSpan> Home</StyledSpan></NavLink></Nav.Item>
                <NavDropdown as="li" menuRole="menu" title="Products">
                    {/* <NavDropdown.Toggle href="/" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> */}
                    <span className="fa fa-tags"></span><span className="link"> Products</span> <span className="fa fa-caret-down"></span>
                    {/* <NavDropdown.Menu className="dropdown-menu"> */}
                        <NavDropdown.Item><NavLink to="/"><span className="fa fa-tag"></span> Catalogue 1</NavLink></NavDropdown.Item>
                        <NavDropdown.Item><NavLink to="/"><span className="fa fa-tag"></span> Catalogue 2</NavLink></NavDropdown.Item>
                    {/* </NavDropdown.Menu> */}
                </NavDropdown>
                <StyledLink to="/"><FontAwesomeIcon icon={faInfoCircle} color="white" /><StyledSpan> About</StyledSpan></StyledLink>
                <StyledLink to="/"><FontAwesomeIcon icon={faPhone} color="white" /><StyledSpan> Contact</StyledSpan></StyledLink>
            </Nav>
            <Form inline>
                <Form.Group>
                    <input type="text" className="form-control" placeholder="Search" />
                </Form.Group>
                <Button type="submit"><FontAwesomeIcon className="searchIcon" icon={faSearch} color="white" /></Button>
            </Form>
            <Nav pullRight>
                <StyledLink to="/"><FontAwesomeIcon icon={faUserCircle} color="white" /><span className="link"> Log in</span></StyledLink>
                <StyledLink to="/"><FontAwesomeIcon icon={faShoppingCart} color="white"/><span className="link"> Cart</span></StyledLink>
            </Nav>
            {/* </div> */}
        </Navbar>
    </div>
    );
}

export default Header;