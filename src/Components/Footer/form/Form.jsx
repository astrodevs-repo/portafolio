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
      <section className="">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full grid grid-cols-1 gap-4 sm:grid-cols-1"
        >
          <div className="flex flex-col col-span-2 text-[#4b4b4b] gap-2">
            <label>Name</label>
            <input
              type="text"
              name="x|"
              className="bg-transparent border border-[#4b4b4b] rounded px-3 py-1 col-span-2 sm:col-span-1 "
              required
            />
          </div>
          <div className="flex flex-col col-span-2 text-[#4b4b4b] gap-2">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="bg-transparent border border-[#4b4b4b] rounded px-3 py-1 col-span-2 sm:col-span-1"
              required
            />
          </div>
          <div className="flex flex-col col-span-2 text-[#4b4b4b] gap-2">
            <label>Phone</label>
            <input
              type="number"
              name="user_referrer"
              className="bg-transparent border border-[#4b4b4b] rounded px-3 py-1 col-span-2 sm:col-span-1"
              required
            />
          </div>
          <div className="flex flex-col col-span-2 text-[#4b4b4b] gap-2">
            <label>Message</label>
            <textarea
              name="message"
              className="bg-transparent border border-[#4b4b4b] rounded px-3 py-1 col-span-2"
              required
            />
          </div>

          <input
            type="submit"
            value="Send"
            className="py-2.5 w-full cursor-pointer  text-sm font-medium text-[#4b4b4b] focus:outline-none bg-transparent rounded-lg border border-gray-200 hover:bg-[#694fff] hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:text-[#4b4b4b] dark:hover:bg-gray-700"
          />
        </form>
      </section>
    </>
  );
};

export default ContactUs;
