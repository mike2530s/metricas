import React from 'react';
import { Calculator, Database, ArrowRight, FileInput } from 'lucide-react';

const functionPointsData = [
  { type: 'Entradas Externas', simple: 6, medium: 4, complex: 18, total: 28, points: 224 },
  { type: 'Salidas Externas', simple: 8, medium: 15, complex: 0, total: 23, points: 0 },
  { type: 'Consultas Externas', simple: 12, medium: 4, complex: 12, total: 28, points: 0 },
  { type: 'Archivos Internos', simple: 21, medium: 40, complex: 0, total: 61, points: 0 },
  { type: 'Archivos de Interfaz', simple: 0, medium: 14, complex: 70, total: 84, points: 0 }
];

const adjustmentFactors = [
  { factor: 'Comunicación de Datos', influence: 5 },
  { factor: 'Funciones Distribuidas', influence: 2 },
  { factor: 'Presentaciones', influence: 0 },
  { factor: 'Gran Uso de Configuración', influence: 4 },
  { factor: 'Velocidad de las Transacciones', influence: 5 },
  { factor: 'Entrada de datos en Línea', influence: 3 },
  { factor: 'Diseño para la eficiencia del usuario final', influence: 5 },
  { factor: 'Actualización de datos en línea', influence: 8 },
  { factor: 'Complejidad del proceso lógico interno', influence: 0 },
  { factor: 'Reutilización del código', influence: 5 },
  { factor: 'Facilidad de instalación', influence: 5 },
  { factor: 'Facilidad de operaciones', influence: 5 },
  { factor: 'Facilidad de cambios', influence: 5 }
];

const FunctionPointsAnalysis: React.FC = () => {
  const totalInfluence = adjustmentFactors.reduce((sum, factor) => sum + factor.influence, 0);
  const adjustmentFactor = 1.17;
  const adjustedFunctionPoints = 262.08;
  const estimatedHours = 2096.64;

  return (
    <div className="slide">
      <div className="slide-content">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center">
            <Calculator className="mr-4 text-primary-600" size={40} />
            Análisis de Puntos de Función
          </h1>
          <p className="text-xl text-gray-600">
            Cálculo detallado de la complejidad funcional del sistema
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="metric-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">PFN (Brutos)</h3>
              <Database className="text-blue-600" size={24} />
            </div>
            <p className="text-3xl font-bold text-blue-600">224</p>
            <p className="text-sm text-gray-600">Puntos de función no ajustados</p>
          </div>

          <div className="metric-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Factor de Ajuste</h3>
              <ArrowRight className="text-purple-600" size={24} />
            </div>
            <p className="text-3xl font-bold text-purple-600">1.17</p>
            <p className="text-sm text-gray-600">Basado en 52 puntos de influencia</p>
          </div>

          <div className="metric-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">PFA (Ajustados)</h3>
              <FileInput className="text-green-600" size={24} />
            </div>
            <p className="text-3xl font-bold text-green-600">262.08</p>
            <p className="text-sm text-gray-600">Puntos de función ajustados</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="table-container">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 px-6 pt-4">Componentes Funcionales</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Tipo de Componente</th>
                  <th>Simple</th>
                  <th>Medio</th>
                  <th>Complejo</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {functionPointsData.map((item, index) => (
                  <tr key={index}>
                    <td className="font-semibold text-gray-900">{item.type}</td>
                    <td className="text-green-600">{item.simple}</td>
                    <td className="text-yellow-600">{item.medium}</td>
                    <td className="text-red-600">{item.complex}</td>
                    <td className="font-semibold text-blue-600">{item.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="table-container">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 px-6 pt-4">Factores de Ajuste</h3>
            <div className="max-h-80 overflow-y-auto">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Factor</th>
                    <th>Influencia</th>
                  </tr>
                </thead>
                <tbody>
                  {adjustmentFactors.map((factor, index) => (
                    <tr key={index}>
                      <td className="text-sm">{factor.factor}</td>
                      <td className="text-center">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          factor.influence >= 5 ? 'bg-red-100 text-red-800' :
                          factor.influence >= 3 ? 'bg-yellow-100 text-yellow-800' :
                          factor.influence > 0 ? 'bg-green-100 text-green-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {factor.influence}
                        </span>
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-blue-50">
                    <td className="font-semibold text-blue-900">Total</td>
                    <td className="text-center font-semibold text-blue-900">{totalInfluence}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Resultados del Cálculo</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">{adjustedFunctionPoints}</p>
              <p className="text-sm text-gray-600">Puntos de Función Ajustados</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">{estimatedHours.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Horas Estimadas</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">52.4</p>
              <p className="text-sm text-gray-600">Semanas Estimadas</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">13.1</p>
              <p className="text-sm text-gray-600">Meses Estimados</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionPointsAnalysis;