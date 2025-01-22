import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeProvider";
import brandLogoLight from "@/assets/logos/Morava-logo-black.svg";
import brandLogoDark from "@/assets/logos/Morava-logo-white.svg";

export interface BrandLogoProps {
    to?: string;
}

const BrandLogo = ({ to = "/" }) => {
    const { theme } = useContext(ThemeContext);

    const logo = theme === "light" ? brandLogoLight : brandLogoDark;

    return (
        <Link to={to}>
            <img src={logo} alt="Brand logo" />
        </Link>
    );
};

export default BrandLogo;
