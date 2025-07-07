import { FaGithub, FaLink } from 'react-icons/fa';
import './TarjetaProyectos.css';

export default function ProyectoCard({
    titulo,
    descripcion,
    tecnologias,
    enlaces
}) {

    return (
        <div className="proyecto-card">
            <h2>{titulo}</h2>
            <p className="descripcion">{descripcion}</p>
            <div className="separador"></div>
            <div className="info">
                {tecnologias?.map((item, index) => (
                    <p key={index}>
                        <strong>{item.tipo}:</strong>{' '}
                        {item.tools.map((tool, i) => (
                            <span key={i} className={`tech ${tool.clase}`}>{tool.nombre}</span>
                        ))}
                    </p>
                ))}
            </div>
            <div className="separador"></div>


            <div className="enlaces">
                {enlaces?.github && (
                    <a href={enlaces.github} target="_blank" rel="noreferrer">
                        <FaGithub />
                    </a>
                )}
                {enlaces?.demo && (
                    <a href={enlaces.demo} target="_blank" rel="noreferrer">
                        <FaLink />
                    </a>
                )}
            </div>
        </div>
    );
}
