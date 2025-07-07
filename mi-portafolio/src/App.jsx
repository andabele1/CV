import './App.css';
import BarraLateral from './componentes/BarraLateral/BarraLateral';
import Footer from './componentes/Footer/Footer';
import Certificados from './secciones/Certificados/Certificados';
import Habiliadades from './secciones/Habilidades/Habilidades';
import HabilidadesBlandas from './secciones/HabilidadesBlandas/HabilidadesBlandas';
import Presentacion from './secciones/Presentacion/Presentacion';
import Proyectos from './secciones/Proyectos/Proyectos';
import SobreMi from './secciones/SobreMi/SobreMi';

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
      <Footer />
    </div>
  );
}

export default App;
