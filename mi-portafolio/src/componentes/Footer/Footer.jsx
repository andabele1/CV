import emailjs from 'emailjs-com';
import { FaEnvelope, FaGithub, FaPhone, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

function handleSubmit(e) {
  e.preventDefault();

  emailjs.sendForm(
    'service_nsai2fz',
    'template_tvqpx2t',
    e.target,
    'mo_ef-sD2e9iudV7e'
  ).then(
    result => alert('Mensaje enviado correctamente'),
    error => alert('Error al enviar')
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <h2>Contáctame</h2>

      <form className="formulario-contacto" onSubmit={handleSubmit}>
        <div className="fila">
          <label>
            Nombre:
            <input type="text" name="nombre" placeholder="Tu nombre" />
          </label>
          <label>
            Correo:
            <input type="email" name="correo" placeholder="tucorreo@ejemplo.com" />
          </label>
        </div>
        <div className="fila">
          <label>
            Teléfono:
            <input type="tel" name="telefono" placeholder="301..." />
          </label>
          <label>
            Motivo:
            <input type="text" name="motivo" placeholder="Consulta, trabajo, etc." />
          </label>
        </div>
        <button type="submit">Enviar</button>
      </form>

      <p className="info-contacto">
        O también puedes contactarme por:
        <a href="mailto:andabele10@gmail.com"><FaEnvelope className="icon" /> andabele10@gmail.com</a> - 
        <a href="tel:3016904044"><FaPhone className="icon" /> 3016904044</a> -
        <a href="https://github.com/andabele1" target="_blank" rel="noreferrer"><FaGithub className="icon" /> GitHub</a> -
        <a href="https://wa.me/573016904044" target="_blank" rel="noreferrer"><FaWhatsapp className="icon" /> WhatsApp</a>
      </p>
    </footer>
  );
}
