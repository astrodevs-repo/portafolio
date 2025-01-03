import React from "react";
import SubTitle from "../../shared/SubTitle";
import Text from "../../shared/Text";
import { motion } from "framer-motion";

const Content = React.memo(function Content({ title, subTitle }) {
  return (
    <section className="pl-14 pr-5 sm:pl-40 pb-32">
      <motion.section
        initial={{ opacity: 0.5, y: 40 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.5 }}
        className="-mt-10 flex flex-col gap-5"
      >
        <SubTitle text={title} extra={"font-bold"} font={"font-Baskerville italic"} />
        <Text content={subTitle} />
      </motion.section>
    </section>
  );
});

export default Content;
