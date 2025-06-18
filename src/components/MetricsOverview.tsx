import React from 'react';
import { BarChart3, TrendingUp, AlertTriangle, DollarSign } from 'lucide-react';

const systemsData = [
  {
    name: 'S. de veterinaria',
    ldc: '12,000',
    effort: 4,
    cost: '$150,000',
    documentation: 900,
    preErrors: 140,
    postDefects: 30
  },
  {
    name: 'S. de estacionamiento',
    ldc: '9,500',
    effort: 2,
    cost: '$120,000',
    documentation: 1200,
    preErrors: 35,
    postDefects: 94
  },
  {
    name: 'S.G de inventarios',
    ldc: '3,200',
    effort: 1,
    cost: '$38,000',
    documentation: 300,
    preErrors: 93,
    postDefects: 7
  },
  {
    name: 'Alpha system',
    ldc: '9,571',
    effort: 2,
    cost: '$259,045',
    documentation: 80,
    preErrors: 102,
    postDefects: 7
  },
  {
    name: 'City explorer',
    ldc: '22,787',
    effort: 4,
    cost: '$290,000',
    documentation: 104,
    preErrors: 257,
    postDefects: 0
  },
  {
    name: 'Nestly',
    ldc: '6,371',
    effort: 4,
    cost: '$178,000',
    documentation: 57,
    preErrors: 370,
    postDefects: 14
  }
];

const MetricsOverview: React.FC = () => {
  return (
    <div className="slide">
      <div className="slide-content">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center">
            <BarChart3 className="mr-4 text-primary-600" size={40} />
            Resumen de Métricas por Sistema
          </h1>
          <p className="text-xl text-gray-600">
            Análisis comparativo de los principales indicadores de cada sistema desarrollado
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="metric-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Total LDC</h3>
              <TrendingUp className="text-green-600" size={24} />
            </div>
            <p className="text-3xl font-bold text-green-600">63,429</p>
            <p className="text-sm text-gray-600">Líneas de código totales</p>
          </div>

          <div className="metric-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Esfuerzo Total</h3>
              <TrendingUp className="text-blue-600" size={24} />
            </div>
            <p className="text-3xl font-bold text-blue-600">17</p>
            <p className="text-sm text-gray-600">Personas involucradas</p>
          </div>

          <div className="metric-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Costo Total</h3>
              <DollarSign className="text-purple-600" size={24} />
            </div>
            <p className="text-3xl font-bold text-purple-600">$1,035,045</p>
            <p className="text-sm text-gray-600">Inversión total</p>
          </div>

          <div className="metric-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Errores Totales</h3>
              <AlertTriangle className="text-red-600" size={24} />
            </div>
            <p className="text-3xl font-bold text-red-600">997</p>
            <p className="text-sm text-gray-600">Errores pre-entrega</p>
          </div>
        </div>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Sistema</th>
                <th>LDC</th>
                <th>Esfuerzo (personas)</th>
                <th>Costo</th>
                <th>Documentación (páginas)</th>
                <th>Errores pre-entrega</th>
                <th>Defectos post-entrega</th>
              </tr>
            </thead>
            <tbody>
              {systemsData.map((system, index) => (
                <tr key={index}>
                  <td className="font-semibold text-gray-900">{system.name}</td>
                  <td>{system.ldc}</td>
                  <td>{system.effort}</td>
                  <td className="font-semibold text-green-600">{system.cost}</td>
                  <td>{system.documentation}</td>
                  <td className="text-orange-600">{system.preErrors}</td>
                  <td className="text-red-600">{system.postDefects}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Observaciones Clave</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-blue-800 mb-2">
                <strong>Sistema más grande:</strong> City Explorer (22,787 LDC)
              </p>
              <p className="text-blue-800">
                <strong>Sistema más costoso:</strong> City Explorer ($290,000)
              </p>
            </div>
            <div>
              <p className="text-blue-800 mb-2">
                <strong>Mejor calidad post-entrega:</strong> City Explorer (0 defectos)
              </p>
              <p className="text-blue-800">
                <strong>Mayor documentación:</strong> S. de estacionamiento (1,200 páginas)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsOverview;