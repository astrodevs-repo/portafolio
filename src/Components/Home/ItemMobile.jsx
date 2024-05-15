import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ItemMobile = ({ name, index, i, onObserver, currentStep }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) onObserver(index);
        });
      },
      { threshold: 0, rootMargin: "-50% 0% -50% 0%" }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <article className="step" key={name} ref={ref}>
      <section className={`v-stepper `}>
        <motion.div
          key={name}
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: parseInt(currentStep) >= parseInt(index) ? 1 : 1,
            y: parseInt(currentStep) >= parseInt(index) ? 0 : 20,
          }}
          transition={{ duration: 0.5 }}
          className={`circle${index}  ${parseInt(currentStep) >= parseInt(index) && "active"}`}
        >
          <span className="steper-count"></span>
        </motion.div>
        <motion.div
          key={name}
          ref={ref}
          initial={{ opacity: 20, y: 20 }}
          animate={{
            opacity: parseInt(currentStep) >= parseInt(index) ? 1 : 0,
            y: parseInt(currentStep) >= parseInt(index) ? 0 : 20,
            scale: parseInt(currentStep) >= parseInt(index) ? 1.3 : 1,
          }}
          transition={{ duration: 0.5 }}
          className={`circlefade  ${parseInt(currentStep) >= parseInt(index) && "activefade"}`}
        >
          <span className="steper-count"></span>
        </motion.div>

        <span
          className={`line  ${parseInt(currentStep) >= parseInt(index) && "activeLine"}`}
        ></span>
      </section>

      <Content currentStep={currentStep} i={i} index={index} name={name} />
    </article>
  );
};

export default ItemMobile;

const Content = ({ currentStep, index, i, name }) => {
  return (
    <section className="content">
      <motion.p
        initial={{ opacity: 20, y: 20 }}
        animate={{
          opacity: parseInt(currentStep) >= parseInt(index) ? 1 : 0,
          y: parseInt(currentStep) >= parseInt(index) ? 0 : 5,
          scale: parseInt(currentStep) >= parseInt(index) ? 1.1 : 1,
        }}
        transition={{ duration: 0.5 }}
        className="text-xs sm:text-xs md:text-lg lg:text-2xl  w-full mt-4 text-black font-Poppins uppercase"
      >
        {name}
      </motion.p>
      <section className="flex flex-col gap-3 -mt-5 ">
        <h1 className="text-lg sm:text-lg md:text-lg lg:text-4xl  text-black font-CinzelBold">
          {sections[i]?.title}
        </h1>
        <p className="text-sm sm:text-sm md:text-lg lg:text-2xl  text-black font-Marcellus">
          {sections[i]?.subTitle}
        </p>
      </section>
    </section>
  );
};

const sections = [
  {
    title: "lorem",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum porro placeat, veritatis voluptatum animi obcaecati facere nihil voluptatibus laudantium blanditiis, quidem voluptas a facilis molestiae sapiente repudiandae officia maxime numquam.",
    img: "roadmap1",
    index: "1",
  },
  {
    title: "lorem",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum porro placeat, veritatis voluptatum animi obcaecati facere nihil voluptatibus laudantium blanditiis, quidem voluptas a facilis molestiae sapiente repudiandae officia maxime numquam.",
    img: "roadmap2",
    index: "2",
  },
  {
    title: "lorem",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum porro placeat, veritatis voluptatum animi obcaecati facere nihil voluptatibus laudantium blanditiis, quidem voluptas a facilis molestiae sapiente repudiandae officia maxime numquam.",
    img: "roadmap3",
    index: "3",
  },
  {
    title: "lorem",
    subTitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum porro placeat, veritatis voluptatum animi obcaecati facere nihil voluptatibus laudantium blanditiis, quidem voluptas a facilis molestiae sapiente repudiandae officia maxime numquam.",
    img: " roadmap4",
    index: "4",
  },
];
