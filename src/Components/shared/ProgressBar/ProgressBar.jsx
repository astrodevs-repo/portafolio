import { motion, useScroll } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.section
      className="hidden md:block fixed top-0 left-0 w-2 h-full z-50"
      style={{ transformOrigin: "top", scaleY: scrollYProgress }}
    >
      <div className="h-full bg-BlueNeurons dark:bg-dark-BlueNeurons/30" />
    </motion.section>
  );
};

export default ProgressBar;
