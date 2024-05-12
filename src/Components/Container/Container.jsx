import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <section className="px-20 mx-auto max-w-screen-xl py-16 h-full">{children}</section>;
};
Container.propTypes = {
  children: PropTypes.node,
};
export default Container;
