import React from 'react';
import { FileText, Calendar, User } from 'lucide-react';

const TitleSlide: React.FC = () => {
  return (
    <div className="slide">
      <div className="slide-content flex items-center justify-center">
        <div className="text-center max-w-4xl">
          <div className="mb-8">
            <FileText size={80} className="mx-auto text-primary-600 mb-6" />
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Análisis de Métricas de Software
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Evaluación Comparativa de Sistemas y Estimación por Puntos de Función
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="metric-card">
              <div className="flex items-center justify-center mb-4">
                <FileText className="text-primary-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">6 Sistemas Analizados</h3>
              <p className="text-gray-600">Comparación detallada de métricas de calidad</p>
            </div>

            <div className="metric-card">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="text-primary-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Estimación Temporal</h3>
              <p className="text-gray-600">Análisis de esfuerzo y duración del proyecto</p>
            </div>

            <div className="metric-card">
              <div className="flex items-center justify-center mb-4">
                <User className="text-primary-600" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Análisis de Calidad</h3>
              <p className="text-gray-600">Evaluación de errores y defectos por sistema</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contenido de la Presentación</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <p className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Resumen de métricas por sistema
                </p>
                <p className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Análisis comparativo de calidad
                </p>
                <p className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Cálculo de puntos de función
                </p>
              </div>
              <div className="space-y-2">
                <p className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Evaluación de complejidad
                </p>
                <p className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Estimación de proyecto
                </p>
                <p className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Conclusiones y recomendaciones
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSlide;