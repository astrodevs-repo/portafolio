import useForm from "../../../hooks/useForm";
import Loading from "../../shared/Loading/Loading";
import Text from "../../shared/Text";

const ContactUs = ({ input1, input2, input3, input4, input5, input6, buttonText }) => {
  const { handleChange, handleBlur, handleSubmit, loading, values, errors, isSubmitting, form } =
    useForm({
      type: "home",
      name1: "",
      name: "",
      email: "",
      email1: "",
      user_referrer: "",
      message: "",
    });

  return (
    <section className="w-full flex flex-col gap-10 pt-0 sm:pt-20 md:pt-0" id="contactanosform">
      <form ref={form} onSubmit={handleSubmit}>
        <section className={`w-full grid grid-cols-1 gap-4 mb-5 ${loading ? "opacity-50" : ""}`}>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name="name1"
              placeholder={input1}
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
                placeholder={input2}
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
                placeholder={input3}
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
              placeholder={input4}
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
              placeholder={input5}
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
              className="bg-transparent text-blackCeniza dark:text-white border border-blackCeniza dark:border-white rounded px-3 py-10 overflow-hidden hover:outline-none custom-placeholder"
              placeholder={input6}
              required
            />
          </div>
        </section>

        <section className={`flex justify-center w-full  transition-colors `}>
          <button
            type={"submit"}
            disabled={isSubmitting}
            className={`bg-[#33aed6] transition-shadow duration-700  shadow-lg shadow-blackCeniza hover:shadow-2xl hover:shadow-blackCeniza flex justify-center items-center gap-2 dark:bg-purple-600 dark:border-purple-600 dark:text-white py-2.5 px-5 me-2 mb-2 text-sm font-medium focus:outline-none rounded-lg border-[#33aed6] border-2 hover:bg-[#33aed6] dark:hover:bg-purple-700 focus:z-10 focus:ring-4 ${
              isSubmitting && "opacity-50 cursor-not-allowed"
            } w-full`}
          >
            {loading ? <Loading /> : <Text textColor={"text-white"} content={buttonText} />}
          </button>
        </section>
      </form>
    </section>
  );
};

export default ContactUs;
