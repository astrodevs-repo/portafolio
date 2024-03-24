import PropTypes from "prop-types";

const Section = ({ id, children }) => {
  return (
    <section className="w-full h-fit-content  " id={id}>
      {children}
    </section>
  );
};
Section.propTypes = {
  id: PropTypes.node,
  children: PropTypes.node,
};
export default Section;
