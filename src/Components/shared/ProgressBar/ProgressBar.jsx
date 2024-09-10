import { motion, useScroll } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 w-1 h-full bg-gray-200 z-50"
      style={{ transformOrigin: "top", scaleY: scrollYProgress }}
    >
      <div className="h-full bg-BlueNeurons dark:bg-dark-BlueNeurons" />
    </motion.div>
  );
};
export default ProgressBar;
