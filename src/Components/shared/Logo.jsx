import { scrollToSection } from "../../utils/functions";
import { logo } from "../../utils/urlImages";
const Logo = ({ link }) => {
  return (
    <a onClick={() => scrollToSection(link)} className="p-2 cursor-pointer">
      <img src={logo} alt="" className="" width={50} height={50} />
    </a>
  );
};

export default Logo;
