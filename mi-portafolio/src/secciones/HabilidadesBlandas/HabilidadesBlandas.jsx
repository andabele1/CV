import './HabilidadesBlandas.css';
import TarjetaHabilidadesBlandas from "../../componentes/TarjetaHabilidadesBlandas/TarjetaHabilidadesBlandas";

export default function HabilidadesBlandas() {
  return (
    <section className="habilidades-blandas" id="habilidades-blandas">
      <h2>Habilidades Blandas</h2>
      <div className="contenedor-habilidades-blandas">
        <TarjetaHabilidadesBlandas
          Nombre="Pensamiento Crítico"
          logo="/icono-pensamiento.png"
          desc="Analizo problemas desde múltiples ángulos para tomar decisiones informadas."
        />
                <TarjetaHabilidadesBlandas
          Nombre="Pensamiento Crítico"
          logo="/icono-pensamiento.png"
          desc="Analizo problemas desde múltiples ángulos para tomar decisiones informadas."
        />
                <TarjetaHabilidadesBlandas
          Nombre="Pensamiento Crítico"
          logo="/icono-pensamiento.png"
          desc="Analizo problemas desde múltiples ángulos para tomar decisiones informadas."
        />
                <TarjetaHabilidadesBlandas
          Nombre="Pensamiento Crítico"
          logo="/icono-pensamiento.png"
          desc="Analizo problemas desde múltiples ángulos para tomar decisiones informadas."
        />
      </div>
    </section>
  );
}
