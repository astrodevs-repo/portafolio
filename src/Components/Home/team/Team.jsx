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
      <section className="grid grid-cols-3 gap-5">
        <h1 className="text-lg w-full">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </h1>
        <p className="text-sm col-span-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repellat eum perferendis iusto
          iste blanditiis dolores sequi reprehenderit, laboriosam nisi quas facere facilis nostrum?
          Dolor expedita sunt facere dignissimos temporibus!
        </p>
      </section>

      <section className="grid grid-cols-4 gap-5">
        {items.slice(0, visibleItems).map((item, index) => (
          <article key={index}>
            <img
              src={item.img}
              alt=""
              className=" rounded-r-lg rounded-b-lg h-80 w-80 object-cover"
            />

            <div>
              <p className="text-sm border-2 rounded-lg px-2 py-1 mt-1 leading-none font-extrabold text-gray-600 w-fit">
                {item.name}
              </p>
              <span className="text-xs mt-0 leading-none px-2">{item.rol}</span>
            </div>
          </article>
        ))}
        <article className="bg-[#2fe3ce] rounded-r-lg rounded-b-lg flex justify-start flex-wrap leading-10 text-lg p-2">
          {"Lorem ipsum dolor, sit amet consectetur et.".split("").map((letter, index) => (
            <h1 key={index} className="text-white">
              {letter}
            </h1>
          ))}
        </article>
      </section>
      <section className="grid grid-cols-4 gap-5">
        {items.slice(0, 4).map((item, index) => (
          <article key={index} className="py-5">
            <img src={item.img} alt="" className=" rounded-r-lg rounded-b-lg h-80 object-cover" />

            <div>
              <p className="text-sm border-2 rounded-lg px-2 py-1 mt-1 leading-none font-extrabold text-gray-600">
                {item.name}
              </p>
              <span className="text-xs mt-0 leading-none px-2">{item.rol}</span>
            </div>
          </article>
        ))}
      </section>
      <section className="flex justify-center mt-8">
        <ButtonSimple textColor={"gray"} text={"ver mas"} link={"team"} />
      </section>
    </section>
  );
};

export default Team;
