export function Local() {
  return (

    // <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 mt-16">
    <div className="flex flex-col items-center">
      
      <div className="grid sm:grid-cols-2 gap-5 mb-8">

        <div className="bg-blue-800 text-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h2 className="text-lg font-bold p-1 mb-4 border-b">Contatos</h2>
          <div className="leading-8">
            Telefones Secretaria:
            2490-2315 |
            2490-1393 |
            2490-7038
            <p>Endereço: Av. Miguel Antônio Fernandes, 15</p>
            <p>Recreio dos Bandeirantes, Rio de Janeiro - RJ, 22790-682</p>
          </div>
        </div>

        <div className="bg-blue-800 text-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h2 className="text-lg font-bold p-1 mb-4 border-b">Internet</h2>
          <div className="leading-16">
            <a href="https://www.instagram.com/clubenovorio">
              <img className="mr-2 w-8 inline" src="../../../dist/assets/imagens/instagram-1-svgrepo-com.svg" alt="" />
              <span className="text-xl tracking-widest p-1 rounded-xl bg-blue-700">@clubenovorio</span>
            </a>
          </div>
          <div className="leading-12">
            <a href="https://wa.me/5521970403459">
              <img className="mr-2 w-8 inline" src="../../../dist/assets/imagens/whatsapp-svgrepo-com.svg" alt="" />
              <span className="text-xl tracking-widest p-1 rounded-xl bg-blue-700">97040-3459</span>
            </a>
          </div>
          
        </div>
      </div>


      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
        <h2 className="text-lg font-bold p-1 mb-4 border-b">Localização</h2>
        <a href="https://maps.app.goo.gl/Fstx5YeskizP36138" target="_blank" rel="noopener noreferrer">
          <img className="w-full" src="../../../dist/assets/imagens/maps-novo_rio.png" alt="Mapa Clube Novo Rio" />
        </a>

      </div>
    </div>

  )
}