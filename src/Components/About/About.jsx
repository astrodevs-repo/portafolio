import Container from "../Container/Container";
import Section from "../shared/Section/Section";
import videoBackground from "../../../public/video/aboutusvideo.mp4";
import ButtonSimple from "../shared/Buttons/ButtonSimple";

const About = () => {
  return (
    <Section id={"about"}>
      <div className="relative">
        {/* Video de fondo */}
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
          <source src={videoBackground} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>

        {/* Color con opacidad encima del video */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Contenido */}
        <Container>
          <div className="relative z-10 flex flex-col lg:justify-around sm:justify-center items-center lg:h-screen sm:h-full text-center">
            <h1 className="text-3xl text-white mb-6">Quiénes somos</h1>
            <p className="text-lg text-white mb-6">
              ¡Bienvenidos a AstroDevs! No somos solo una agencia de desarrollo web; somos una firma
              integral de soluciones digitales. Nos enorgullece ofrecer servicios que van desde el
              diseño y desarrollo web hasta la gestión y análisis de datos, además de incursionar en
              tecnologías disruptivas como la blockchain. En AstroDevs, transformamos ideas en
              experiencias digitales extraordinarias que impulsan el éxito de nuestros clientes en
              línea.
            </p>
            <div className="w-full flex justify-center lg:mt-[-100px]">
              <ButtonSimple text={"Leer más"} link={"about"} textColor={"white"} />
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default About;
