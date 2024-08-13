import { useState } from "react";
import Container from "../Container/Container";
import ButtonSimple from "../shared/Buttons/ButtonSimple";
import SubTitle from "../shared/SubTitle";
import Text from "../shared/Text";
import Title from "../shared/Title";
import useForm from "../../hooks/useForm";

const FormAttachment = () => {
  const initialValues = {
    nombreCompleto: "",
    fechaNacimiento: "",
    telefono: "",
    direccion: "",
    pais: "",
    provincia: "",
    Ciudad: "",
    correoElectronico: "",
    titulosObtenidos: "",
    institucionesEducativas: "",
    fechasAsistencia: "",
    especializaciones: "",
    empleosAnteriores: "",
    nombresEmpresas: "",
    puestosOcupados: "",
    responsabilidadesLogros: "",
    fechasEmpleo: "",
    habilidadesTecnicas: "",
    idiomas: "",
    certificaciones: "",
    proyectosImportantes: "",
    logrosDestacados: "",
    disponibilidadTrabajo: "",
    expectativasSalariales: "",
    linkedinperfil: "",
  };

  const inputs = [
    {
      section: "Información Personal",
      fields: [
        {
          title: "Nombre completo",
          index: "nombreCompleto",
          type: "string",
          placeholder: "Ingresa tu nombre completo",
          col: "col-span-2 sm:col-span-1",
        },
        {
          title: "Fecha de nacimiento",
          index: "fechaNacimiento",
          type: "date",
          placeholder: "Ingresa tu fecha de nacimiento",
          col: "col-span-2 sm:col-span-1",
        },
        {
          title: "Teléfono",
          index: "telefono",
          type: "tel",
          placeholder: "Ingresa tu número de teléfono",
          col: "col-span-2 sm:col-span-1",
        },
        {
          title: "Dirección",
          index: "direccion",
          type: "string",
          placeholder: "Ingresa tu dirección",
          col: "col-span-2 sm:col-span-1",
        },
        {
          title: "País",
          index: "pais",
          type: "string",
          placeholder: "Ingresa tu país de residencia",
          col: "col-span-2 sm:col-span-1",
        },
        {
          title: "Provincia",
          index: "provincia",
          type: "string",
          placeholder: "Ingresa tu provincia de residencia",
          col: "col-span-2 sm:col-span-1",
        },
        {
          title: "Ciudad",
          index: "Ciudad",
          type: "string",
          placeholder: "Ingresa tu Ciudad de residencia",
          col: "col-span-2 sm:col-span-1",
        },
        {
          title: "Correo electrónico",
          index: "correoElectronico",
          type: "email",
          placeholder: "Ingresa tu correo electrónico",
          col: "col-span-2 sm:col-span-1",
        },
      ],
    },
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
          col: "col-span-2 sm:col-span-1",
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
    {
      section: "Linkedin",
      fields: [
        {
          title: "Dejanos tu perfil de linkedin",
          index: "linkedinperfil",
          type: "string",
          placeholder: "Ingresa tu perfil de linkedin",
          col: "col-span-2",
        },
      ],
    },
  ];

  const { values, errors, form, loading, handleChange, handleBlur, handleSubmit, sended } =
    useForm(initialValues);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

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

  return (
    <Container>
      <section
        className={`  p-0 sm:p-0 md:px-10 bg-transparent flex flex-col gap-20
        `}
      >
        <Title
          text={"¡Comparte tu currículum con nosotros!"}
          extra={"font-Baskerville text-blackCeniza text-center"}
        />
        <SubTitle
          text={
            "Completa el formulario con tu información personal, educativa y profesional. Asegúrate de adjuntar tu currículum en formato PDF o Word para que podamos evaluar tu experiencia y habilidades. Una vez enviado, nuestro equipo revisará tu currículum y nos pondremos en contacto contigo si tu perfil se ajusta a nuestras necesidades."
          }
          extra={"text-blackCeniza text-center px-0 sm:px-0 md:px-20 lg:px-40"}
        />

        <form ref={form} onSubmit={handleSubmit}>
          <section className={`w-full flex flex-col mb-5 ${loading ? "opacity-50" : ""}`}>
            {inputs.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-8">
                <SubTitle text={section.section} extra="font-bold text-lg mb-4" />
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {section.fields.map((input, inputIndex) => (
                    <div key={inputIndex} className={`flex flex-col gap-2 ${input.col}`}>
                      <Text content={input.title} />
                      <input
                        id={input.index}
                        type={input.type}
                        name={input.index}
                        placeholder={input.placeholder}
                        value={values[input.index] || ""}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`bg-transparent border border-blackCeniza dark:border-white rounded px-3 py-2 focus:outline-none focus:border-blue-500 ${input.col}`}
                        required
                      />
                      {errors[input.index] && <p className="text-red-500">{errors[input.index]}</p>}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <label className="flex flex-col col-span-2 gap-5">
              <Text content={"Currículum (PDF o Word):"} />
              <section className="border border-gray-400 p-4 sm:p-5 md:p-6 lg:p-8">
                <input
                  type="file"
                  accept="application/pdf, image/*"
                  onChange={handleFileChange}
                  className="w-full rounded px-2 py-1"
                />
                {preview && (
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Vista previa:</h4>
                    <img
                      src={preview}
                      alt="Vista previa"
                      className="max-w-full h-auto border border-gray-300 rounded"
                    />
                  </div>
                )}
              </section>
            </label>
          </section>
          <ButtonSimple
            text={"Enviar"}
            bg={"bg-blue-500"}
            w={"w-full sm:w-1/2"}
            type={"submit"}
            loader={loading}
          />
        </form>
      </section>
    </Container>
  );
};

export default FormAttachment;
