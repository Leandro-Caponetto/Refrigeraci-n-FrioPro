/** @format */

import React from "react";

const Hero = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-gray-dark mb-4 leading-tight">
            Diagnósticos de climatización,{" "}
            <span className="text-brand-blue">al instante.</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-gray max-w-2xl mx-auto mb-8">
            ¿Problemas con tu aire acondicionado o heladera? FríoPro te ayuda a
            identificar la falla y te guía paso a paso para solucionarla. Ahorrá
            tiempo y dinero.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#diagnostics"
              className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
              Iniciar Diagnóstico Gratis
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto bg-white text-brand-gray-dark font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg border border-gray-200">
              Saber Más
            </a>
          </div>
        </div>
        <div className="mt-16 max-w-5xl mx-auto">
          <p className="text-2xl md:text-2xl font-extrabold text-brand-gray-dark mb-4 leading-tight">
            Aires acondicionados,{" "}
            <span className="text-brand-blue">split ❄️.</span>
          </p>
          <img
            src="https://media.istockphoto.com/id/2058341644/es/foto/mantenimiento-y-reparaci%C3%B3n-de-aires-acondicionados-t%C3%A9cnico-de-servicio-de-hvac-en-el-trabajo.jpg?s=612x612&w=0&k=20&c=OSsYB3TefH712JAn9mz8rD6f6ruhAyf3Wo7a2brD6pA="
            alt="Técnico profesional reparando una unidad de aire acondicionado"
            className="rounded-2xl shadow-2xl border-8 border-white object-cover h-96 w-full"
          />
        </div>
        <div className="mt-16 max-w-5xl mx-auto">
          <p className="text-2xl md:text-2xl font-extrabold text-brand-gray-dark mb-4 leading-tight">
            Heladeras,{" "}
            <span className="text-brand-blue">todos las marcas.</span>
          </p>
          <img
            src="https://www.eltribunoclasificados.com.ar/Materiales/2021-03//30/00108667.jpg"
            className="rounded-2xl shadow-2xl border-8 border-white object-cover h-96 w-full"
          />
        </div>
        <div className="mt-16 max-w-5xl mx-auto">
          <p className="text-2xl md:text-2xl font-extrabold text-brand-gray-dark mb-4 leading-tight">
            Heladeras Comerciales,{" "}
            <span className="text-brand-blue">todos los modelos.</span>
          </p>
          <img
            src="https://friderweb.com.ar/img/heladeras.png"
            className="rounded-2xl shadow-2xl border-8 border-white object-cover h-100 w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
