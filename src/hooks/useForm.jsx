import { useEffect, useRef, useState, useCallback } from "react";
import { Bounce, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { Navigate } from "react-router-dom";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const validate = (values) => {
    let errors = {};
    if (values.email !== values.email1) {
      errors.email1 = "Los correos electrónicos no coinciden";
    }
    return errors;
  };

  const onSubmit = useCallback(
    async (values) => {
      try {
        setLoading(true);
        await emailjs.sendForm("service_muuqd9i", "template_0mirxxd", form.current, {
          publicKey: "1Vvcs4rfZRejkjIrj",
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

        // Reset form values to initial state
        setValues(initialValues);
      } catch (error) {
        toast.error("Hubo un error al enviar el mensaje.", {
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
        console.error("FAILED...", error.text, values);
      } finally {
        setLoading(false);
      }
    },
    [initialValues]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      ...validate({ [name]: value }),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setIsSubmitting(true);
    console.log({ values });
    if (values.type === "home") {
      console.log("hola");
    } else {
      setTimeout(() => {
        window.location.href = "/sended";
      }, 3000);
    }
  };

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        onSubmit(values);
      }
      setIsSubmitting(false);
    }
  }, [errors, isSubmitting, onSubmit, values]);

  return {
    values,
    errors,
    form,
    isSubmitting,
    loading,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

export default useForm;
