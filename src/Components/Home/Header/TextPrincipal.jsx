import { motion } from "framer-motion";

const TextPrincipal = () => {
  const gradientText = {
    backgroundImage: "linear-gradient(to right, #8B5CF6, #6366F1)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  };
  return (
    <motion.p
      initial={{ opacity: 0, color: "rgba(255, 255, 255, 0)", y: -100 }}
      animate={{ opacity: 1, color: "rgba(255, 255, 255, 1)", y: 20 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex flex-wrap sm:px-0 justify-center text-center items-center gap-2 text-4xl sm:text-lg md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl "
    >
      Nosotros
      <span>somos</span>
      {"  "}
      <strong style={gradientText} className="font-LusitanaBold mt-2">
        {" "}
        Neurons
      </strong>
      <br />
    </motion.p>
  );
};

export default TextPrincipal;
