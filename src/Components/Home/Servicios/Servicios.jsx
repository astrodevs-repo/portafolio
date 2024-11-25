import { useState } from "react";
import { motion } from "framer-motion";
import Section from "../../shared/Section/Section";
import Card from "./Card";
import CardAccordion from "./CardAccordion";
import Text from "../../shared/Text";

function Servicios({ index, title, subtitle1, subtitle2, items }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Section
      title={title}
      subtitle={" "}
      index={index}
      contentPosition="grid-cols-1 sm:grid-cols-4 md:grid-cols-1 lg:grid-cols-4 justify-center flex flex-col gap-0 sm:flex md:grid w-full pt-0 sm:pt-0 md:pt-10 lg:pt-10 xl:pt-10 2xl:pt-20  3xl:pt-20 "
    >
      <Text
        content={subtitle1}
        extra={"col-span-4 md:col-span-1 lg:col-span-4 pb-10 font-Baskerville text-blackCeniza"}
      />
      <Text
        content={subtitle2}
        extra={
          "col-span-4  md:col-span-1 lg:col-span-4 pb-0 font-Baskerville text-blackCeniza md:pb-20"
        }
      />
      {items?.map((servicio, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0.5, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
          viewport={{ once: false }}
          className="p-2 hidden lg:flex"
        >
          <Card
            index={idx}
            title={servicio.title}
            content={servicio.content}
            svg={servicio.svg}
            expanded={expandedIndex === idx}
            onExpand={handleExpand}
            bg={servicio.bg}
          />
        </motion.div>
      ))}

      {items?.map((servicio, index) => (
        <CardAccordion
          key={index}
          index={index}
          title={servicio.title}
          content={servicio.content}
          svg={servicio.svg}
          expanded={expandedIndex === index}
          onExpand={handleExpand}
        />
      ))}
    </Section>
  );
}

export default Servicios;
