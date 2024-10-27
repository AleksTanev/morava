import { Navbar, NavItem } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import brandLogoLight from "@/assets/logos/Morava-logo-black.svg";
import brandLogoDark from "@/assets/logos/Morava-logo-white.svg";
import styles from "./Header.module.scss";
import ThemeToggleSwitch from "../ThemeToggleSwitch/ThemeToggleSwitch";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";

const headerTitles = [
    {
        title: "About",
        isCollapsible: false,
        route: "/about",
    },
    {
        title: "Services",
        isCollapsible: true,
        route: "/services",
    },
    {
        title: "FAQ",
        isCollapsible: false,
        route: "/faq",
    },
    {
        title: "Contacts",
        isCollapsible: false,
        route: "/contact-us",
    },
];

const Header = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Navbar className={styles["main-header"]}>
            <Link to="/" className={styles["navbar-brand"]}>
                <img src={theme === "light" ? brandLogoLight : brandLogoDark} alt="logo" />
            </Link>
            <div className={styles["nav-item-container"]}>
                {headerTitles.map(({ title, route }) => (
                    <NavItem className={styles["nav-item"]} key={title} tag={"div"}>
                        <NavLink to={route} className={styles["nav-link"]}>
                            {title}
                        </NavLink>
                    </NavItem>
                ))}
                <ThemeToggleSwitch />
            </div>
        </Navbar>
    );
};

export default Header;
