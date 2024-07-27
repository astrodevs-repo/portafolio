import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Text from "../shared/Text";
import SubTitle from "../shared/SubTitle";
import Title from "../shared/Title";
import Container from "../Container/Container";

export const TextParallaxContentExample = ({ project }) => {
  return (
    <>
      {project.map((item, index) => (
        <TextParallaxContent key={item.title} subheading={item.subtitle} heading={item.title}>
          <Container>
            <motion.section
              className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 min-h-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              {item.body.map((e) => (
                <div key={e.text}>
                  <ExampleContent description={e.text} title={e.title} />
                </div>
              ))}
            </motion.section>
          </Container>
        </TextParallaxContent>
      ))}
    </>
  );
};

const IMG_PADDING = 0;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-fit">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      <section className="relative"> {children}</section>
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        borderRadius: "20px",
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-transparent"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center gap-10"
    >
      <Title text={heading} extra={"text-center font-Baskerville"} />

      <SubTitle text={subheading} extra={"text-center w-[40%]"} />
    </motion.div>
  );
};

const ExampleContent = ({ description, title }) => {
  return (
    <section className="flex flex-col gap-10 bg-[#FDF59C] p-10 h-fit">
      <SubTitle text={title} extra={"font-bold"} />
      <section className="">
        <Text content={description} />
      </section>
    </section>
  );
};
