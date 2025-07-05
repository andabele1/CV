import './TarjetaHabilidades.css';

export default function TarjetaHabilidades({ Titulo, logo }) {
    return (
        <div className="tarjeta-habilidades" >
            <div className="logo">
                <img src={logo} alt={Titulo} />
            </div>
            <h2>{Titulo}</h2>
        </div>
    );
}
