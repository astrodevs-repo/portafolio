import ButtonWithoutBorder from "../shared/Buttons/ButtonWithoutBorder";
import Section from "../shared/Section/Section";
import SubTitle from "../shared/SubTitle";
import Title from "../shared/Title";

const About = () => {
  return (
    <Section title={"About us"} className="bg-transparent">
      <section className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4">
        <Title
          extra={"col-span-3"}
          textColor={"text-[#694fff]"}
          text={
            "Somos una creativa y talentoso equipo de desarrolladores radicados en Mendoza Argentina"
          }
        />
        <section className=" justify-end items-end hidden sm:flex">
          <ButtonWithoutBorder text={"Conocenos más"} textColor={"#694fff"} />
        </section>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        <SubTitle
          text={
            "lorem Las comillas invertidas «`» son interpretadas como sustitución de comandos , es decir, los comandos que estén dentro serán pasados al comando que lo precede."
          }
        />

        <img
          src="https://www.hubgets.com/blog/wp-content/uploads/team-dynamics.png"
          alt=""
          className="rounded-lg"
        />
      </section>
    </Section>
  );
};

export default About;
