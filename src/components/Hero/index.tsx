export function Hero() {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
        Bem-vindo ao <span className="text-blue-800">Novo Rio</span>
      </h1>
      

      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Este é um exemplo de layout moderno e responsivo criado com React e Tailwind CSS.
      </p>

      <div className="mt-8">
        <a href="#" className="bg-yellow-300 text-blue-950 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors shadow-lg transform hover:scale-105 inline-block">
          Saiba Mais
        </a>
      </div>
    </>


  )
}