import { useEffect, useState } from "react";
import Container from "../../Components/Container/Container";
import SubTitle from "../../Components/shared/SubTitle";
import Text from "../../Components/shared/Text";
import MovingText from "../../Components/shared/velocity/Velocity";
import { itemsTeam } from "../../data/Home";
import Title from "../../Components/shared/Title";
import ButtonSimple from "../../Components/shared/Buttons/ButtonSimple";
import { motion, useAnimation } from "framer-motion";
import NavbarGoBack from "../../../NavbarGoBack";
const TeamAttachment = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
      className="flex flex-col gap-5 z-40"
    >
      <NavbarGoBack />
      <Container>
        <MovingTextJ
          items={[
            { name: "Innovación", color: "bg-red-500" },
            { name: "Compromiso", color: "bg-yellow-500" },
            { name: "Sostenibilidad", color: "bg-green-500" },
            { name: "Excelencia", color: "bg-blue-500" },
            { name: "Visión Global", color: "bg-pink-500" },
          ]}
          extra="py-5"
          transitionTime={8000} // Adjust the transition time as needed
        />
        <h1 className="flex flex-wrap sm:px-0 justify-center text-center items-center gap-2 text-4xl sm:text-lg md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-Baskerville">
          Queremos conocerte
          <br />
        </h1>
        <SubTitle
          text={
            "Neurons genera un plan de acción para establecer plazos, aciertos y desaciertos de tus requerimientos. Elaboramos un diseño detallado del sistema, incluyendo arquitectura, componentes, interfaces y algoritmos. Este diseño es revisado y aprobado antes de avanzar "
          }
          extra={"text-center"}
        />
      </Container>
      <MovingText
        right={"0%"}
        left={"-100%"}
        items={itemsTeam}
        extra={"max-w-[400px] min-w-[400px] max-h-[500px] min-h-[500px] rounded-lg"}
      />
      <FormAttachment />
    </motion.section>
  );
};

export default TeamAttachment;

const MovingTextJ = ({ items, extra, transitionTime }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, transitionTime);

    return () => clearInterval(interval);
  }, [items.length, transitionTime]);

  useEffect(() => {
    controls.start({
      transition: { duration: transitionTime / 2000, ease: "easeInOut" },
    });
  }, [currentIndex, controls, transitionTime]);

  return (
    <div className={`relative overflow-hidden ${extra}`}>
      <motion.section
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold bg-opacity-40 px-5 py-2 rounded-full ${items[currentIndex].color}`}
        animate={controls}
      >
        <Text content={items[currentIndex].name} extra={""} />
      </motion.section>
    </div>
  );
};
const FormAttachment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const inputs = [
    {
      section: "Información Personal",
      fields: [
        {
          title: "Nombre completo",
          index: "nombreCompleto",
          type: "string",
          placeholder: "Ingresa tu nombre completo",
          col: "col-span-2",
        },
        {
          title: "Fecha de nacimiento",
          index: "fechaNacimiento",
          type: "date",
          placeholder: "Ingresa tu fecha de nacimiento",
          col: "col-span-1",
        },
        {
          title: "Teléfono",
          index: "telefono",
          type: "tel",
          placeholder: "Ingresa tu número de teléfono",
          col: "col-span-1",
        },
        {
          title: "Dirección",
          index: "direccion",
          type: "string",
          placeholder: "Ingresa tu dirección",
          col: "col-span-2",
        },
        {
          title: "País",
          index: "pais",
          type: "string",
          placeholder: "Ingresa tu pais de residencia",
          col: "col-span-2",
        },
        {
          title: "Provincia",
          index: "provincia",
          type: "string",
          placeholder: "Ingresa tu provincia de residencia",
          col: "col-span-2",
        },
        {
          title: "Ciudad",
          index: "Ciudad",
          type: "string",
          placeholder: "Ingresa tu Ciudad de residencia",
          col: "col-span-2",
        },

        {
          title: "Correo electrónico",
          index: "correoElectronico",
          type: "email",
          placeholder: "Ingresa tu correo electrónico",
          col: "col-span-2",
        },
      ],
    },
    // Educación
    {
      section: "Educación",
      fields: [
        {
          title: "Títulos obtenidos",
          index: "titulosObtenidos",
          type: "string",
          placeholder: "Ingresa tus títulos obtenidos",
          col: "col-span-2",
        },
        {
          title: "Instituciones educativas",
          index: "institucionesEducativas",
          type: "string",
          placeholder: "Ingresa tus instituciones educativas",
          col: "col-span-2",
        },
        {
          title: "Fechas de asistencia",
          index: "fechasAsistencia",
          type: "string",
          placeholder: "Ingresa tus fechas de asistencia",
          col: "col-span-1",
        },
        {
          title: "Especializaciones o áreas de estudio",
          index: "especializaciones",
          type: "string",
          placeholder: "Ingresa tus especializaciones",
          col: "col-span-2",
        },
      ],
    },
    // Experiencia Laboral
    {
      section: "Experiencia Laboral",
      fields: [
        {
          title: "Empleos anteriores",
          index: "empleosAnteriores",
          type: "string",
          placeholder: "Ingresa tus empleos anteriores",
          col: "col-span-2",
        },
        {
          title: "Nombres de las empresas",
          index: "nombresEmpresas",
          type: "string",
          placeholder: "Ingresa los nombres de las empresas",
          col: "col-span-2",
        },
        {
          title: "Puestos ocupados",
          index: "puestosOcupados",
          type: "string",
          placeholder: "Ingresa los puestos ocupados",
          col: "col-span-2",
        },
        {
          title: "Responsabilidades y logros",
          index: "responsabilidadesLogros",
          type: "string",
          placeholder: "Describe tus responsabilidades y logros",
          col: "col-span-2",
        },
        {
          title: "Fechas de empleo",
          index: "fechasEmpleo",
          type: "string",
          placeholder: "Ingresa las fechas de empleo",
          col: "col-span-1",
        },
      ],
    },
    // Habilidades
    {
      section: "Habilidades",
      fields: [
        {
          title: "Habilidades técnicas",
          index: "habilidadesTecnicas",
          type: "string",
          placeholder: "Ingresa tus habilidades técnicas",
          col: "col-span-2",
        },
        {
          title: "Idiomas",
          index: "idiomas",
          type: "string",
          placeholder: "Ingresa los idiomas que hablas",
          col: "col-span-2",
        },
        {
          title: "Certificaciones relevantes",
          index: "certificaciones",
          type: "string",
          placeholder: "Ingresa tus certificaciones relevantes",
          col: "col-span-2",
        },
      ],
    },
    // Proyectos y Logros
    {
      section: "Proyectos y Logros",
      fields: [
        {
          title: "Descripción de proyectos importantes",
          index: "proyectosImportantes",
          type: "string",
          placeholder: "Describe tus proyectos importantes",
          col: "col-span-2",
        },
        {
          title: "Logros destacados en su carrera",
          index: "logrosDestacados",
          type: "string",
          placeholder: "Describe tus logros destacados",
          col: "col-span-2",
        },
      ],
    },

    // Preguntas Específicas
    {
      section: "Preguntas Específicas",
      fields: [
        {
          title: "Disponibilidad para comenzar a trabajar",
          index: "disponibilidadTrabajo",
          type: "string",
          placeholder: "Ingresa tu disponibilidad para comenzar a trabajar",
          col: "col-span-2",
        },
        {
          title: "Expectativas salariales",
          index: "expectativasSalariales",
          type: "string",
          placeholder: "Ingresa tus expectativas salariales",
          col: "col-span-2",
        },
      ],
    },
    // Consentimientos y Declaraciones
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Generar una vista previa si es una imagen
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <section className="p-6  bg-transparent flex flex-col gap-10 ">
        <Title text={"Envía tu currículum"} extra={"font-Baskerville text-blackCeniza"} />
        <SubTitle text={"Envía tu currículum"} extra={"text-blackCeniza"} />

        <form onSubmit={handleSubmit} className=" flex flex-col">
          {inputs.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-8">
              <SubTitle text={section.section} extra="font-bold text-lg mb-4" />
              <div className="grid grid-cols-4 gap-4">
                {section.fields.map((input, inputIndex) => (
                  <div key={inputIndex} className={`flex flex-col gap-2 ${input.col}`}>
                    <Text content={input.title} />
                    <input
                      id={input.index}
                      type={input.type}
                      name={input.index}
                      placeholder={input.placeholder}
                      value={formData[input.index] || ""}
                      onChange={handleChange}
                      className={`bg-transparent  border border-blackCeniza dark:border-white rounded px-3 py-2 focus:outline-none focus:border-blue-500 ${input.col}`}
                      required
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}

          <label className="flex flex-col col-span-2 gap-5">
            <Text content={"Currículum (PDF o Word):"} />
            <section className="border border-gray-400 p-10">
              <input type="file" accept="image/*,application/pdf" onChange={handleFileChange} />
              {preview && (
                <div>
                  <h4>Vista previa de la imagen:</h4>
                  <img src={preview} alt="Vista previa" style={{ maxWidth: "200px" }} />
                </div>
              )}
            </section>
          </label>
        </form>
        <ButtonSimple text={"enviar"} bg={"bg-blue-500"} w={"w-1/2"} />
      </section>
    </Container>
  );
};
