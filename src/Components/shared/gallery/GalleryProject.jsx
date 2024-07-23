import { useEffect, useState } from "react";
import Container from "../../Container/Container";
import styles from "./GalleryComponent.module.scss";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Title from "../../../Components/shared/Title";
import Text from "../Text";
import SubTitle from "../SubTitle";

const GalleryComponent = ({ nombre, description, imgCard }) => {
  return (
    <div>
      <Container>
        <div className="flex flex-col gap-10">
          <motion.div animate={{ x: -20 }} transition={{ ease: "easeOut", duration: 2 }}>
            <SubTitle text={"Desarrollo web"} />
          </motion.div>
          <motion.div animate={{ x: -20 }} transition={{ ease: "easeOut", duration: 2 }}>
            <Title text={nombre} extra={"font-Baskerville"} />
          </motion.div>
          <motion.div animate={{ x: -20 }} transition={{ ease: "easeOut", duration: 2 }}>
            <Text content={description} />
          </motion.div>
        </div>
      </Container>
      <div className="h-20"></div>
      <motion.div
        animate={{ y: -50 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className={styles["gallery-wrap"]}
      >
        <img src={imgCard} alt="" className="w-full" />
      </motion.div>
    </div>
  );
};

GalleryComponent.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
};

export default GalleryComponent;
