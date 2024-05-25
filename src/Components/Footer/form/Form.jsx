import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ButtonSimple from "../../shared/Buttons/ButtonSimple";

const ContactUs = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const initialFormData = {
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
      <section className="w-full">
        <form ref={form} className="w-full grid grid-cols-1 gap-4 sm:grid-cols-1">
          <div className="flex flex-col col-span-2 text-white gap-2">
            <label>Name</label>
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
            <label>Phone</label>
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
            <label>Message</label>
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
          text={"Send"}
          w={"w-full"}
          display={"center"}
          loader={isSent}
          bg={"bg-[#89b8ffcc]"}
        />
      </section>
    </>
  );
};

export default ContactUs;
