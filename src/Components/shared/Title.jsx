import PropTypes from "prop-types";

const Title = ({ text }) => {
  return (
    <div className="w-full justify-center flex items-center">
      <h1 className="text-4xl">{text}</h1>
    </div>
  );
};
Title.propTypes = {
  text: PropTypes.node,
};

export default Title;
