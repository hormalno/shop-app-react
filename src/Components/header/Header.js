import MegaMenu from "./MegaMenu";

function Header(props) {
    return <div>
                <div className="promo-bar">
                    <p>Save 10% storewide using coupon code SAVE</p>
                </div>
                <div>
                    <nav className="navbar">
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li className="dropdown">
                                <a href="/">Shop</a>
                                <MegaMenu />
                            </li>
                            <li>
                                <a href="/">About Us</a>
                            </li>
                            <li>
                                <a href="/">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>;
  }

export default Header;