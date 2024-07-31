import { Navbar, NavbarBrand, NavItem } from "reactstrap";
import { headerTitles } from "./constants";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/logos/Morava-logo-black.svg";
import "./Header.css";
import ThemeToggleSwitch from "../ThemeToggleSwitch/ThemeToggleSwitch";

const Header = () => {
    return (
        <Navbar className="main-header p-3">
            <NavbarBrand tag={"div"}>
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
            <ThemeToggleSwitch />
        </Navbar>
    );
};

export default Header;
