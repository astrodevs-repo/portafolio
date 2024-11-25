import Text from "../../shared/Text";
import { motion } from "framer-motion";

const Card = ({ title, content, svg, index, expanded, bg, onExpand }) => {
  return (
    <motion.article
      className={`relative ${bg} h-full w-full rounded-md overflow-hidden hidden sm:hidden md:flex flex-col justify-center items-center gap-10 px-20 py-10 cursor-pointer shadow-lg shadow-blackCeniza/50`}
      onClick={() => onExpand(index)}
    >
      <img src={svg} alt="" width={50} height={50} />
      <Text content={title} textColor={"text-white"} extra={"text-center"} />
      <motion.section
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${bg} text-white text-center p-5 `}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <Text content={content} textColor={"text-white"} />
      </motion.section>
    </motion.article>
  );
};
export default Card;
