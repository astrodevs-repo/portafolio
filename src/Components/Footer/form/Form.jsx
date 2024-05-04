import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log({ form });
    emailjs
      .sendForm("service_vnyx5ko", "template_0mirxxd", form.current, {
        publicKey: "R13_8ytNrA1XcoYTj",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <h1 className="text-center text-white">Contactanos</h1>
      <section className="grid grid-cols-2 gap-5">
        <article className="w-full flex justify-center items-center">
          <p className="text-center  w-[80%]">
            En <span className="font-bold">Neurons</span>, estamos comprometidos a brindarte
            soluciones digitales innovadoras y de calidad. Ya sea que necesites desarrollar una
            aplicación móvil, un sitio web o cualquier otro proyecto digital, nuestro equipo está
            listo para ayudarte a alcanzar tus objetivos. ¡Contáctanos hoy mismo! Completa nuestro
            formulario y nos pondremos en contacto contigo lo antes posible.
          </p>
        </article>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full grid grid-cols-1 gap-4 sm:grid-cols-1"
        >
          <div className="flex flex-col col-span-2 text-white gap-2">
            <label>Name</label>
            <input
              type="text"
              name="from_name"
              className="bg-transparent border border-white rounded px-3 py-1 col-span-2 sm:col-span-1 "
              required
            />
          </div>
          <div className="flex flex-col col-span-2 text-white gap-2">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="bg-transparent border border-white rounded px-3 py-1 col-span-2 sm:col-span-1"
              required
            />
          </div>
          <div className="flex flex-col col-span-2 text-white gap-2">
            <label>Phone</label>
            <input
              type="number"
              name="user_referrer"
              className="bg-transparent border border-white rounded px-3 py-1 col-span-2 sm:col-span-1"
              required
            />
          </div>
          <div className="flex flex-col col-span-2 text-white gap-2">
            <label>Message</label>
            <textarea
              name="message"
              className="bg-transparent border border-white rounded px-3 py-1 col-span-2"
              required
            />
          </div>

          <div className="w-full justify-center flex ">
            <input
              type="submit"
              value="Send"
              className="py-2.5 cursor-pointer w-full text-sm font-medium text-white focus:outline-none bg-transparent rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default ContactUs;
