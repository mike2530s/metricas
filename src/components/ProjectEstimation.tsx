import React from 'react';
import { Award, Clock, Users, Calendar } from 'lucide-react';

const estimationData = {
  functionPoints: 262.08,
  hours: 2096.64,
  weeks: 52.416,
  days: 262.08,
  months: 13.104,
  minHours: 1886.976,
  maxHours: 2075.6736,
  minWeeks: 47.1744,
  maxWeeks: 57.6576,
  minDays: 235.872,
  maxDays: 288.288,
  minMonths: 11.7936,
  maxMonths: 14.4144
};

const ProjectEstimation: React.FC = () => {
  return (
    <div className="slide">
      <div className="slide-content">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center">
            <Award className="mr-4 text-primary-600" size={40} />
            Estimación del Proyecto
          </h1>
          <p className="text-xl text-gray-600">
            Proyección temporal y de recursos basada en puntos de función ajustados
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="metric-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Puntos de Función</h3>
              <Award className="text-primary-600" size={24} />
            </div>
            <p className="text-3xl font-bold text-primary-600">{estimationData.functionPoints}</p>
            <p className="text-sm text-gray-600">PFA calculados</p>
          </div>

          <div className="metric-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Horas Totales</h3>
              <Clock className="text-blue-600" size={24} />
            </div>
            <p className="text-3xl font-bold text-blue-600">{estimationData.hours.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Horas estimadas</p>
          </div>

          <div className="metric-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Semanas</h3>
              <Calendar className="text-green-600" size={24} />
            </div>
            <p className="text-3xl font-bold text-green-600">{estimationData.weeks.toFixed(1)}</p>
            <p className="text-sm text-gray-600">Duración estimada</p>
          </div>

          <div className="metric-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Meses</h3>
              <Users className="text-purple-600" size={24} />
            </div>
            <p className="text-3xl font-bold text-purple-600">{estimationData.months.toFixed(1)}</p>
            <p className="text-sm text-gray-600">Duración en meses</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="metric-card">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Estimación Base (100%)</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center">
                  <Clock className="text-blue-600 mr-3" size={20} />
                  <span className="font-medium text-blue-900">Horas</span>
                </div>
                <span className="text-xl font-bold text-blue-600">{estimationData.hours.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                <div className="flex items-center">
                  <Calendar className="text-green-600 mr-3" size={20} />
                  <span className="font-medium text-green-900">Semanas</span>
                </div>
                <span className="text-xl font-bold text-green-600">{estimationData.weeks.toFixed(1)}</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center">
                  <Users className="text-purple-600 mr-3" size={20} />
                  <span className="font-medium text-purple-900">Días</span>
                </div>
                <span className="text-xl font-bold text-purple-600">{estimationData.days.toFixed(1)}</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center">
                  <Award className="text-orange-600 mr-3" size={20} />
                  <span className="font-medium text-orange-900">Meses</span>
                </div>
                <span className="text-xl font-bold text-orange-600">{estimationData.months.toFixed(1)}</span>
              </div>
            </div>
          </div>

          <div className="metric-card">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Rango de Estimación (90% - 110%)</h3>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">Horas</span>
                  <div className="text-right">
                    <p className="text-sm text-green-600">{estimationData.minHours.toLocaleString()} - {estimationData.maxHours.toLocaleString()}</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-red-400 h-2 rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">Semanas</span>
                  <div className="text-right">
                    <p className="text-sm text-green-600">{estimationData.minWeeks.toFixed(1)} - {estimationData.maxWeeks.toFixed(1)}</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-red-400 h-2 rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">Días</span>
                  <div className="text-right">
                    <p className="text-sm text-green-600">{estimationData.minDays.toFixed(1)} - {estimationData.maxDays.toFixed(1)}</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-red-400 h-2 rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">Meses</span>
                  <div className="text-right">
                    <p className="text-sm text-green-600">{estimationData.minMonths.toFixed(1)} - {estimationData.maxMonths.toFixed(1)}</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-400 to-red-400 h-2 rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Consideraciones para la Planificación</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Factores de Riesgo</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Complejidad alta en algunos componentes
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Integración con sistemas externos
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Actualizaciones en línea complejas
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Recomendaciones</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Planificar con el rango máximo (14.4 meses)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Implementar desarrollo iterativo
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Asignar recursos adicionales para testing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectEstimation;