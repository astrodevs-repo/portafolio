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
        <TextParallaxContent
          key={index}
          subheading={item.title} // Suponiendo que tienes una propiedad subheading en tu objeto item
          heading={item.title} // Suponiendo que tienes una propiedad heading en tu objeto item
        >
          <Container>
            <section className="grid  grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 min-h-screen">
              {item.body.map((e, index) => (
                <ExampleContent description={e.text} title={e.title} key={index} />
              ))}
            </section>
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
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center "
    >
      <SubTitle text={subheading} extra={"text-center"} />
      <Title text={heading} extra={"text-center font-Baskerville"} />
    </motion.div>
  );
};

const ExampleContent = ({ description, title }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <section className="flex flex-col gap-10 bg-[#FDF59C] p-10 h-fit">
      <SubTitle text={title} extra={"font-bold"} />
      <section className="">
        <Text
          content={showFullDescription ? description : description.substring(0, 100) + " . . ."}
          extra={""}
        />
        {!showFullDescription && (
          <span onClick={toggleDescription} className="">
            <Text content={"Leer más"} extra={"text-blue-500 cursor-pointer"} />
          </span>
        )}
      </section>
    </section>
  );
};
