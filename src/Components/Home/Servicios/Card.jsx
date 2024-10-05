import Text from "../../shared/Text";
import { motion } from "framer-motion";

const Card = ({ title, content, svg, index, expanded, onExpand }) => {
  return (
    <motion.article
      className="relative bg-blackCeniza dark:bg-gray-900 h-full w-full rounded-3xl overflow-hidden hidden sm:hidden md:flex flex-col justify-center items-center gap-10 px-20 py-10 cursor-pointer"
      onClick={() => onExpand(index)}
      whileHover={{ scale: 1.02 }}
    >
      <img src={svg} alt="" width={50} height={50} />
      <Text content={title} textColor={"text-white"} extra={"text-center"} />
      <motion.section
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 bg-gradient-to-r from-slate-600 to-blackCeniza dark:from-slate-900 dark:to-blackCeniza bg-opacity-80 text-white text-center p-5 ${
          expanded ? "opacity-100" : "opacity-0"
        }`}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <Text content={content} textColor={"text-white"} />
      </motion.section>
    </motion.article>
  );
};
export default Card;
