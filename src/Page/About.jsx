import React from "react";
import "./style/about.css";
import Tarjeta from "../Components/Tarjeta";
import grados from "../Components/img/grados.jpg";
import perfil from "../Components/img/perfil.jpg";

function About() {
  return (
    <>
      <div className="About">
        <div className="aside1"></div>
        <section>
          <div className="About-header">
            <h2>Hola</h2>
            <article>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </article>
          </div>
          <hr />
          <div className="About-main">
            <h2>Quien Soy </h2>
            <article className="quien-Soy">
            <ul>
                  <li>
                    Ingri Carolina Mosquera Moreno
                  </li>
                  <li>
                     Ingeeniera de procesos
                  </li>
                  <li>
                    Medellín - Antioquia
                  </li>
                  <li>
                    1998
                  </li>
                </ul>
              <img src={perfil} className="avatar" />
            </article>
          </div>
          <hr />
          <div className="About-main">
            <h2>Acerca </h2>
            <div className="Article">
              <article>
                <p>

                    Ingeniera de procesos con formación en metodologías de
                    investigación, recolección, manipulación y visualización de
                    datos. Adicionalmente tengo un amplio conocimiento en
                    control de procesos, desarrollo e implementación de
                    metodologías cuyo objetivo es mejorar los procesos, con el
                    propósito de incrementar la rentabilidad y productividad.
                    con más de 2 años de experiencia en investigación, análisis
                    y visualización de datos además de liderar proyectos de
                    mejoramiento, así como de proyectos de desarrollo e
                    implementación de nuevos productos y procesos. Con
                    habilidades de liderazgo de equipos interdisciplinarios,
                    excelente relacionamiento y energía, capacidad de aprender y
                    enseñar, pensamiento analítico y resolución de problemas.
                
                </p>
              </article>
            </div>

            <div className="Article">
              <h2>Formación </h2>
              <article>
                <Tarjeta image={grados} />
                <ul>
                  <li>
                    <h3>Ingenieria de procesos</h3>
                    Universidad EAFIT -2021
                  </li>
                  <li>
                    <h4> Auditoria Interna De Calidad- NTC ISO 9001</h4>
                    SENA -2021
                  </li>
                  <li>
                    <h4>Analítica de datos</h4>
                    PROASEDU S.A.S -2021
                  </li>
                  <li>
                    <h4> Data Analytics for Lean Six Sigma</h4>
                    University of Amsterdam and offered through -2021
                  </li>
                </ul>
              </article>
            </div>
            <div>
              <h2>¿Qué Hago? </h2>
              <article>
                <p>
                  Lorem{" "}
                  <blockquote>
                    {" "}
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </blockquote>
                </p>
              </article>
            </div>
          </div>
          <div className="About-footer">BIEN</div>
        </section>
        <div className="aside2"></div>
      </div>
    </>
  );
}

export default About;
