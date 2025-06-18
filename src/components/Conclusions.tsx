import React from 'react';
import { Award, TrendingUp, AlertTriangle, CheckCircle, Target, Lightbulb } from 'lucide-react';

const Conclusions: React.FC = () => {
  return (
    <div className="slide">
      <div className="slide-content">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center">
            <Award className="mr-4 text-primary-600" size={40} />
            Conclusiones y Recomendaciones
          </h1>
          <p className="text-xl text-gray-600">
            Síntesis del análisis de métricas y directrices para futuros proyectos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="metric-card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <CheckCircle className="mr-3 text-green-600" size={24} />
              Hallazgos Principales
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                <h4 className="font-semibold text-green-900 mb-2">Calidad Excepcional</h4>
                <p className="text-green-800 text-sm">
                  City Explorer demostró la mejor calidad con 0 defectos post-entrega, estableciendo un benchmark para futuros proyectos.
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-900 mb-2">Eficiencia en Desarrollo</h4>
                <p className="text-blue-800 text-sm">
                  El Sistema de Estacionamiento mostró la mejor relación entre errores pre-entrega y documentación.
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                <h4 className="font-semibold text-purple-900 mb-2">Estimación Precisa</h4>
                <p className="text-purple-800 text-sm">
                  El análisis de puntos de función proporciona una base sólida para la estimación del nuevo proyecto (262.08 PFA).
                </p>
              </div>
            </div>
          </div>

          <div className="metric-card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <AlertTriangle className="mr-3 text-red-600" size={24} />
              Áreas de Atención
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                <h4 className="font-semibold text-red-900 mb-2">Control de Calidad</h4>
                <p className="text-red-800 text-sm">
                  Nestly presenta 58.08 errores por KLDC, indicando la necesidad de mejores procesos de QA.
                </p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                <h4 className="font-semibold text-orange-900 mb-2">Costos Elevados</h4>
                <p className="text-orange-800 text-sm">
                  Alpha System y Nestly muestran costos por LDC superiores a $27, requiriendo optimización de procesos.
                </p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-semibold text-yellow-900 mb-2">Documentación Inconsistente</h4>
                <p className="text-yellow-800 text-sm">
                  Variación significativa en documentación por KLDC (4.56 - 126.32), necesita estandarización.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="metric-card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Target className="mr-3 text-blue-600" size={20} />
              Estimación del Proyecto
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Duración estimada:</span>
                <span className="font-semibold text-blue-600">13.1 meses</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Rango de variación:</span>
                <span className="font-semibold text-green-600">11.8 - 14.4 meses</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Horas totales:</span>
                <span className="font-semibold text-purple-600">2,097 horas</span>
              </div>
            </div>
          </div>

          <div className="metric-card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="mr-3 text-green-600" size={20} />
              Métricas de Referencia
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Errores objetivo:</span>
                <span className="font-semibold text-green-600">{'< 12 por KLDC'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Defectos objetivo:</span>
                <span className="font-semibold text-blue-600">{'< 3 por KLDC'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Costo objetivo:</span>
                <span className="font-semibold text-purple-600">{'< $15 por LDC'}</span>
              </div>
            </div>
          </div>

          <div className="metric-card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Lightbulb className="mr-3 text-yellow-600" size={20} />
              Factores Críticos
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Complejidad alta:</span>
                <span className="font-semibold text-red-600">6 componentes</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Factor de ajuste:</span>
                <span className="font-semibold text-blue-600">1.17</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Riesgo del proyecto:</span>
                <span className="font-semibold text-orange-600">Medio-Alto</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Recomendaciones Estratégicas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Para el Nuevo Proyecto</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Implementar procesos de QA similares a City Explorer</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Planificar con 14.4 meses para incluir buffer de riesgo</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Establecer estándares de documentación consistentes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-600 mr-3 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Implementar desarrollo iterativo con entregas frecuentes</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Para Futuros Desarrollos</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Target className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Establecer métricas de calidad como KPIs del proyecto</span>
                </li>
                <li className="flex items-start">
                  <Target className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Crear un repositorio de lecciones aprendidas</span>
                </li>
                <li className="flex items-start">
                  <Target className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Implementar revisiones de código obligatorias</span>
                </li>
                <li className="flex items-start">
                  <Target className="text-blue-600 mr-3 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-gray-700">Desarrollar plantillas estándar para documentación</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conclusions;