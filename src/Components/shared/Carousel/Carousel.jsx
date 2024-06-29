import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalScrollCarousel = ({ children }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-transparent">
      <div className="sticky top-0 left-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
