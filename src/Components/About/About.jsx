import SubTitle from "../shared/SubTitle";
import Title from "../shared/Title";
import Text from "../shared/Text";
import Inspector from "../shared/Inspector/Inspector";
import { motion } from "framer-motion";
import Container from "../Container/Container";

const About = ({ index, onObserver, currentStep }) => {
  const articles = [
    {
      title: "Visión",
      content:
        "En Neurons, visualizamos un presente donde la innovación digital es accesible y poderosa para todos. Nos esforzamos por ser líderes en la transformación digital, creando soluciones que no solo resuelven desafíos, sino que también inspiran y conectan.",
    },
    {
      title: "Misión",
      content:
        "Nuestra misión es impulsar el éxito de nuestros clientes en el mundo digital mediante la creación de experiencias innovadoras y estratégicas. Desde el desarrollo web hasta la analítica de datos, nos esforzamos por comprender las necesidades únicas de cada cliente y ofrecer soluciones personalizadas ",
    },
    {
      title: "¿Por qué eligirnos?",
      content:
        "Elegir Neurons significa optar por un socio comprometido con la excelencia y la innovación continua. Estamos aquí para transformar su visión digital en realidad, asegurando que cada interacción con nosotros supere sus expectativas y contribuya al éxito sostenible de su negocio. ",
    },
  ];
  return (
    <Inspector index={index} onObserver={onObserver}>
      <motion.section
        id={index}
        initial={{ opacity: 1, color: "rgba(255, 255, 255, 0)", y: 100 }}
        animate={
          index === currentStep ? { opacity: 1, color: "rgba(255, 255, 255, 1)", y: 50 } : { y: 80 }
        }
        transition={{ duration: 1, ease: "easeInOut" }}
        className=" w-full h-fit-content  py-10 sm:py-0 xl:px-20 2xl:px-24 px-5  md:px-10 lg:px-20 "
      >
        <section className="h-10"></section>
        <section className={`grid grid-cols-1 dark:gap-5 `}>
          <section className="h-full w-full bg-gradient-to-r bg-opacity-10 from-slate-600 to-blackCeniza dark:from-blackCeniza dark:to-gray-900  rounded-t-[50px] dark:rounded-b-[50px] rounded-b-[50px] py-10 px-10 lg:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <article className="flex flex-col gap-5 justify-center pt-5 sm:p-20 md:px-20">
              <Title
                text={"Transformando Ideas en Experiencias Digitales Extraordinarias"}
                textColor={"text-white"}
                extra={"font-Baskerville"}
              />
              {/* <SubTitle
                text={
                  "No somos solo una agencia de desarrollo web; somos una firma integral de soluciones digitales."
                }
                textColor={"text-white"}
              /> */}
            </article>
            <article className="flex flex-col gap-5 justify-center items-center pt-5 sm:p-20 md:p-20">
              {/* <img
                src={logoBrain}
                alt=""
                className="w-[150px] hidden sm:flex md:hidden lg:flex opacity-25"
              /> */}
              <SubTitle
                text={
                  "Nos enorgullece ofrecer servicios que van desde el diseño y desarrollo web hasta la gestión y análisis de datos, además de incursionar en tecnologías disruptivas como la Blockchain. En Neurons, transformamos ideas en experiencias digitales extraordinarias que impulsan el éxito de nuestros clientes en línea."
                }
                textColor={"text-white"}
              />
            </article>
          </section>
        </section>
      </motion.section>

      <section className="bg-white dark:bg-gray-900 h-fit">
        <Container>
          <section className="h-full w-full bg-white  dark:bg-gray-900  rounded-b-lg  grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 divide-y-2 sm:divide-y-2 md:divide-y-0 lg:divide-x-2  dark:divide-y-0  grid mt-20 dark:divide-x-2">
            {articles.map(({ title, content }) => (
              <article
                key={title}
                className="w-full flex flex-col justify-center items-center gap-10 p-10  lg:p-10  "
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
