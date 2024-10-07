import React from "react";
import SubTitle from "../../shared/SubTitle";
import Text from "../../shared/Text";
import { motion } from "framer-motion";

const Content = React.memo(function Content({ currentStep, index, i, name, sections }) {
  const current = parseInt(currentStep);
  const idx = parseInt(index);

  const isVisible = current >= idx;

  return (
    <section className="px-14 sm:px-40 pb-32">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 5,
          scale: isVisible ? 1.1 : 1,
        }}
        transition={{ duration: 0.5 }}
        className="-mt-10"
      >
        <SubTitle text={name} extra={"font-bold "} font={"font-Baskerville italic"} />
        <Text content={sections[i]?.subTitle} />
      </motion.section>
    </section>
  );
});

export default Content;
