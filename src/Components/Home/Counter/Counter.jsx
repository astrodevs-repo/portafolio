import Section from "../../shared/Section/Section";
import CountUp from "../../shared/CountUp/CountUp";

const Counter = ({ index, onObserver, currentStep }) => {
  const data = [
    {
      label: "Equipo especializado",
      value: 200,
      description:
        "Contamos con un equipo especializado para poder alcanzar los objetivos con múltiples habilidades. Cada proyecto es un nuevo desafío que resolvemos de manera creativa y funcional.",
    },
    {
      label: "Países",
      value: 9,
      description:
        "Ser nómades es trabajar a nivel global, investigando y analizando cada coyuntura cultural para convertirnos en auténticos locales en la comunicación hacia la audiencia.",
    },
    {
      label: "Clientes satisfechos",
      value: 95,
      description:
        "Nuestros clientes confían en nosotros bajo la premisa de que cada uno es diferente, por lo que necesitan una estrategia personalizada desde la creatividad hasta la gestión.",
    },
  ];
  return (
    <Section currentStep={currentStep} onObserver={onObserver} index={index}>
      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-20">
        {data.map(({ value, label, description }, index) => (
          <CountUp
            end={value}
            duration={1}
            key={index}
            label={label}
            description={description}
            currentStep={currentStep}
          />
        ))}
      </section>
    </Section>
  );
};

export default Counter;
