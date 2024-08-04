import logoBrain from "../../../public/logoBrain.png";
const Logo = ({ link }) => {
  return (
    <a href={link} className="p-2">
      <img src={logoBrain} alt="" className="w-[30px] sm:w-[50px]" />
    </a>
  );
};

export default Logo;
