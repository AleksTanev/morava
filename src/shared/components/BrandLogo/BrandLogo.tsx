import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "@/shared/contexts/ThemeProvider";
import brandLogoLight from "@/assets/logos/Morava-logo-black.svg";
import brandLogoDark from "@/assets/logos/Morava-logo-white.svg";

export interface BrandLogoProps {
    to?: string;
    handleLogoClick?: () => void;
}

const BrandLogo = ({ to = "/", handleLogoClick }: BrandLogoProps) => {
    const { theme } = useContext(ThemeContext);

    const logo = theme === "light" ? brandLogoLight : brandLogoDark;

    return (
        <Link to={to} onClick={handleLogoClick}>
            <img src={logo} alt="Brand logo" />
        </Link>
    );
};

export default BrandLogo;
