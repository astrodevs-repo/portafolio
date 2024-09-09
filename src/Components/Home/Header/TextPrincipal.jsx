import { motion } from "framer-motion";

const TextPrincipal = () => {
  return (
    <motion.p
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex flex-wrap sm:px-40 justify-center text-center items-center gap-2 text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-Baskerville text-blackCeniza dark:text-white "
    >
      Transformando Ideas en Experiencias Digitales Extraordinarias
    </motion.p>
  );
};

export default TextPrincipal;
