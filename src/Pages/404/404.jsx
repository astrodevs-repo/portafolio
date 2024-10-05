import { Link } from "react-router-dom"; // Asegúrate de que estás usando react-router-dom
import Title from "../../Components/shared/Title";
import SubTitle from "../../Components/shared/SubTitle";
import SEO from "../../Components/shared/SEO/Seo";

const Page404 = () => {
  return (
    <>
      <SEO
        title={"404"}
        description={"¡Ups! La página que buscas no existe."}
        image={""}
        url={`https://neurons.com.ar/*`}
        type=""
        siteName="Neurons"
      />
      <div className="w-full h-screen flex flex-col justify-center items-center text-center gap-10">
        <Title text={"404"} textColor={"text-blackCeniza"} />
        <Title text={"Página No Encontrada"} textColor={"text-blackCeniza"} />

        <SubTitle text={"¡Ups! La página que buscas no existe."} />
        <Link
          to="/"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Volver a Inicio
        </Link>
      </div>
    </>
  );
};

export default Page404;
