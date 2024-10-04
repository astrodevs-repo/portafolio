import { scrollToSection } from "../../utils/functions";
import { logo } from "../../utils/urlImages";
const Logo = ({ link }) => {
  return (
    <a onClick={() => scrollToSection(link)} className="p-2 cursor-pointer">
      <img src={logo} alt="" className="w-[50px] sm:w-[50px]" />
    </a>
  );
};

export default Logo;
