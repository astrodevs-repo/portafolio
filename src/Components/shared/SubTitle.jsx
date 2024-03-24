import PropTypes from "prop-types";
const SubTitle = ({ text, textColor }) => {
  return (
    <div className="w-full justify-center flex items-center">
      <p className="text-xl text-gray-500" style={{ color: textColor }}>
        {text}
      </p>
    </div>
  );
};
SubTitle.propTypes = {
  text: PropTypes.node,
  textColor: PropTypes.node,
};
export default SubTitle;
