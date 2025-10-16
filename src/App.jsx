import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import React, { useState } from 'react';

export default function App() {

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const items = [
    {
      title: "Seja Sócio",
      description: "Aproveite o valor promocional 2025 e seja sócio do Country Club Novo Rio."
    },
    {
      title: "Day Use", 
      description: "Sócio por 1 dia! Conheça nosso day use, e aproveite todo o lazer do clube por um valor único."
    },
    {
      title: "O Clube",
      description: "Conheça a história do clube e os cuidados com nossos sócios."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    

    <div className="bg-gray-100 text-gray-800 flex flex-col min-h-screen">

      <Header />

      <main className="flex-grow container mx-auto px-6 py-12 text-center">

        <section className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Bem-vindo ao <span className="text-amber-500">Novo Rio</span>
          </h1>
          

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Este é um exemplo de layout moderno e responsivo criado com React e Tailwind CSS.
          </p>

          <div className="mt-8">
            <a href="#" className="bg-amber-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-600 transition-colors shadow-lg transform hover:scale-105 inline-block">
              Saiba Mais
            </a>
          </div>

        </section>

        <section className="mt-16">

          <h2 className="text-3xl font-bold mb-8 text-gray-700">Nossos Recursos</h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="font-bold text-xl mb-2 text-amber-600">Seja Sócio</h3>
              <p className="text-gray-600">Aproveite o valor pormocional 2025 e seja sócio do Country Club Novo Rio.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="font-bold text-xl mb-2 text-amber-600">Day Use</h3>
              <p className="text-gray-600">Sócio por 1 dia! Conheça nosso day use, e aproveite todo o lazer do clube por um valor único.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="font-bold text-xl mb-2 text-amber-600">O Clube</h3>
              <p className="text-gray-600">Conheça a história do clube e os cuidados com nossos sócios.</p>
            </div>

          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-700">Estruturas</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-5">

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow w-64 h-40">
              <h3 className="font-bold text-xl mb-2 text-amber-600">Piscinas</h3>
              <p className="text-gray-600">...</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow w-64 h-40">
              <h3 className="font-bold text-xl mb-2 text-amber-600">Saunas</h3>
              <p className="text-gray-600">...</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow w-64 h-40">
              <h3 className="font-bold text-xl mb-2 text-amber-600">Parquinho</h3>
              <p className="text-gray-600">...</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow w-64 h-40">
              <h3 className="font-bold text-xl mb-2 text-amber-600">Quadra Poliesportiva</h3>
              <p className="text-gray-600">...</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow w-64 h-40">
              <h3 className="font-bold text-xl mb-2 text-amber-600">Quadra de Areia</h3>
              <p className="text-gray-600">...</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow w-64 h-40">
              <h3 className="font-bold text-xl mb-2 text-amber-600">Campo de Futebol</h3>
              <p className="text-gray-600">...</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow w-64 h-40">
              <h3 className="font-bold text-xl mb-2 text-amber-600">Quadras de Tênis</h3>
              <p className="text-gray-600">...</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow w-64 h-40">
              <h3 className="font-bold text-xl mb-2 text-amber-600">Parquinho</h3>
              <p className="text-gray-600">...</p>
            </div>

          </div>
        
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-700">Nossos Recursos</h2>
        
          <div className="relative max-w-md mx-auto">
    
          {/* Card atual */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 className="font-bold text-xl mb-2 text-amber-600">
              {items[currentIndex].title}
            </h3>
            <p className="text-gray-600">
              {items[currentIndex].description}
            </p>
          </div>

          {/* Botões de navegação */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-amber-600 text-white p-2 rounded-full hover:bg-amber-700 transition-colors"
          >
            ←
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-amber-600 text-white p-2 rounded-full hover:bg-amber-700 transition-colors"
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
                  index === currentIndex ? 'bg-amber-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>


      </main>

      <Footer />

    </div>

    
  );
};



// Componente Principal da Aplicação
// function App() {
//   return (
//     <div className="bg-gray-100 text-gray-800 flex flex-col min-h-screen">
//       <Header />
//       <MainContent />
//       <Footer />
//     </div>
//   );
// }

