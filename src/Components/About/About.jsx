import SubTitle from "../shared/SubTitle";
import Title from "../shared/Title";
import Text from "../shared/Text";
import Inspector from "../shared/Inspector/Inspector";
import Section from "../shared/Section/Section";

const About = ({ index, onObserver }) => {
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
      <Section extra={"lg:mt-[-350px]"}>
        <section className="grid grid-cols-1">
          <section className="h-full w-full bg-gradient-to-r from-slate-600 to-blackCeniza  rounded-t-[50px] py-10 px-10 lg:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <article className="flex flex-col gap-5 justify-center pt-5 sm:p-20">
              <Title text={"Quienes somos"} textColor={"text-white"} extra={"italic"} />
              <SubTitle
                text={
                  "No somos solo una agencia de desarrollo web; somos una firma integral de soluciones digitales."
                }
                textColor={"text-[#2FE3CE]"}
              />
              <Text
                content={
                  "Nos enorgullece ofrecer servicios que van desde el diseño y desarrollo web hasta la gestión y análisis de datos, además de incursionar en tecnologías disruptivas como la blockchain. En Neurons, transformamos ideas en experiencias digitales extraordinarias que impulsan el éxito de nuestros clientes en línea."
                }
                textColor={"text-white"}
              />
            </article>
            <img src="/public/Logo.svg" alt="" className="w-full hidden sm:flex md:hidden" />
          </section>
          <section className="h-full w-full bg-white rounded-b-lg grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 divide-y-2 sm:divide-y-2 lg:divide-x-2 border-2">
            {articles.map(({ title, content }) => (
              <article
                key={title}
                className="w-full flex flex-col justify-center items-center gap-10 p-10 lg:p-10"
              >
                <SubTitle text={title} position={"text-center"} />
                <Text content={content} extra={"text-justify"} />
              </article>
            ))}
          </section>
        </section>
      </Section>
    </Inspector>
  );
};

export default About;
