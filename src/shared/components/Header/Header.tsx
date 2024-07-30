import { Button, Navbar, NavbarBrand, NavItem } from "reactstrap";
import { headerTitles } from "./constants";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/2.png";
import "./Header.css";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";

export interface HeaderProps {}

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

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
            <Button onClick={toggleTheme}>Toggle to {theme === "light" ? "Dark" : "Light"} Theme</Button>
        </Navbar>
    );
};

export default Header;
