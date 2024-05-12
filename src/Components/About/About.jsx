import ButtonSimple from "../shared/Buttons/ButtonSimple";
import ButtonWithoutBorder from "../shared/Buttons/ButtonWithoutBorder";
import Section from "../shared/Section/Section";

const About = () => {
  return (
    <>
      <Section bg={"bg-[#0baeb6]"} title={"Sobre nosotros"} id={"aboutus"}>
        <section className="w-full grid grid-cols-4 ">
          <h1 className="text-white font-extrabold leading-[40px] col-span-3 ">
            Somos una creativa y talentoso equipo de desarrolladores radicados en Mendoza Argentina
          </h1>
          <section className="flex justify-end items-end ">
            <ButtonWithoutBorder text={"Conocenos más"} />
          </section>
        </section>
        <section className="grid grid-cols-2 gap-10">
          <article>
            <p className="text-white text-lg font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi deleniti fugiat veniam
              necessitatibus, voluptas sapiente iste. Odio dolore explicabo distinctio dolores
              sequi. Autem ullam voluptate fugiat vel odit laborum reiciendis. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Animi deleniti fugiat veniam necessitatibus,
              voluptas sapiente iste. Odio dolore explicabo distinctio dolores sequi. Autem ullam
              voluptate fugiat vel odit laborum reiciendis.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Animi deleniti fugiat veniam necessitatibus, voluptas sapiente iste.
              Odio dolore
            </p>
          </article>
          <article>
            <img
              src="https://www.hubgets.com/blog/wp-content/uploads/team-dynamics.png"
              alt=""
              className="rounded-lg"
            />
          </article>
        </section>
      </Section>
      <Section bg={"bg-[#c5fcff]"} title={""} id={"aboutus"}>
        <section className="grid grid-cols-2">
          <section className="w-full ">
            <h1 className="text-[#0baeb6] font-extrabold leading-[40px] ">
              Cualquier cosa acerca de la agencia
            </h1>
            <article>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta earum amet saepe
                iure. Recusandae, deleniti, sequi, adipisci doloribus quia accusantium nemo suscipit
                harum aspernatur aliquam reiciendis officiis! Labore, molestias ducimus? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Nihil, molestiae velit maiores corrupti
                mollitia quod debitis saepe atque autem beatae ullam laudantium, iure iste
                consectetur! Dolorem earum sint molestias facilis.
              </p>
            </article>
          </section>
        </section>
      </Section>
      <Section bg={"bg-[#89b8ffcc]"} title={""} id={"aboutus"}>
        <section className="grid grid-cols-2">
          <section className="w-full ">
            <h1 className="text-[#c5fcff] font-extrabold leading-[40px] ">
              Cualquier cosa acerca de la agencia
            </h1>
          </section>
          <article>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta earum amet saepe iure.
              Recusandae, deleniti, sequi, adipisci doloribus quia accusantium nemo suscipit harum
              aspernatur aliquam reiciendis officiis! Labore, molestias ducimus? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Nihil, molestiae velit maiores corrupti
              mollitia quod debitis saepe atque autem beatae ullam laudantium, iure iste
              consectetur! Dolorem earum sint molestias facilis.
            </p>
            <ButtonSimple text={"contactanos"} border={"border-[#694fff]"} textColor={"#694fff"} />
          </article>
        </section>
      </Section>
    </>
  );
};

export default About;
