import Title from "../../../Components/shared/Title";
import SubTitle from "../../shared/SubTitle";
import Section from "../../shared/Section/Section";
import ButtonGrandient from "../../shared/Buttons/ButtonGrandient";

const FooterForm = () => {
  return (
    <Section id={"footer"}>
      <div className="py-8 ">
        <Title text={"TELL US"} />
        <SubTitle textColor={"white"} text={"What we can help you"} />
        <div className="lg:h-20 sm:h-0"></div>
        <div className="container flex flex-col sm:grid-cols-2">
          <div className="w-[100%] py-10  text-white flex justify-center">
            <p className="text-center w-full px-5 sm:w-1/2">
              En <span className="font-bold">Neurons</span>, estamos comprometidos a brindarte
              soluciones digitales innovadoras y de calidad. Ya sea que necesites desarrollar una
              aplicación móvil, un sitio web o cualquier otro proyecto digital, nuestro equipo está
              listo para ayudarte a alcanzar tus objetivos. ¡Contáctanos hoy mismo! Completa nuestro
              formulario y nos pondremos en contacto contigo lo antes posible.
            </p>
          </div>
          {/* <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 gap-4 sm:grid-cols-1">
            {inputs.map((input, index) => (
              <div key={index} className="flex flex-col col-span-2 text-white">
                <label htmlFor={input.id}>{input.label}</label>
                {input.type === "textarea" ? (
                  <textarea
                    id={input.id}
                    name={input.id}
                    value={formData[input.id]}
                    onChange={handleChange}
                    rows="4"
                    className="bg-transparent border border-white rounded px-3 py-1 col-span-2"
                    required
                  ></textarea>
                ) : (
                  <input
                    type={input.type}
                    id={input.id}
                    name={input.id}
                    value={formData[input.id]}
                    onChange={handleChange}
                    className="bg-transparent border border-white rounded px-3 py-1 col-span-2 sm:col-span-1"
                    required
                  />
                )}
              </div>
            ))}
            <div className="flex flex-col col-span-2 ">
              <button
                type="submit"
                className="py-2.5 w-full text-sm font-medium text-white focus:outline-none bg-transparent rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Enviar
              </button>
            </div>
          </form> */}
          <div className="w-full  flex justify-center items-center pt-10">
            {" "}
            <ButtonGrandient
              text={"  Contactanos  "}
              id={"https://forms.office.com/r/LA0vfN3Rd9"}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FooterForm;
