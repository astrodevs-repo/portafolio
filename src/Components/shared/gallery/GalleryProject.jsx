import Container from "../../Container/Container";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Title from "../../../Components/shared/Title";
import Text from "../Text";
import SubTitle from "../SubTitle";

const GalleryComponent = ({ nombre, description, imgCard }) => {
  return (
    <>
      <Container>
        <section className="flex flex-col gap-10">
          <motion.div animate={{ x: -20 }} transition={{ ease: "easeOut", duration: 2 }}>
            <SubTitle text={"Desarrollo web"} />
          </motion.div>
          <motion.div animate={{ x: -20 }} transition={{ ease: "easeOut", duration: 2 }}>
            <Title text={nombre} extra={"font-Baskerville"} />
          </motion.div>
          <motion.div animate={{ x: -20 }} transition={{ ease: "easeOut", duration: 2 }}>
            <Text content={description} extra={"w-2/3"} />
          </motion.div>
        </section>
      </Container>
      <motion.div
        animate={{ y: -50 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className={`pt-40 object-fit`}
      >
        <img src={imgCard} alt="" className="w-full h-96 object-cover" />
      </motion.div>
    </>
  );
};

GalleryComponent.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
};

export default GalleryComponent;
