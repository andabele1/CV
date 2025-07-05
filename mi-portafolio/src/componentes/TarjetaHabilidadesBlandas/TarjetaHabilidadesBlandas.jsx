import './TarjetaHabilidadesBlandas.css';

export default function TarjetaHabilidadesBlandas({ Nombre, logo, desc }) {
  return (
    <div className="tarjeta-habilidades-blandas">
      <div className="logo">
        <img src={logo} alt={Nombre} />
      </div>
      <hr className="linea-divisoria" />
      <h3>{Nombre}</h3>
      <hr className="linea-divisoria" />
      <p>{desc}</p>
    </div>
  );
}
