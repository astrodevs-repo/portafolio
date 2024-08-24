import logoBrain from "../../../public/logoBrain.png";
import { scrollToSection } from "../../utils/functions";
const Logo = ({ link }) => {
  return (
    <a onClick={() => scrollToSection(link)} className="p-2 cursor-pointer">
      <img src={logoBrain} alt="" className="w-[50px] sm:w-[50px]" />
    </a>
  );
};

export default Logo;
