import { useEffect, useState } from "react";
import "./BarraLateral.css";

export default function Sidebar() {
    const [activeSection, setActiveSection] = useState("inicio");

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px 0px -70% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section)
        );

        return () => observer.disconnect();
    }, []);



    const handleLinkClick = (e, id) => {
        e.preventDefault();
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <aside className="sidebar">
            <div className="foto-perfil"></div>
            <nav className="menu">
                <ul>
                    <li>
                        <a
                            href="#inicio"
                            className={activeSection === "inicio" ? "active" : ""}
                            onClick={(e) => handleLinkClick(e, "inicio")}
                        >
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a
                            href="#sobre-mi"
                            className={activeSection === "sobre-mi" ? "active" : ""}
                            onClick={(e) => handleLinkClick(e, "sobre-mi")}
                        >
                            Sobre mí
                        </a>
                    </li>
                    <li>
                        <a
                            href="#habilidades"
                            className={activeSection === "habilidades" ? "active" : ""}
                            onClick={(e) => handleLinkClick(e, "habilidades")}
                        >
                            Habilidades
                        </a>
                    </li>
                    <li>
                        <a
                            href="#habilidades-blandas"
                            className={activeSection === "habilidades-blandas" ? "active" : ""}
                            onClick={(e) => handleLinkClick(e, "habilidades-blandas")}
                        >
                            Habilidades Blandas
                        </a>
                    </li>
                    <li>
                        <a
                            href="#proyectos"
                            className={activeSection === "proyectos" ? "active" : ""}
                            onClick={(e) => handleLinkClick(e, "proyectos")}
                        >
                            Proyectos
                        </a>
                    </li>
                    <li>
                        <a
                            href="#certificados"
                            className={activeSection === "certificados" ? "active" : ""}
                            onClick={(e) => handleLinkClick(e, "certificados")}
                        >
                            Certificados
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contacto"
                            className={activeSection === "contacto" ? "active" : ""}
                            onClick={(e) => handleLinkClick(e, "contacto")}
                        >
                            Contacto
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
