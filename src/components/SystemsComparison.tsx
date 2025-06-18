import React from 'react';
import { TrendingUp, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const qualityMetrics = [
  {
    system: 'Veterinaria',
    errorsPerKLDC: '11.67',
    defectsPerKLDC: '2.50',
    costPerLDC: '12.50',
    docsPerKLDC: '75.00',
    quality: 'Buena'
  },
  {
    system: 'Estacionamiento',
    errorsPerKLDC: '3.68',
    defectsPerKLDC: '9.89',
    costPerLDC: '12.63',
    docsPerKLDC: '126.32',
    quality: 'Regular'
  },
  {
    system: 'Inventarios',
    errorsPerKLDC: '29.06',
    defectsPerKLDC: '2.19',
    costPerLDC: '11.88',
    docsPerKLDC: '93.75',
    quality: 'Regular'
  },
  {
    system: 'Alpha system',
    errorsPerKLDC: '10.66',
    defectsPerKLDC: '0.73',
    costPerLDC: '27.07',
    docsPerKLDC: '8.36',
    quality: 'Buena'
  },
  {
    system: 'City Explorer',
    errorsPerKLDC: '11.28',
    defectsPerKLDC: '0.00',
    costPerLDC: '12.73',
    docsPerKLDC: '4.56',
    quality: 'Excelente'
  },
  {
    system: 'Nestly',
    errorsPerKLDC: '58.08',
    defectsPerKLDC: '2.20',
    costPerLDC: '27.94',
    docsPerKLDC: '8.95',
    quality: 'Deficiente'
  }
];

const getQualityIcon = (quality: string) => {
  switch (quality) {
    case 'Excelente':
      return <CheckCircle className="text-green-600" size={20} />;
    case 'Buena':
      return <CheckCircle className="text-blue-600" size={20} />;
    case 'Regular':
      return <AlertCircle className="text-yellow-600" size={20} />;
    case 'Deficiente':
      return <XCircle className="text-red-600" size={20} />;
    default:
      return <AlertCircle className="text-gray-600" size={20} />;
  }
};

const getQualityColor = (quality: string) => {
  switch (quality) {
    case 'Excelente':
      return 'text-green-600 bg-green-50 border-green-200';
    case 'Buena':
      return 'text-blue-600 bg-blue-50 border-blue-200';
    case 'Regular':
      return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    case 'Deficiente':
      return 'text-red-600 bg-red-50 border-red-200';
    default:
      return 'text-gray-600 bg-gray-50 border-gray-200';
  }
};

const SystemsComparison: React.FC = () => {
  return (
    <div className="slide">
      <div className="slide-content">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center">
            <TrendingUp className="mr-4 text-primary-600" size={40} />
            Comparación de Calidad por Sistema
          </h1>
          <p className="text-xl text-gray-600">
            Análisis de métricas normalizadas por miles de líneas de código (KLDC)
          </p>
        </div>

        <div className="table-container mb-8">
          <table className="data-table">
            <thead>
              <tr>
                <th>Sistema</th>
                <th>Errores por KLDC</th>
                <th>Defectos por KLDC</th>
                <th>Costo por LDC</th>
                <th>Docs por KLDC</th>
                <th>Calidad General</th>
              </tr>
            </thead>
            <tbody>
              {qualityMetrics.map((metric, index) => (
                <tr key={index}>
                  <td className="font-semibold text-gray-900">{metric.system}</td>
                  <td className="text-orange-600">{metric.errorsPerKLDC}</td>
                  <td className="text-red-600">{metric.defectsPerKLDC}</td>
                  <td className="text-green-600">${metric.costPerLDC}</td>
                  <td className="text-blue-600">{metric.docsPerKLDC}</td>
                  <td>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getQualityColor(metric.quality)}`}>
                      {getQualityIcon(metric.quality)}
                      <span className="ml-2">{metric.quality}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="metric-card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <CheckCircle className="mr-3 text-green-600" size={24} />
              Mejores Prácticas
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <span className="font-medium text-green-900">Menor tasa de defectos:</span>
                <span className="text-green-700">City Explorer (0.00)</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="font-medium text-blue-900">Menor tasa de errores:</span>
                <span className="text-blue-700">Estacionamiento (3.68)</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <span className="font-medium text-purple-900">Mejor documentación:</span>
                <span className="text-purple-700">Estacionamiento (126.32)</span>
              </div>
            </div>
          </div>

          <div className="metric-card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <AlertCircle className="mr-3 text-red-600" size={24} />
              Áreas de Mejora
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <span className="font-medium text-red-900">Mayor tasa de errores:</span>
                <span className="text-red-700">Nestly (58.08)</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <span className="font-medium text-orange-900">Mayor costo por LDC:</span>
                <span className="text-orange-700">Nestly ($27.94)</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <span className="font-medium text-yellow-900">Menor documentación:</span>
                <span className="text-yellow-700">City Explorer (4.56)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Conclusiones del Análisis Comparativo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700 mb-2">
                • <strong>City Explorer</strong> muestra la mejor calidad general con 0 defectos post-entrega
              </p>
              <p className="text-gray-700">
                • <strong>Sistema de Estacionamiento</strong> destaca por su baja tasa de errores y excelente documentación
              </p>
            </div>
            <div>
              <p className="text-gray-700 mb-2">
                • <strong>Nestly</strong> requiere mejoras significativas en control de calidad
              </p>
              <p className="text-gray-700">
                • Los sistemas más costosos no necesariamente tienen mejor calidad
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemsComparison;