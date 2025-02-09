import { Navbar, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import ThemeToggleSwitch from "../ThemeToggleSwitch/ThemeToggleSwitch";
import BrandLogo from "../BrandLogo/BrandLogo";

const headerTitles = [
    // {
    //     title: "Services",
    //     isCollapsible: true,
    //     route: "/services",
    // },
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

    return (
        <Navbar className={styles["main-header"]}>
            <div className={styles["navbar-brand-container"]}>
                <BrandLogo />
            </div>
            <div className={styles["nav-item-container"]}>
                {headerTitles.map(({ title, route }) => (
                    <NavItem className={styles["nav-item"]} key={title} tag={"div"}>
                        <NavLink to={route} className={styles["nav-link"]} onClick={console.log}>
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
