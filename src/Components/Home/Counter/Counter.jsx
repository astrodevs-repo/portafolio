import Section from "../../shared/Section/Section";
import CountUp from "../../shared/CountUp/CountUp";

const Counter = ({ index, onObserver, currentStep }) => {
  const data = [
    {
      label: "Proyectos",
      value: 15,
      description:
        "Contamos con un equipo especializado para alcanzar los objetivos con múltiples habilidades. Cada proyecto es un nuevo desafío que resolvemos de manera creativa y funcional.",
    },
    {
      label: "Países",
      value: 5,
      description:
        "Trabajamos con clientes de diferentes países, lo que nos permite adaptar nuestras soluciones a una variedad de contextos y necesidades internacionales.",
    },
    {
      label: "Clientes Satisfechos",
      value: 8,
      description:
        "Nuestros clientes confían en nosotros debido a nuestra capacidad para ofrecer estrategias personalizadas, desde la creatividad hasta la gestión, adaptadas a cada necesidad específica.",
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
