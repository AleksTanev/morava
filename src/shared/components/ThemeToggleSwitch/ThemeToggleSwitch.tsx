import { useContext, useEffect } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";
import { Button } from "reactstrap";
import "./ThemeToggleSwitch.css";

const ThemeToggleSwitch = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        document.documentElement.setAttribute("theme", theme);
    }, [theme]);

    return <Button className={`toggle-switch ${theme === "light" ? "dark" : "light"}`} onClick={toggleTheme} />;
};

export default ThemeToggleSwitch;
