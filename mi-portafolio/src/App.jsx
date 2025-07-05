import './App.css';
import Habiliadades from './secciones/Habilidades/Habilidades';
import BarraLateral from './componentes/BarraLateral/BarraLateral';
import Presentacion from './secciones/Presentacion/Presentacion';
import SobreMi from './secciones/SobreMi/SobreMi';
import HabilidadesBlandas from './secciones/HabilidadesBlandas/HabilidadesBlandas';
import Proyectos from './secciones/Proyectos';
import Certificados from './secciones/Certificados';

function App() {
  return (
    <div className='App'>
      <BarraLateral />
      <Presentacion />
      <SobreMi />
      <Habiliadades />
      <HabilidadesBlandas />
      <Proyectos />
      <Certificados />
    </div>
  );
}

export default App;
