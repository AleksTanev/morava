import { Navbar, NavbarBrand, NavItem } from "reactstrap";
import { headerTitles } from "./constants";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/2.png";
import styles from "./Header.module.scss";
import ThemeToggleSwitch from "../ThemeToggleSwitch/ThemeToggleSwitch";

const Header = () => {
    return (
        <Navbar className={styles["main-header"]}>
            <NavbarBrand>
                <Link to="/" className={styles["navbar-brand"]}>
                    <img src={Logo} alt="logo" />
                </Link>
            </NavbarBrand>
            {headerTitles.map(({ title, route }) => (
                <NavItem className={styles["nav-item"]} key={title} tag={"div"}>
                    <NavLink to={route} className={styles["nav-link"]}>
                        {title}
                    </NavLink>
                </NavItem>
            ))}
            <ThemeToggleSwitch />
        </Navbar>
    );
};

export default Header;
