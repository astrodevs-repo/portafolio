import { useState, useEffect } from "react";

const useScrollSpy = (sectionIds) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(sectionId);
            console.log(`Active section: ${sectionId}`); // Log para verificar

            // Actualizar la URL con el id de la sección activa
            window.history.replaceState(null, "", `#${sectionId}`);
          }
        });
      },
      { threshold: 0.5 } // Cuando el 50% de la sección esté visible
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sectionIds]);

  return { activeSection };
};

export default useScrollSpy;
