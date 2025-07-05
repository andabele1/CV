import './Habilidades.css';
import TarjetaHabilidades from "../../componentes/TarjetaHabilidades/TarjetaHabilidades";

export default function Habilidades() {
    return (
        <section className="habilidades-container" id='habilidades'>
            <h1>HABILIDADES</h1>
            <div className="tarjetas-grid">
                <TarjetaHabilidades Titulo="HTML5" logo="/logo-html.png" />
                <TarjetaHabilidades Titulo="React" logo="/logo-react.png" />
                <TarjetaHabilidades Titulo="CSS3" logo="/logo-css.png" />
                <TarjetaHabilidades Titulo="HTML5" logo="/logo-html.png" />
                <TarjetaHabilidades Titulo="React" logo="/logo-react.png" />
                <TarjetaHabilidades Titulo="CSS3" logo="/logo-css.png" />
                <TarjetaHabilidades Titulo="JavaScript" logo="/logo-js.png" />
            </div>
        </section>
    );
};
