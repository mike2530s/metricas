import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BarChart3, TrendingUp, FileText, Calculator, Target, Award } from 'lucide-react';
import TitleSlide from './components/TitleSlide';
import MetricsOverview from './components/MetricsOverview';
import SystemsComparison from './components/SystemsComparison';
import FunctionPointsAnalysis from './components/FunctionPointsAnalysis';
import ComplexityAnalysis from './components/ComplexityAnalysis';
import ProjectEstimation from './components/ProjectEstimation';
import Conclusions from './components/Conclusions';

const slides = [
  { id: 'title', title: 'Portada', icon: FileText, component: TitleSlide },
  { id: 'overview', title: 'Resumen de Métricas', icon: BarChart3, component: MetricsOverview },
  { id: 'comparison', title: 'Comparación de Sistemas', icon: TrendingUp, component: SystemsComparison },
  { id: 'function-points', title: 'Análisis de Puntos de Función', icon: Calculator, component: FunctionPointsAnalysis },
  { id: 'complexity', title: 'Análisis de Complejidad', icon: Target, component: ComplexityAnalysis },
  { id: 'estimation', title: 'Estimación del Proyecto', icon: Award, component: ProjectEstimation },
  { id: 'conclusions', title: 'Conclusiones', icon: Award, component: Conclusions },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const CurrentComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-lg font-semibold text-gray-900">Métricas de Software</h1>
              <span className="text-sm text-gray-500">
                {currentSlide + 1} de {slides.length}
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              {slides.map((slide, index) => {
                const Icon = slide.icon;
                return (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      index === currentSlide
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                    }`}
                    title={slide.title}
                  >
                    <Icon size={18} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        <CurrentComponent />
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-6 right-6 flex items-center space-x-3">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-3 bg-white rounded-full shadow-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl transition-all duration-200"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-3 bg-primary-600 text-white rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-700 hover:shadow-xl transition-all duration-200"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-gray-200">
        <div
          className="h-full bg-primary-600 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
}

export default App;