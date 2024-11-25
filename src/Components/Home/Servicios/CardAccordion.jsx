import Text from "../../shared/Text";
import { motion } from "framer-motion";

const CardAccordion = ({ title, content, svg, index, expanded, onExpand }) => {
  return (
    <motion.div
      className="border border-gray-300 rounded-md overflow-hidden cursor-pointer flex flex-col md:my-2 sm:flex md:flex lg:hidden w-full my-0"
      onClick={() => onExpand(index)}
    >
      <motion.section className="flex items-center justify-between p-4 bg-blackCeniza w-full text-white">
        <img src={svg} alt={title} className="mr-4" width={40} height={40} />
        <Text content={title} textColor={"text-white"} />

        <motion.span
          className="transform transition-transform duration-300"
          animate={{ rotate: expanded ? 180 : 0 }}
        >
          ▼
        </motion.span>
      </motion.section>
      {expanded && (
        <motion.section
          className="p-4 bg-gradient-to-r from-slate-600 to-blackCeniza text-white"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
        >
          <Text content={content} textColor={"text-white"} />
        </motion.section>
      )}
    </motion.div>
  );
};
export default CardAccordion;
