import { useEffect, useState } from "react";
import Text from "../../Components/shared/Text";
import { motion, useAnimation } from "framer-motion";

const MovingTextJ = ({ items, extra, transitionTime }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, transitionTime);

    return () => clearInterval(interval);
  }, [items.length, transitionTime]);

  useEffect(() => {
    controls.start({
      transition: { duration: transitionTime / 2000, ease: "easeInOut" },
    });
  }, [currentIndex, controls, transitionTime]);

  return (
    <div className={`relative overflow-hidden ${extra}`}>
      <motion.section
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold bg-opacity-40 px-5 py-2 rounded-full ${items[currentIndex].color}`}
        animate={controls}
      >
        <Text content={items[currentIndex].name} extra={""} />
      </motion.section>
    </div>
  );
};
export default MovingTextJ;
