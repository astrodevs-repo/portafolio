import SubTitle from "../shared/SubTitle";
import Title from "../shared/Title";
import Text from "../shared/Text";
import Inspector from "../shared/Inspector/Inspector";
import Container from "../Container/Container";

import { motion } from "framer-motion";
import { about } from "../../data/Home";

const About = ({ index, onObserver, currentStep }) => {
  return (
    <Inspector index={index} onObserver={onObserver}>
      <motion.section
        id={index}
        initial={{ opacity: 1, color: "rgba(255, 255, 255, 0)", y: 100 }}
        animate={
          index === currentStep ? { opacity: 1, color: "rgba(255, 255, 255, 1)", y: 50 } : { y: 80 }
        }
        transition={{ duration: 1, ease: "easeInOut" }}
        className=" w-full h-fit-content  py-0 sm:py-0 xl:px-20 2xl:px-24 px-5  md:px-10 lg:px-20 "
      >
        <section className={`dark:gap-5 relative pt-10`}>
          <motion.article
            initial={{ opacity: 1, color: "rgba(255, 255, 255, 0)" }}
            animate={
              index === currentStep
                ? { opacity: 1, color: "rgba(255, 255, 255, 1)", rotate: 360 }
                : { y: 80, rotate: 0 }
            }
            transition={{ duration: 1, ease: "easeInOut" }}
            className="bg-blackCeniza border-4 rounded-full w-fit absolute -bottom-14 left-[45%] hidden sm:flex"
          >
            <img src={about?.imgBrain} alt="" className="w-[100px] p-5" />
          </motion.article>

          <section className="bg-gradient-to-t to-gray-500 from-blackCeniza rounded-xl p-10 sm:p-20 flex flex-col justify-center items-center gap-10">
            <Title
              text={about?.title}
              textColor={"text-white"}
              extra={"font-Baskerville text-center"}
            />
            <SubTitle
              text={about?.body}
              textColor={"text-white "}
              w={"w-3/4"}
              extra={"text-center"}
            />
          </section>
        </section>
      </motion.section>

      <section className="bg-transparent sm:bg-white  dark:bg-gray-900 h-fit">
        <Container>
          <section className="h-full w-full bg-white rounded-lg sm:rounded-none dark:bg-gray-900  rounded-b-lg  grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 divide-y-2 sm:divide-y-2 md:divide-y-0 lg:divide-x-2  dark:divide-y-0  grid mt-20 dark:divide-x-0 dark:sm:divide-x-2">
            {about?.articles.map(({ title, content }) => (
              <article
                key={title}
                className="w-full flex flex-col justify-center items-center gap-10 p-10  lg:p-10 "
              >
                <SubTitle text={title} position={"text-center"} />
                <Text content={content} extra={"text-start"} />
              </article>
            ))}
          </section>
        </Container>
      </section>
    </Inspector>
  );
};

export default About;
