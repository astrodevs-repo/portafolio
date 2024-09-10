import ButtonSimple from "../../shared/Buttons/ButtonSimple";

import useForm from "../../../hooks/useForm";

const ContactUs = () => {
  const { handleChange, handleBlur, handleSubmit, loading, values, errors, isSubmitting, form } =
    useForm({
      name1: "",
      name: "",
      email: "",
      email1: "",
      user_referrer: "",
      message: "",
    });

  return (
    <section className="w-full flex flex-col gap-10 pt-20 sm:pt-20 md:pt-0" id="contactanosform">
      <form ref={form} onSubmit={handleSubmit}>
        <section className={`w-full grid grid-cols-1 gap-4 mb-5 ${loading ? "opacity-50" : ""}`}>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name="name1"
              placeholder="Escribe tu nombre"
              value={values.name1}
              onChange={handleChange}
              onBlur={handleBlur}
              className="bg-transparent text-blackCeniza dark:text-white border border-blackCeniza dark:border-white rounded px-3 py-1 hover:outline-none custom-placeholder"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="flex flex-col w-full text-blackCeniza dark:text-white gap-2">
              <input
                type="text"
                placeholder="Dejanos tu teléfono"
                name="user_referrer"
                value={values.user_referrer}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-transparent text-blackCeniza dark:text-white border border-blackCeniza dark:border-white rounded px-3 py-1 hover:outline-none custom-placeholder"
                required
              />
            </div>
            <div className="flex flex-col w-full text-blackCeniza dark:text-white gap-2">
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="bg-transparent text-blackCeniza dark:text-white border border-blackCeniza dark:border-white rounded px-3 py-1 hover:outline-none custom-placeholder"
                placeholder="En que país estás"
                required
              />
            </div>
          </div>

          <div className="flex flex-col text-blackCeniza dark:text-white">
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="bg-transparent text-blackCeniza dark:text-white border border-blackCeniza dark:border-white rounded px-3 py-1 hover:outline-none custom-placeholder"
              placeholder="Escribe tu email"
              required
            />
          </div>
          <div className="flex flex-col text-blackCeniza dark:text-white">
            <input
              type="email"
              name="email1"
              value={values.email1}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`bg-transparent text-blackCeniza dark:text-white border border-blackCeniza dark:border-white  rounded px-3 py-1 hover:outline-none custom-placeholder`}
              placeholder="Confirme su email"
              required
            />
            {errors.email1 && <p className="text-red-300">{errors.email1}</p>}
          </div>

          <div className="flex flex-col text-blackCeniza dark:text-white gap-2">
            <textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className="bg-transparent text-blackCeniza dark:text-white border border-blackCeniza dark:border-white rounded px-3 py-2 hover:outline-none custom-placeholder"
              placeholder="Dejanos tu consulta, nos contactaremos contigo de inmediato"
              required
            />
          </div>
        </section>

        <ButtonSimple
          type="submit"
          text={"Enviar"}
          w={"w-full"}
          display={"center"}
          loader={loading}
          bg={"bg-Chicle"}
          border={"border-[#28ae9e] border-2"}
          hover={"hover:bg-[#28ae9e]"}
          textColor={"balck"}
          disabled={isSubmitting}
        />
      </form>
    </section>
  );
};

export default ContactUs;
