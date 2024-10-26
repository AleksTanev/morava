import { useContext, useEffect } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";
import { Button } from "reactstrap";
import styles from "./ThemeToggleSwitch.module.scss";
import classNames from "classnames";

const ThemeToggleSwitch = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        document.documentElement.setAttribute("theme", theme);
    }, [theme]);

    return <Button className={classNames(styles["toggleSwitch"], styles[theme])} onClick={toggleTheme} />;
};

export default ThemeToggleSwitch;
