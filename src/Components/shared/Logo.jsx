import { scrollToSection } from "../../utils/functions";
import { logo } from "../../utils/urlImages";
const Logo = ({ link }) => {
  return (
    <img
      src={logo}
      alt=""
      onClick={() => scrollToSection(link)}
      className="p-2 cursor-pointer"
      width={60}
      height={60}
    />
  );
};

export default Logo;
