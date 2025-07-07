import './Certificados.css';

const certificados = [
  {
    titulo: 'Desarrollo Frontend con React',
    plataforma: 'Platzi',
    fecha: 'Marzo 2024',
    enlace: 'https://platzi.com/certificado/react'
  },
  {
    titulo: 'Introducción a Python',
    plataforma: 'Google',
    fecha: 'Enero 2023',
    enlace: 'https://certificados.google.com/python'
  },
  {
    titulo: 'Responsive Web Design',
    plataforma: 'freeCodeCamp',
    fecha: 'Julio 2022',
    enlace: 'https://freecodecamp.org/certification/responsive'
  }
];

export default function Certificados() {
  return (
    <section className="seccion-certificados" id="certificados">
      <h2>Certificados</h2>
      <div className="grid-certificados">
        {certificados.map((cert, i) => (
          <div className="tarjeta-certificado" key={i}>
            <h3>{cert.titulo}</h3>
            <p><strong>Plataforma:</strong> {cert.plataforma}</p>
            <p><strong>Fecha:</strong> {cert.fecha}</p>
            <a href={cert.enlace} target="_blank" rel="noreferrer">
              Ver certificado
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
