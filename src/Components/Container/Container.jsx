import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className=" px-4 mx-auto max-w-screen-xl py-16 h-full">{children}</div>;
};
Container.propTypes = {
  children: PropTypes.node,
};
export default Container;
