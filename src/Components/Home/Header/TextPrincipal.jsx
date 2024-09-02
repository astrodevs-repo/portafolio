import { motion } from "framer-motion";

const TextPrincipal = () => {
  return (
    <motion.p
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex flex-wrap sm:px-0 justify-center text-center items-center gap-2 text-4xl sm:text-lg md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-PoppinsBold text-blackCeniza dark:text-white "
    >
      Conectamos Innovación con Estrategia
    </motion.p>
  );
};

export default TextPrincipal;
