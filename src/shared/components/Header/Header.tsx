import { Navbar, NavbarBrand, NavItem } from "reactstrap";
import { headerTitles } from "./constants";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/2.png";
import "./Header.css";

export interface HeaderProps {}

const Header = () => {
    return (
        <Navbar className="main-header">
            <NavbarBrand>
                <Link to="/" className="navbar-brand">
                    <img src={Logo} alt="logo" />
                </Link>
            </NavbarBrand>
            {headerTitles.map(({ title, route }) => (
                <NavItem className="nav-item" key={title} tag={"div"}>
                    <NavLink to={route} className="nav-link">
                        {title}
                    </NavLink>
                </NavItem>
            ))}
        </Navbar>
    );
};

export default Header;
