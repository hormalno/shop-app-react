import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap/lib/Tab";
import "./Header.css"

function Header (){
        return (
            <div>
            <Navbar>
                <Container>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#collapse-1" aria-expanded="false">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/"><span className="fa fa-home"></span><span className="link"> Home</span></a>
                    </div>
                    <div className="navbar-collapse collapse" id="collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="dropdown">
                                <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    <span className="fa fa-tags"></span><span className="link"> Products</span> <span className="fa fa-caret-down"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="/"><span className="fa fa-tag"></span> Catalogue 1</a></li>
                                    <li><a href="/"><span className="fa fa-tag"></span> Catalogue 2</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                    <span className="fa fa-gears"></span><span className="link"> Services</span> <span className="fa fa-caret-down"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="/"><span className="fa fa-gear"></span> Service 1</a></li>
                                    <li><a href="/"><span className="fa fa-gear"></span> Service 2</a></li>
                                    <li><a href="/"><span className="fa fa-gear"></span> Service 3</a></li>
                                </ul>
                            </li>
                            <li><a href="/"><span className="fa fa-info-circle"></span><span className="link"> About</span></a></li>
                            <li><a href="/"><span className="fa fa-phone"></span><span className="link"> Contact</span></a></li>
                        </ul>
                        <form className="navbar-form navbar-right">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>
                            <button type="submit" className="btn"><span className="fa fa-search"></span></button>
                        </form>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;