import PropTypes from "prop-types";

const Title = ({ text, extra, textColor }) => {
  return <h1 className={`${textColor} font-extrabold leading-[40px] w-full ${extra}`}>{text}</h1>;
};
Title.propTypes = {
  text: PropTypes.node,
};

export default Title;
