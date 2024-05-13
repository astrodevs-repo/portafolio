import yeli from "../../../../public/team/yeli.jpg";
import miguel from "../../../../public/team/miguel.jpg";
import jesus from "../../../../public/team/jesus.jpg";

import ButtonSimple from "../../shared/Buttons/ButtonSimple";
import HorizontalScrollCarousel from "../../shared/Carousel/Carousel";

const Team = () => {
  const items = [
    {
      name: "Yelitza Palma",
      img: yeli,
      rol: "Project Manager",
    },
    {
      name: "Miguel Cruz",
      img: yeli,
      rol: "Database",
    },
    {
      name: "Jesus Moreno",
      img: yeli,
      rol: "Product Manager",
    },
    {
      name: "Adrian León",
      img: yeli,
      rol: "Data Analysis",
    },
    {
      name: "Luisana Acevedo",
      img: miguel,
      rol: "CTO",
    },
    {
      name: "Jesus Moreno",
      img: jesus,
      rol: "Product Manager",
    },
    {
      name: "Yelitza Palma",
      img: yeli,
      rol: "Project Manager",
    },
    {
      name: "Miguel Cruz",
      img: yeli,
      rol: "Database",
    },
    {
      name: "Jesus Moreno",
      img: yeli,
      rol: "Product Manager",
    },
    {
      name: "Adrian León",
      img: yeli,
      rol: "Data Analysis",
    },
    {
      name: "Luisana Acevedo",
      img: miguel,
      rol: "CTO",
    },
    {
      name: "Jesus Moreno",
      img: jesus,
      rol: "Product Manager",
    },
  ];

  return (
    <section id="team" className="bg-white dark:bg-gray-900 px-20 py-20">
      <h1 className="border-b-2">Quienes somos</h1>
      <HorizontalScrollCarousel>
        {items.map((item, index) => (
          <article key={index} className="group relative h-screen w-screen overflow-hidden  ">
            <div
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
              }}
              className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <section className="grid grid-cols-2">
              <img
                src={item.img}
                alt=""
                className=" rounded-r-lg rounded-b-lg h-80 w-80 object-cover"
              />

              <div>
                <p className="text-sm border-2 rounded-lg px-2 py-1 mt-1 leading-none font-extrabold text-gray-600 w-fit">
                  {item.name}
                </p>
                <span className="text-xs mt-0 leading-none px-2 text-black">
                  Yelitza lidera nuestro equipo con una combinación de visión estratégica y
                  habilidades organizativas excepcionales. Es la maestra detrás de la planificación
                  y ejecución de nuestros proyectos, asegurando que cada paso se lleve a cabo con
                  precisión y eficiencia. Su capacidad para coordinar recursos, establecer metas
                  claras y mantener la comunicación fluida dentro del equipo es fundamental para
                  nuestro éxito. Yelitza es una líder inspiradora que motiva a todos a dar lo mejor
                  de sí mismos, manteniendo siempre el enfoque en los objetivos del proyecto y la
                  satisfacción del cliente. Su dedicación y compromiso son ejemplares, y su enfoque
                  en la excelencia impulsa a nuestro equipo hacia adelante en cada desafío que
                  enfrentamos.
                </span>
              </div>
            </section>
          </article>
        ))}
      </HorizontalScrollCarousel>
      <section className="flex justify-center mt-8">
        <ButtonSimple textColor={"gray"} text={"ver mas"} link={"team"} />
      </section>
    </section>
  );
};

export default Team;
