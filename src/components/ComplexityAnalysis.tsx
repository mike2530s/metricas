import React from 'react';
import { Target, Layers, Settings, Eye, Database } from 'lucide-react';

const externalInputs = [
  { name: 'Registro_usuario', tables: 2, attributes: 8, complexity: 'Medio' },
  { name: 'Login', tables: 1, attributes: 2, complexity: 'Sencilla' },
  { name: 'Crear_Lugar', tables: 2, attributes: 17, complexity: 'Complejo' },
  { name: 'Actualizar_Lugar', tables: 2, attributes: 17, complexity: 'Complejo' },
  { name: 'Pago', tables: 3, attributes: 5, complexity: 'Complejo' },
  { name: 'Eliminar_lugar', tables: 1, attributes: 1, complexity: 'Sencilla' }
];

const externalOutputs = [
  { name: 'Vista Destinos', tables: 1, fields: 3, complexity: 'Sencillo' },
  { name: 'Detalles del Lugar', tables: 3, fields: 14, complexity: 'Medio' },
  { name: 'Detalles del Destino', tables: 3, fields: 17, complexity: 'Medio' },
  { name: 'Actualizar_Lugar', tables: 3, fields: 11, complexity: 'Medio' },
  { name: 'Vista Destinos por categoria', tables: 2, fields: 3, complexity: 'Sencillo' }
];

const externalQueries = [
  { name: 'Login', files: 2, attributes: 4, complexity: 'Sencillo' },
  { name: 'Información del Usuario', files: 1, attributes: 6, complexity: 'Sencillo' },
  { name: 'Destinos', files: 3, attributes: 5, complexity: 'Sencillo' },
  { name: 'Lugares por categoria', files: 4, attributes: 7, complexity: 'Medio' },
  { name: 'Vista detallada del lugar', files: 5, attributes: 25, complexity: 'Complejo' },
  { name: 'Vista detallada del anuncio', files: 5, attributes: 20, complexity: 'Complejo' },
  { name: 'Lista de anuncios_anunciante', files: 2, attributes: 5, complexity: 'Sencillo' }
];

const internalFiles = [
  { name: 'Usuarios', recordTypes: 2, dataElements: 21, complexity: 'Sencillo' },
  { name: 'Vista detallada', recordTypes: 5, dataElements: 31, complexity: 'Medio' },
  { name: 'Pago', recordTypes: 4, dataElements: 20, complexity: 'Medio' },
  { name: 'Registro_De_Un_usuario', recordTypes: 2, dataElements: 12, complexity: 'Sencillo' },
  { name: 'Info_Usuario', recordTypes: 1, dataElements: 9, complexity: 'Sencillo' },
  { name: 'Vista detallada del anuncio', recordTypes: 5, dataElements: 31, complexity: 'Medio' },
  { name: 'Lista de anuncios_anunciante', recordTypes: 3, dataElements: 21, complexity: 'Medio' }
];

const interfaceDataGroups = [
  { name: 'Anuncios Usuario', recordTypes: 1, complexity: 'Sencillo' },
  { name: 'Anuncios Anunciante', recordTypes: '2-5', complexity: 'Sencillo' },
  { name: 'DetallesAnuncio', recordTypes: '6+', complexity: 'Complejo' },
  { name: 'Perfil', recordTypes: 1, complexity: 'Sencillo' },
  { name: 'Anuncios usuarios', recordTypes: '2-5', complexity: 'Sencillo' },
  { name: 'Detalle del lugar', recordTypes: '2-5', complexity: 'Sencillo' },
  { name: 'Pago', recordTypes: '6+', complexity: 'Complejo' },
  { name: 'Registro', recordTypes: '6+', complexity: 'Complejo' },
  { name: 'Login', recordTypes: '2-5', complexity: 'Sencillo' }
];

const getComplexityColor = (complexity: string) => {
  switch (complexity.toLowerCase()) {
    case 'sencillo':
    case 'sencilla':
      return 'text-green-600 bg-green-50 border-green-200';
    case 'medio':
      return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    case 'complejo':
      return 'text-red-600 bg-red-50 border-red-200';
    default:
      return 'text-gray-600 bg-gray-50 border-gray-200';
  }
};

const ComplexityAnalysis: React.FC = () => {
  return (
    <div className="slide">
      <div className="slide-content">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center">
            <Target className="mr-4 text-primary-600" size={40} />
            Análisis de Complejidad por Componentes
          </h1>
          <p className="text-xl text-gray-600">
            Evaluación detallada de la complejidad de cada tipo de componente funcional
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="metric-card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Layers className="mr-3 text-blue-600" size={24} />
              Entradas Externas
            </h3>
            <div className="space-y-3">
              {externalInputs.map((input, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{input.name}</p>
                    <p className="text-sm text-gray-600">{input.tables} tablas, {input.attributes} atributos</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getComplexityColor(input.complexity)}`}>
                    {input.complexity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="metric-card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Eye className="mr-3 text-green-600" size={24} />
              Salidas Externas
            </h3>
            <div className="space-y-3">
              {externalOutputs.map((output, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{output.name}</p>
                    <p className="text-sm text-gray-600">{output.tables} tablas, {output.fields} campos</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getComplexityColor(output.complexity)}`}>
                    {output.complexity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="metric-card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Settings className="mr-3 text-purple-600" size={24} />
              Consultas Externas
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {externalQueries.map((query, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{query.name}</p>
                    <p className="text-sm text-gray-600">{query.files} archivos, {query.attributes} atributos</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getComplexityColor(query.complexity)}`}>
                    {query.complexity}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="metric-card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Target className="mr-3 text-orange-600" size={24} />
              Archivos Internos
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {internalFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{file.name}</p>
                    <p className="text-sm text-gray-600">{file.recordTypes} tipos, {file.dataElements} elementos</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getComplexityColor(file.complexity)}`}>
                    {file.complexity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="metric-card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Database className="mr-3 text-indigo-600" size={24} />
              Grupos Lógicos de Datos de Interfaz
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {interfaceDataGroups.map((group, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{group.name}</p>
                    <p className="text-sm text-gray-600">{group.recordTypes} tipos de registro</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getComplexityColor(group.complexity)}`}>
                    {group.complexity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Resumen de Complejidad</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <p className="text-2xl font-bold text-green-600">Simple</p>
              <p className="text-sm text-gray-600">Componentes de baja complejidad</p>
              <p className="text-xs text-gray-500 mt-1">Fácil implementación y mantenimiento</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <p className="text-2xl font-bold text-yellow-600">Medio</p>
              <p className="text-sm text-gray-600">Complejidad moderada</p>
              <p className="text-xs text-gray-500 mt-1">Requiere planificación adicional</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <p className="text-2xl font-bold text-red-600">Complejo</p>
              <p className="text-sm text-gray-600">Alta complejidad</p>
              <p className="text-xs text-gray-500 mt-1">Mayor esfuerzo de desarrollo</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm">
              <p className="text-2xl font-bold text-blue-600">Total</p>
              <p className="text-sm text-gray-600">Todos los componentes</p>
              <p className="text-xs text-gray-500 mt-1">Análisis completo del sistema</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplexityAnalysis;