import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

export default function ParallaxText({ items, baseVelocity = 100 }) {
  const baseY = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const y = useTransform(baseY, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseY.set(baseY.get() + moveBy);
  });
  const duplicateItems = (items, times) => {
    let result = [];
    for (let i = 0; i < times; i++) {
      result = result.concat(items);
    }
    return result;
  };
  const duplicatedItems = duplicateItems(items, 10);

  return (
    <section className="relative h-[600px] py-5 overflow-hidden w-full px-2 z-0">
      <motion.div style={{ y }} className="scroller w-full flex flex-col gap-5">
        {duplicatedItems.map((item, index) => (
          <motion.div
            className="min-w-fit flex items-center gap-5 cursor-pointer"
            key={index}
            initial={{ opacity: 0.5 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={item} alt="" className={item.extra} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
