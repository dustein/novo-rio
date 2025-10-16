import React, { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-blue-950 hover:text-amber-600 transition-colors flex items-center gap-2">
          <img src="../images/novo-rio-logo.png" className="max-w-20" alt="" />
          Novo Rio Country Club
        </a>
        

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#" className="text-gray-600 hover:text-amber-500 transition-colors">Início</a>
          <a href="#" className="text-gray-600 hover:text-amber-500 transition-colors">Sobre</a>
          <a href="#" className="text-gray-600 hover:text-amber-500 transition-colors">Serviços</a>
          <a href="#" className="bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors shadow">
            Contato
          </a>
        </div>

        {/* Botão Hamburger (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-amber-500 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <a href="#" className="block py-3 px-6 text-gray-600 hover:bg-amber-50 hover:text-amber-500 transition-colors">Início</a>
          <a href="#" className="block py-3 px-6 text-gray-600 hover:bg-amber-50 hover:text-amber-500 transition-colors">Sobre</a>
          <a href="#" className="block py-3 px-6 text-gray-600 hover:bg-amber-50 hover:text-amber-500 transition-colors">Serviços</a>
          <a href="#" className="block py-3 px-6 text-gray-600 hover:bg-amber-50 hover:text-amber-500 transition-colors">Contato</a>
        </div>
      )}
    </header>
  );
};