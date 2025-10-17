import React, { useState } from 'react';

export function Carrossel() {

  const [currentIndex, setCurrentIndex] = useState(0);
    
    const items = [
      {
        title: "Sou Clean",
        description: "Serviço de Lava a Jato."
      },
      {
        title: "The Place", 
        description: "Academia de Misculação e Fitness."
      },
      {
        title: "NTC",
        description: "Núcleo de Tênis City."
      },
      {
        title: "Novo Rio Soccer",
        description: "Escolinha de Futebol do Fluminense"
      }
    ];
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

  return (
    
        
          <div className="relative max-w-md mx-auto w-fit">
    
          {/* Card atual */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="font-bold text-xl mb-2 text-blue-800">
              {items[currentIndex].title}
            </h3>
            <p className="text-gray-600">
              {items[currentIndex].description}
            </p>
          </div>

          {/* Botões de navegação */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-yellow-300 text-blue-950 p-2 rounded-full hover:bg-yellow-500 transition-colors"
          >
            ←
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-amber-300 text-blue-950 p-2 rounded-full hover:bg-amber-500 transition-colors"
          >
            →
          </button>

          {/* Indicadores */}
          <div className="flex justify-center mt-4 space-x-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-amber-300' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

  )
}