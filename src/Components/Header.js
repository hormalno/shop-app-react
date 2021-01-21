import { faHome, faInfoCircle, faPhone, faSearch, faShoppingCart, faUserCircle, faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Header.css';
import { StyledSpan, StyledLinkIcons} from "./styled_components/style_components.js";

const Header = () => {

    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => setIsOpen(!isOpen);

    return (
    <div>
        <Navbar>
            <Navbar.Brand href="/"><FontAwesomeIcon icon={faCode} color="white" /> <span>My Shop</span></Navbar.Brand>
            {/* <div className="navbar-collapse collapse" id="collapse-1"> */}
            <Nav>
                <NavLink to="/"><StyledSpan className="link"> Home</StyledSpan></NavLink>
                <NavDropdown as="li" menuRole="menu" title="Products">
                    {/* <NavDropdown.Toggle href="/" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> */}
                    <span className="fa fa-tags"></span><span className="link"> Products</span> <span className="fa fa-caret-down"></span>
                    {/* <NavDropdown.Menu className="dropdown-menu"> */}
                        <NavDropdown.Item><NavLink to="/"><span className="fa fa-tag"></span> Catalogue 1</NavLink></NavDropdown.Item>
                        <NavDropdown.Item><NavLink to="/"><span className="fa fa-tag"></span> Catalogue 2</NavLink></NavDropdown.Item>
                    {/* </NavDropdown.Menu> */}
                </NavDropdown>
                <NavLink to="/"><StyledSpan className="link"> About</StyledSpan></NavLink>
                <NavLink to="/"><StyledSpan className="link"> Contact</StyledSpan></NavLink>
            </Nav>
            <Nav right>
                <Form inline>
                    <Form.Group>
                        <input type="text" className="form-control" placeholder="Search" />
                    </Form.Group>
                    <Button type="submit"><FontAwesomeIcon className="searchIcon" icon={faSearch} color="white" /></Button>
                </Form>
                <StyledLinkIcons to="/"><FontAwesomeIcon icon={faUserCircle} color="white" /><StyledSpan className="link"> Log in</StyledSpan></StyledLinkIcons>
                <StyledLinkIcons to="/"><FontAwesomeIcon icon={faShoppingCart} color="white"/><StyledSpan className="link"> Cart</StyledSpan></StyledLinkIcons>
            </Nav>
            {/* </div> */}
        </Navbar>
    </div>
    );
}

export default Header;