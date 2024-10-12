import { useScroll, useTransform, useSpring } from "framer-motion";
import { atomImageHeader } from "../../../utils/urlImages";
import React, { Suspense, lazy } from "react";

const LazyImage = lazy(() => import("../LazyImage"));

const SectionA = React.memo(function SectionA() {
  const { scrollY } = useScroll();
  const y3 = useSpring(useTransform(scrollY, [0, 2000], [0, -400]), {
    stiffness: 50,
    damping: 15,
  });
  const rotate = useSpring(0, { stiffness: 5, damping: 15 });
  rotate.set(rotate.get() + 1);

  return (
    <section className="absolute top-0 left-0 z-0 w-full h-screen overflow-hidden opacity-60 hidden sm:flex">
      <Suspense fallback={<section></section>}>
        <LazyImage
          src={atomImageHeader}
          alt="rotating"
          style={{ y: y3, rotate }}
          className="absolute top-40 left-40 w-56 h-56 opacity-40"
        />
      </Suspense>
      <Suspense fallback={<section></section>}>
        <LazyImage
          src={atomImageHeader}
          alt="rotating"
          style={{ y: y3, rotate }}
          className="absolute right-0 top-20 w-96 h-96 opacity-40"
        />
      </Suspense>
      <Suspense fallback={<section></section>}>
        <LazyImage
          src={atomImageHeader}
          alt="rotating"
          style={{ y: y3, rotate }}
          className="absolute right-40 bottom-0 w-60 h-60 opacity-50"
        />
      </Suspense>
      <Suspense fallback={<section></section>}>
        <LazyImage
          src={atomImageHeader}
          alt="rotating"
          style={{ y: y3, rotate }}
          className="absolute right-1/2 top-0 w-64 h-64 opacity-20"
        />
      </Suspense>
      <Suspense fallback={<section></section>}>
        <LazyImage
          src={atomImageHeader}
          alt="rotating"
          style={{ y: y3, rotate }}
          className="absolute right-3/2 bottom-0 w-64 h-64 opacity-80"
        />
      </Suspense>
    </section>
  );
});

export default SectionA;
