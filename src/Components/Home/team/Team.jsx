import CardTeam from "../../CardTeam/CardTeam";
import Container from "../../Container/Container";
import Title from "../../shared/Title";
import yeli from "../../../../public/team/yeli.jpg";
import miguel from "../../../../public/team/miguel.jpg";
import jesus from "../../../../public/team/jesus.jpg";

import ButtonSimple from "../../shared/Buttons/ButtonSimple";

const Team = () => {
  const visibleItems = 3;

  const items = [
    {
      name: "Yelitza Palma",
      img: yeli,
      rol: "Project Manager",
    },
    {
      name: "Miguel Cruz",
      img: miguel,
      rol: "Database",
    },
    {
      name: "Jesus Moreno",
      img: yeli,
      rol: "Product Manager",
    },
    {
      name: "Adrian León",
      img: miguel,
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
    <section id="team" className="bg-white dark:bg-gray-900">
      <Container>
        <Title text={"Nuestro team"} />
        <div className="h-40"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.slice(0, visibleItems).map((item, index) => (
            <CardTeam key={index} {...item} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <ButtonSimple textColor={"gray"} text={"ver mas"} link={"team"} />
        </div>
      </Container>
    </section>
  );
};

export default Team;
