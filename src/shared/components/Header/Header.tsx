import { Navbar, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import ThemeToggleSwitch from "../ThemeToggleSwitch/ThemeToggleSwitch";
import BrandLogo from "../BrandLogo/BrandLogo";
import classNames from "classnames";
import { useState } from "react";

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
    const [activeLink, setActiveLink] = useState<string>("");

    return (
        <Navbar className={styles["main-header"]}>
            <div className={styles["navbar-brand-container"]}>
                <BrandLogo handleLogoClick={() => setActiveLink("")} />
            </div>
            <div className={styles["nav-item-container"]}>
                {headerTitles.map(({ title, route }) => (
                    <NavItem className={styles["nav-item"]} key={title} tag={"div"}>
                        <NavLink
                            to={route}
                            className={classNames(styles["nav-link"], { [styles.active]: title === activeLink })}
                            onClick={() => setActiveLink(title)}
                        >
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
