import Container from "../Container/Container";
import Section from "../shared/Section/Section";
import videoBackground from "../../../public/video/aboutusvideo.mp4";
import ButtonSimple from "../shared/Buttons/ButtonSimple";

const About = () => {
  return (
    <section id={"about"} className="grid grid-cols-3 gap-5 py-10 px-20">
      <article className="bg-[#31add5] justify-center items-center flex flex-col gap-5 rounded-xl px-5 py-5">
        <h1 className="text-center">Quiénes somos</h1>
        <p className="z-2">
          ¡Bienvenidos a AstroDevs! No somos solo una agencia de desarrollo web; somos una firma
          integral de soluciones digitales. Nos enorgullece ofrecer servicios que van desde el
          diseño y desarrollo web hasta la gestión y análisis de datos, además de incursionar en
          tecnologías disruptivas como la blockchain. En AstroDevs, transformamos ideas en
          experiencias digitales extraordinarias que impulsan el éxito de nuestros clientes en
          línea.
        </p>

        <ButtonSimple text={"Leer más"} link={"about"} textColor={"white"} />
      </article>
      <article className="bg-[#31add5] justify-center items-center flex flex-col gap-5 rounded-xl px-5 py-5">
        <h1 className="text-center">Misión</h1>
        <p className="z-2">
          En Neurons nos dedicamos a transformar los desafíos digitales en oportunidades
          emocionantes. Nuestra misión es crear experiencias digitales innovadoras y estratégicas
          que impulsen el crecimiento y la visibilidad en línea de nuestros clientes. Desde el
          desarrollo web hasta la analítica de datos, nos comprometemos a superar las expectativas y
          a entregar resultados excepcionales.
        </p>

        <ButtonSimple text={"Leer más"} link={"about"} textColor={"white"} />
      </article>
      <article className="bg-[#31add5] justify-center items-center flex flex-col gap-5 rounded-xl px-5 py-5">
        <h1 className="text-center text-white">Quiénes somos</h1>
        <p className="z-2">
          ¡Bienvenidos a AstroDevs! No somos solo una agencia de desarrollo web; somos una firma
          integral de soluciones digitales. Nos enorgullece ofrecer servicios que van desde el
          diseño y desarrollo web hasta la gestión y análisis de datos, además de incursionar en
          tecnologías disruptivas como la blockchain. En AstroDevs, transformamos ideas en
          experiencias digitales extraordinarias que impulsan el éxito de nuestros clientes en
          línea.
        </p>

        <ButtonSimple text={"Leer más"} link={"about"} textColor={"white"} />
      </article>
    </section>
  );
};

export default About;
