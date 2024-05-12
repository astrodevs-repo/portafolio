import PropTypes from "prop-types";
const SubTitle = ({ text, textColor, display }) => {
  return (
    <p className={`text-xl text-${display}`} style={{ color: textColor }}>
      {text}
    </p>
  );
};
SubTitle.propTypes = {
  text: PropTypes.node,
  textColor: PropTypes.node,
};
export default SubTitle;
