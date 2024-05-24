import Section from "../shared/Section/Section";
import SubTitle from "../shared/SubTitle";
import Title from "../shared/Title";
import Text from "../shared/Text";

const About = () => {
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
      title: "¿Por qué eligir a Neurons como su socio digital?",
      content:
        "Elegir Neurons significa optar por un socio comprometido con la excelencia y la innovación continua. Estamos aquí para transformar su visión digital en realidad, asegurando que cada interacción con nosotros supere sus expectativas y contribuya al éxito sostenible de su negocio. ",
    },
  ];
  return (
    <section title={""} className="bg-transparent px-2 sm:px-2 md:px-5 lg:px-10 py-20">
      <section className="grid grid-cols-1">
        <section className="h-full w-full bg-blackCeniza  rounded-t-[50px] py-10 px-10 lg:p-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <article>
            <Title text={"Quienes somos"} textColor={"text-white"} />
            <SubTitle
              text={
                "No somos solo una agencia de desarrollo web; una firma integral de soluciones digitales."
              }
              textColor={"text-white"}
            />
            <Text
              content={
                "Nos enorgullece ofrecer servicios que van desde el diseño y desarrollo web hasta la gestión y análisis de datos, además de incursionar en tecnologías disruptivas como la blockchain. En Neurons, transformamos ideas en experiencias digitales extraordinarias que impulsan el éxito de nuestros clientes en línea."
              }
              textColor={"text-white"}
            />
          </article>
        </section>
        <section className="h-full w-full bg-white rounded-b-lg grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 divide-y-2 sm:divide-y-2 lg:divide-x-2 border-2">
          {articles.map(({ title, content }) => (
            <article
              key={title}
              className="w-full flex flex-col justify-center items-center gap-10 p-5 lg:p-20"
            >
              <Text content={title} />
              <p className="text-xl font-Poppins">{content}</p>
            </article>
          ))}
        </section>
      </section>
    </section>
  );
};

export default About;
