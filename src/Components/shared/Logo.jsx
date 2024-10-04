import { scrollToSection } from "../../utils/functions";
import { logo } from "../../utils/urlImages";
const Logo = ({ link }) => {
  return (
    <a onClick={() => scrollToSection(link)} className="p-2 cursor-pointer">
      <img src={logo} alt="" className="w-[50px] sm:w-[50px]" width={100} height={100} />
    </a>
  );
};

export default Logo;
