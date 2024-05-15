import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <section className="px-5 sm:px-5 md:px-10 lg:px-40 w-full py-16 h-full flex flex-col gap-10">
      {children}
    </section>
  );
};
Container.propTypes = {
  children: PropTypes.node,
};
export default Container;
