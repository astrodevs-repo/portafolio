import Section from "../../shared/Section/Section";
import { motion } from "framer-motion";
import Text from "../../shared/Text";
import SubTitle from "../../shared/SubTitle";
function Stepper({ index, title, steps }) {
  return (
    <Section
      title={title}
      index={"comotrabajamos"}
      bg={"bg-transparent"}
      textColor={"text-white"}
      contentPosition={"pt-20 sm:pt-40 "}
    >
      {steps?.map(({ name, content, index }) => (
        <article
          key={name}
          className={`relative flex justify-center ${
            index < steps.length ? "divide-x-4 divide-blackCeniza dark:divide-gray-400" : ""
          }`}
        >
          <section>
            {/** Circle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-blackCeniza dark:bg-gray-400 h-5 w-5 rounded-full absolute -top-5 -left-2"
            ></motion.div>
            {/** Circle */}

            <span
              className={`border-l-5 ${"bg-blackCeniza dark:bg-gray-400 opacity-20 w-10 h-10 absolute -top-[30px] left-[-18px] rounded-full"}`}
            ></span>
          </section>

          <section className="pl-14 pr-5 sm:pl-40 pb-32">
            <motion.section
              initial={{ opacity: 0.5, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 0.5 }}
              className="-mt-10 flex flex-col gap-5"
            >
              <SubTitle text={content.title} extra={"font-bold"} font={"font-Baskerville italic"} />
              <Text content={content.subTitle} />
            </motion.section>
          </section>
        </article>
      ))}
    </Section>
  );
}

export default Stepper;
