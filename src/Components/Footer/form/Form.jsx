import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ButtonSimple from "../../shared/Buttons/ButtonSimple";
import SubTitle from "../../shared/SubTitle";
import { Bounce, toast } from "react-toastify";

const ContactUs = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name1: "",
    name: "",
    email: "",
    email1: "",
    user_referrer: "",
    message: "",
  });
  const [emailMatchError, setEmailMatchError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "email1" || name === "email") {
      setEmailMatchError(formData.email !== formData.email1);
    }
    console.log(value, name);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (formData.email !== formData.email1) {
      setEmailMatchError(true);
      toast.error("Los correos electrónicos no coinciden", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    } else {
      setEmailMatchError(false);
    }
    setIsSent(true);
    emailjs
      .sendForm("service_vnyx5ko", "template_0mirxxd", form.current, {
        publicKey: "R13_8ytNrA1XcoYTj",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSent(false);
          setFormData({
            name1: "",
            name: "",
            email: "",
            email1: "",
            user_referrer: "",
            message: "",
          });
          toast.success("Tu mensaje ha sido enviado satisfactoriamente!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsSent(false);
        }
      );
  };

  return (
    <>
      <section className="w-full flex flex-col gap-10  pt-20 sm:pt-20 md:pt-0" id="contactanosform">
        <SubTitle text={"Contactanos"} textColor={"text-white"} />
        <form ref={form} className="w-full grid grid-cols-1 gap-4">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name="name1"
              placeholder="Escribe tu nombre"
              value={formData.name1}
              onChange={handleChange}
              className="bg-transparent text-white border border-white rounded px-3 py-1 hover:outline-none custom-placeholder"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 w-full ">
            <div className="flex flex-col w-full text-white gap-2">
              <input
                type="text"
                placeholder="Dejanos tu teléfono"
                name="user_referrer"
                value={formData.user_referrer}
                onChange={handleChange}
                className="bg-transparent text-white border border-white rounded px-3 py-1 hover:outline-none custom-placeholder"
                required
              />
            </div>
            <div className="flex flex-col w-full text-white gap-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent text-white border border-white rounded px-3 py-1 hover:outline-none custom-placeholder"
                placeholder="En que país estás"
                required
              />
            </div>
          </div>

          <div className="flex flex-col text-white">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent text-white border border-white rounded px-3 py-1 hover:outline-none custom-placeholder"
              placeholder="Escribe tu email"
              required
            />
          </div>
          <div className="flex flex-col text-white">
            <input
              type="email"
              name="email1"
              value={formData.email1}
              onChange={handleChange}
              className={`bg-transparent text-white border  rounded px-3 py-1 hover:outline-none custom-placeholder`}
              placeholder="Confirme su email"
              required
            />
            {emailMatchError ? (
              <p className="text-red-300">Los correos electrónicos no coinciden</p>
            ) : (
              ""
            )}
          </div>

          <div className="flex flex-col text-white gap-2">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-transparent text-white border border-white rounded px-3 py-2 hover:outline-none custom-placeholder"
              placeholder="Dejanos tu consulta, nos contactaremos contigo de inmediato"
              required
            />
          </div>
        </form>
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
