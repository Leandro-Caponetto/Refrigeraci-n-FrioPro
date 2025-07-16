/** @format */

import React, { useState, useCallback } from "react";
import { getDiagnostic } from "../services/geminiService";
import { DiagnosticResult, LoadingState } from "../types";
import {
  LightbulbIcon,
  ShieldCheckIcon,
  AlertTriangleIcon,
  WrenchIcon,
} from "./IconComponents";

const commonProblems = [
  "Equipo no enfría",
  "Gotea agua adentro",
  "Hace un ruido extraño",
  "Congela la tubería",
  "Olor inusual",
  "No enciende",
];

const DiagnosticsTool = () => {
  const [problemDescription, setProblemDescription] = useState("");
  const [diagnostic, setDiagnostic] = useState<DiagnosticResult | null>(null);
  const [loading, setLoading] = useState<LoadingState>(LoadingState.IDLE);
  const [error, setError] = useState<string | null>(null);

  const handleProblemClick = (problem: string) => {
    setProblemDescription(problem);
    handleSubmit(undefined, problem);
  };

  const handleSubmit = useCallback(
    async (e?: React.FormEvent, problemText?: string) => {
      if (e) e.preventDefault();
      const description = problemText || problemDescription;
      if (!description.trim()) {
        setError("Por favor, describe el problema de tu equipo.");
        return;
      }
      setLoading(LoadingState.LOADING);
      setError(null);
      setDiagnostic(null);

      try {
        const result = await getDiagnostic(description);
        setDiagnostic(result);
        setLoading(LoadingState.SUCCESS);
      } catch (err) {
        console.error(err);
        const errorMessage =
          err instanceof Error
            ? err.message
            : "Lo sentimos, ha ocurrido un error al contactar al asistente de IA. Por favor, intenta de nuevo más tarde.";
        setError(errorMessage);
        setLoading(LoadingState.ERROR);
      }
    },
    [problemDescription]
  );

  const LoadingIndicator = () => (
    <div className="flex flex-col items-center justify-center text-center p-8 bg-brand-blue-light/20 rounded-lg">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      <p className="mt-4 text-lg font-semibold text-white">
        Analizando el problema con IA...
      </p>
      <p className="text-blue-200">
        Consultando nuestra base de datos de fallos para darte la mejor
        solución.
      </p>
    </div>
  );

  const ErrorDisplay = () =>
    error && (
      <div className="mt-8 bg-red-50 p-6 rounded-lg border border-red-200 text-red-800 flex items-start gap-4">
        <AlertTriangleIcon className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
        <div>
          <p className="font-bold text-lg">Error en el Diagnóstico</p>
          <p>{error}</p>
        </div>
      </div>
    );

  const ResultDisplay = () =>
    diagnostic && (
      <div className="mt-10 bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200/80 space-y-8 text-left">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 bg-brand-gray-light p-3 rounded-full">
            <LightbulbIcon className="h-6 w-6 text-brand-gray-dark" />
          </div>
          <div>
            <h4 className="font-bold text-xl text-brand-gray-dark">
              Problema Identificado
            </h4>
            <p className="text-brand-gray mt-1 text-lg">
              {diagnostic.problema_identificado}
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-xl text-brand-gray-dark mb-4">
            Posibles Causas y Soluciones
          </h4>
          <ul className="space-y-4">
            {(diagnostic.posibles_causas || []).map((item, index) => (
              <li
                key={index}
                className="p-4 bg-brand-gray-light/80 rounded-lg border-l-4 border-brand-blue">
                <p className="font-semibold text-brand-gray-dark flex items-center gap-2">
                  <WrenchIcon className="h-4 w-4 text-brand-gray" />{" "}
                  {item.causa}
                </p>
                <p className="text-brand-gray mt-2 pl-6">
                  {item.solucion_sugerida}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-5 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg flex items-start gap-4">
          <div className="flex-shrink-0">
            <ShieldCheckIcon className="h-7 w-7 text-amber-500" />
          </div>
          <div>
            <h4 className="font-bold text-lg text-amber-900">
              Recomendación Profesional
            </h4>
            <p className="text-amber-800 mt-1">
              {diagnostic.recomendacion_profesional}
            </p>
            <p className="text-amber-700 mt-2 text-sm">
              <strong>Importante:</strong> Este es un diagnóstico automatizado.
              Para una reparación segura y efectiva, contactá a un técnico
              certificado.
            </p>
          </div>
        </div>
      </div>
    );

  return (
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          ¿Listo para solucionar el problema?
        </h2>
        <p className="mt-4 text-lg text-blue-200">
          Nuestra herramienta de diagnóstico es gratuita y fácil de usar.
          Describí tu problema o elegí uno de la lista para empezar.
        </p>
      </div>
      <div className="mt-10 max-w-2xl mx-auto">
        <div className="bg-white/10 p-2 rounded-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <textarea
              id="problem-description"
              value={problemDescription}
              onChange={(e) => setProblemDescription(e.target.value)}
              placeholder="Ej: Mi aire acondicionado gotea agua por dentro, hace un ruido extraño y no enfría bien..."
              className="w-full h-28 p-4 border border-brand-blue-light/20 bg-brand-gray-dark/30 text-white placeholder-blue-200 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-shadow duration-200 resize-none"
              disabled={loading === LoadingState.LOADING}
              aria-label="Descripción del problema"
            />
            <div className="flex flex-wrap justify-center gap-2">
              {commonProblems.map((p, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleProblemClick(p)}
                  className="px-3 py-1 text-sm bg-brand-blue-light/20 text-white rounded-full hover:bg-brand-blue-light/40 transition-colors">
                  {p}
                </button>
              ))}
            </div>
            {error && loading !== LoadingState.ERROR && (
              <p className="text-red-300 text-sm mt-2 text-center">{error}</p>
            )}
            <button
              type="submit"
              className="w-full bg-brand-blue text-white font-bold py-3.5 rounded-lg hover:bg-brand-blue-dark transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
              disabled={
                loading === LoadingState.LOADING || !problemDescription.trim()
              }>
              {loading === LoadingState.LOADING ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Analizando...</span>
                </>
              ) : (
                "Diagnosticar Ahora"
              )}
            </button>
          </form>
        </div>
        <div className="mt-8">
          {loading === LoadingState.LOADING && <LoadingIndicator />}
          {loading === LoadingState.ERROR && <ErrorDisplay />}
          {loading === LoadingState.SUCCESS && <ResultDisplay />}
        </div>
      </div>
    </div>
  );
};

export default DiagnosticsTool;
