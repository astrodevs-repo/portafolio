import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ButtonSimple from "../../shared/Buttons/ButtonSimple";

import SubTitle from "../../shared/SubTitle";

const ContactUs = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const initialFormData = {
    name1: "",
    name: "",

    email: "",
    user_referrer: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSent(true);
    emailjs
      .sendForm("service_vnyx5ko", "template_0mirxxd", form.current, {
        publicKey: "R13_8ytNrA1XcoYTj",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSent(false);
          setFormData(initialFormData);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSent(false);
        }
      );
  };

  return (
    <>
      <section className="w-full flex flex-col gap-10 mt-20">
        <SubTitle text={"Contactanos"} textColor={"text-white"} />
        <form ref={form} className="w-full grid grid-cols-1 gap-4 sm:grid-cols-1">
          <div className="flex flex-col col-span-2 text-white gap-2">
            <label>Nombre</label>
            <input
              type="text"
              name="name1"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent border border-white rounded px-3 py-1 col-span-2 sm:col-span-1 hover:outline-none"
              required
            />
          </div>

          <div className="flex flex-col col-span-2 text-white gap-2">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border border-white rounded px-3 py-1 col-span-2 sm:col-span-1 hover:outline-none"
              required
            />
          </div>
          <div className="flex flex-col col-span-2 text-white gap-2">
            <label>Teléfono</label>
            <input
              type="number"
              name="user_referrer"
              value={formData.user_referrer}
              onChange={handleChange}
              className="bg-transparent border border-white rounded px-3 py-1 col-span-2 sm:col-span-1 hover:outline-none"
              required
            />
          </div>
          <div className="flex flex-col col-span-2 text-white gap-2">
            <label>País</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent border border-white rounded px-3 py-1 col-span-2 sm:col-span-1 hover:outline-none"
              required
            />
          </div>
          <div className="flex flex-col col-span-2 text-white gap-2">
            <label>Mensaje</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-transparent border border-white rounded px-3 py-1 col-span-2 hover:outline-none"
              required
            />
          </div>
        </form>
        <br />
        <ButtonSimple
          func={sendEmail}
          text={"Enviar"}
          w={"w-full"}
          display={"center"}
          loader={isSent}
          bg={"bg-Chicle"}
          border={"border-[#28ae9e] border-2"}
          hover={"hover:bg-[#28ae9e]"}
          textColor={"balck"}
        />
      </section>
    </>
  );
};

export default ContactUs;
