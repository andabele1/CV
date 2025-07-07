import TarjetaProyectos from '../../componentes/TarjetaProyectos/TarjetaProyectos.jsx';
import './Proyectos.css';

export default function Proyectos() {
    return (
        <section className='contenedor-proyectos' id='proyectos'>
            <h2>Proyectos</h2>
            <div>
                <TarjetaProyectos
                    titulo="Macros Calculator"
                    descripcion="App que calcula tus macros a partir de datos personales"
                    tecnologias={[
                        {
                            tipo: 'Frontend',
                            tools: [{ nombre: 'React Native', clase: 'react-native' }]
                        },
                        {
                            tipo: 'Backend',
                            tools: [{ nombre: 'Python', clase: 'python' }]
                        },
                        {
                            tipo: 'Base de Datos',
                            tools: [{ nombre: 'PostgreSQL', clase: 'postgres' }]
                        },
                        {
                            tipo: 'Despliegue',
                            tools: [
                                { nombre: 'Render', clase: 'render' },
                                { nombre: 'Railway', clase: 'railway' }
                            ]
                        }
                    ]}
                    enlaces={{
                        github: 'https://github.com/tuusuario/macros-app',
                        demo: 'https://macros-app.vercel.app'
                    }}
                />
                <TarjetaProyectos
                    titulo="Macros Calculator"
                    descripcion="App que calcula tus macros a partir de datos personales"
                    tecnologias={[
                        {
                            tipo: 'Frontend',
                            tools: [{ nombre: 'React Native', clase: 'react-native' }]
                        },
                        {
                            tipo: 'Backend',
                            tools: [{ nombre: 'Python', clase: 'python' }]
                        },
                        {
                            tipo: 'Base de Datos',
                            tools: [{ nombre: 'PostgreSQL', clase: 'postgres' }]
                        },
                        {
                            tipo: 'Despliegue',
                            tools: [
                                { nombre: 'Render', clase: 'render' },
                                { nombre: 'Railway', clase: 'railway' }
                            ]
                        }
                    ]}
                    enlaces={{
                        github: 'https://github.com/tuusuario/macros-app',
                        demo: 'https://macros-app.vercel.app'
                    }}
                />
                <TarjetaProyectos
                    titulo="Macros Calculator"
                    descripcion="App que calcula tus macros a partir de datos personales"
                    tecnologias={[
                        {
                            tipo: 'Frontend',
                            tools: [{ nombre: 'React Native', clase: 'react-native' }]
                        },
                        {
                            tipo: 'Backend',
                            tools: [{ nombre: 'Python', clase: 'python' }]
                        },
                        {
                            tipo: 'Base de Datos',
                            tools: [{ nombre: 'PostgreSQL', clase: 'postgres' }]
                        },
                        {
                            tipo: 'Despliegue',
                            tools: [
                                { nombre: 'Render', clase: 'render' },
                                { nombre: 'Railway', clase: 'railway' }
                            ]
                        }
                    ]}
                    enlaces={{
                        github: 'https://github.com/tuusuario/macros-app',
                        demo: 'https://macros-app.vercel.app'
                    }}
                />
                <TarjetaProyectos
                    titulo="Macros Calculator"
                    descripcion="App que calcula tus macros a partir de datos personales"
                    tecnologias={[
                        {
                            tipo: 'Frontend',
                            tools: [{ nombre: 'React Native', clase: 'react-native' }]
                        },
                        {
                            tipo: 'Backend',
                            tools: [{ nombre: 'Python', clase: 'python' }]
                        },
                        {
                            tipo: 'Base de Datos',
                            tools: [{ nombre: 'PostgreSQL', clase: 'postgres' }]
                        },
                        {
                            tipo: 'Despliegue',
                            tools: [
                                { nombre: 'Render', clase: 'render' },
                                { nombre: 'Railway', clase: 'railway' }
                            ]
                        }
                    ]}
                    enlaces={{
                        github: 'https://github.com/tuusuario/macros-app',
                        demo: 'https://macros-app.vercel.app'
                    }}
                />
            </div>
        </section>
    );
}