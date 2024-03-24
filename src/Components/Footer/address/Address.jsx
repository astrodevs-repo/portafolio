const FooterInfo = () => {
  const ubicaciones = [
    {
      ciudad: "MEDELLÍN",
      direccion: "CARRERA 30A #10D-52",
      oficina: "OFICINA 301",
      telefono: "604 444 35 43 EXT 4",
      correo: "INFO@SIGMA3DS.COM",
    },
    {
      ciudad: "MIAMI",
      direccion: "2600 NW 87TH AVE",
      oficina: "SUITE 4",
      ciudadEstado: "DORAL, FL 33172",
      empresa: "SIGMA STUDIOS LLC",
      telefono: "+1 844-582-7881",
      correo: "MIAMI@SIGMA3DS.COM",
    },
    {
      ciudad: "HOUSTON",
      direccion: "5800 WOODWAY DR.",
      ciudadEstado: "HOUSTON, TX 17111",
      telefono: "+1 (346) 320-9647",
      correo: "HOUSTON@SIGMA3DS.COM",
    },
  ];

  return (
    <div className="bg-white text-gray-500 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {ubicaciones.map((ubicacion, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold mb-4">{ubicacion.ciudad}</h3>
            <p>{ubicacion.direccion}</p>
            {ubicacion.oficina && <p>{ubicacion.oficina}</p>}
            {ubicacion.ciudadEstado && <p>{ubicacion.ciudadEstado}</p>}
            {ubicacion.empresa && <p>{ubicacion.empresa}</p>}
            <p>TELÉFONO: {ubicacion.telefono}</p>
            <p>{ubicacion.correo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterInfo;
