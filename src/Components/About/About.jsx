import ButtonWithoutBorder from "../shared/Buttons/ButtonWithoutBorder";
import Section from "../shared/Section/Section";
import SubTitle from "../shared/SubTitle";
import Title from "../shared/Title";

const About = () => {
  return (
    <>
      <Section bg={"bg-[#89b8ffcc]"} title={"Sobre nosotros"} id={"aboutus"}>
        <section className="w-full grid grid-cols-4 ">
          <Title
            extra={"col-span-3"}
            textColor={"text-[#ffffff]"}
            text={
              "Somos una creativa y talentoso equipo de desarrolladores radicados en Mendoza Argentina"
            }
          />
          <section className="flex justify-end items-end ">
            <ButtonWithoutBorder text={"Conocenos más"} />
          </section>
        </section>
        <section className="grid grid-cols-2 gap-10">
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
      {/* <Section bg={"bg-[#c5fcff]"} title={""} id={"aboutus"}>
        <section className="grid grid-cols-2">
          <article>
            <Title textColor={"text-[#0baeb6]"} text={"Somos una creativa y n Mendoza Argentina"} />
            <SubTitle
              text={
                "lorem Las comillas invertidas «`» son interpretadas como sustitución de comandos , es decir, los comandos que estén dentro serán pasados al comando que lo precede."
              }
            />
          </article>
        </section>
      </Section> */}

      {/* <Section bg={"bg-[#89b8ffcc]"} title={""} id={"aboutus"}>
        <section className="grid grid-cols-2 gap-10">
          <Title
            textColor={"text-[#c5fcff]"}
            text={
              "Somos una creativa y talentoso equipo de desarrolladores radicados en Mendoza Argentina"
            }
          />
          <article className="flex flex-col justify-between">
            <SubTitle
              text={
                "lorem Las comillas invertidas «`» son interpretadas como sustitución de comandos , es decir, los comandos que estén dentro serán pasados al comando que lo precede."
              }
            />

            <Modal title={"Contactanos"}>
              <ContactUs />
            </Modal>
          </article>
        </section>
      </Section> */}
    </>
  );
};

export default About;
