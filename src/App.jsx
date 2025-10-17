import { Carrossel } from "./components/Carrossel ";
import { Estruturas } from "./components/Estruturas";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Local } from "./components/Local";
import { Recursos } from "./components/Recursos";

export default function App() {

  

  return (
    

    <div className="bg-blue-50 text-gray-800 flex flex-col min-h-screen">

      <Header />

      <main className="flex-grow container mx-auto px-2 py-4 text-center">

        <section className="bg-white p-1 rounded-lg shadow-lg">
          <Hero />
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-700">Clube Novo Rio</h2>
          <Recursos />
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-700">Estruturas</h2>
          <Estruturas />
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-700">Serviços no Clube</h2>
          <Carrossel />
        </section>

        <section className="mt-16">
          <Local />
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

