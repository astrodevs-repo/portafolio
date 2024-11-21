import { lazy, Suspense } from "react";
import SkeletonText from "../../shared/Skeleton/Text";
const ContactUs = lazy(() => import("../../Footer/form/Form"));
const Text = lazy(() => import("../../shared/Text"));
const Title = lazy(() => import("../../shared/Title"));
const SubTitle = lazy(() => import("../../shared/SubTitle"));

function Header({ index }) {
  return (
    <section
      id={index}
      className="min-h-screen bg-gradient-to-bl from-[#affffe]/50 via-BlueNeurons/50  to-[#6352ff]/50 dark:from-dark-BlueNeurons/20 dark:via-gray-800/90 dark:to-gray-800 sm:gap-10 flex justify-center sm:justify-center items-center relative px-5 sm:px-5 md:px-10 lg:px-10 xl:px-40 2xl:px-32 3xl:px-[200px] pt-28 sm:pt-0"
    >
      <section className="grid grid-cols-1 sm:grid-cols-3 w-full gap-0 sm:gap-10 max-w-[1900px]">
        <section className="flex flex-col justify-center items-start gap-5 col-span-2">
          <Suspense fallback={<SkeletonText width={"w-full"} height={"h-10"} />}>
            <SubTitle
              text="Desarrollo de software a medida para sitios web y apps móviles"
              extra="text-start w-full font-bold"
            />
          </Suspense>
          <Suspense fallback={<SkeletonText width={"w-full"} height={"h-10"} row={2} />}>
            <Title
              text="**Somos Neurons**, tu socio en soluciones digitales"
              extra="text-start font-normal font-Baskerville"
            />
          </Suspense>
          <Suspense fallback={<SkeletonText width={"w-full"} height={"h-5h-10"} row={4} />}>
            <Text
              content="En Neurons, somos expertos en el **desarrollo de software** a medida, creando **páginas web** modernas y **aplicaciones móviles** personalizadas. Ofrecemos **soluciones digitales** que mejoran la experiencia de usuario y optimizan procesos de negocio. Desde sitios web corporativos hasta **tiendas online** y **apps** para **Android** e **iOS**, nuestro equipo combina creatividad, tecnología avanzada y un enfoque centrado en el usuario para asegurar el éxito de tu proyecto.
"
              extra="text-start"
            />
          </Suspense>
          <Suspense fallback={<SkeletonText width={"w-full"} height={"h-5"} row={5} />}></Suspense>
        </section>

        <section className="flex flex-col gap-5 py-5 sm:py-0">
          <Suspense fallback={<SkeletonText width={"w-full"} />}>
            <SubTitle text="Dejanos tu consulta" />
          </Suspense>
          <section className="bg-white shadow-2xl shadow-blackCeniza  dark:shadow-black dark:bg-blackCeniza p-5 rounded-md">
            <Suspense fallback={<SkeletonText width={"w-full"} height={"h-[60vh]"} />}>
              <ContactUs />
            </Suspense>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Header;
