import { useState } from "react";
import Title from "../../../Components/shared/Title";
import SubTitle from "../../shared/SubTitle";

const FooterForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    pais: "",
    ciudad: "",
    empresa: "",
    tipoProyecto: "",
    rangoInversion: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario a tu backend o hacer lo que necesites con ellos
    console.log(formData);
  };

  // Array que contiene la cantidad de inputs que deseas renderizar
  const inputs = [
    { id: "nombre", label: "Tu nombre*", type: "text" },
    { id: "telefono", label: "Teléfono*", type: "text" },
    { id: "correo", label: "Tu correo electrónico*", type: "email" },
    { id: "mensaje", label: "Tu mensaje*", type: "textarea" },
  ];

  return (
    <div className="py-8 ">
      <Title text={"TELL US"} />
      <SubTitle textColor={"white"} text={"What we can help you"} />
      <div className="lg:h-20 sm:h-0"></div>
      <div className="container mx-auto grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="w-[90%] py-20 text-white">
          <p>
            En este código, he agregado la clase col-span-2 a cada input dentro del formulario. Esto
            hará que los inputs ocupen toda la fila en dispositivos móviles. Además, he agregado la
            clase sm:col-span-1 para asegurar que en pantallas más grandes los inputs vuelvan a
            ocupar solo una columna
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full grid grid-cols-1 gap-4 sm:grid-cols-1">
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
        </form>
      </div>
    </div>
  );
};

export default FooterForm;
