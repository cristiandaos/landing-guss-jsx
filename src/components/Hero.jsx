function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="mb-8 leading-relaxed max-w-2xl mx-auto title-font sm:text-4xl text-3xl font-medium text-gray-900">
            Descuentos navideños!
          </h1>
          <p className="mb-8 leading-relaxed max-w-2xl mx-auto text-center">
  Aprovecha los mejores descuentos en todos los productos para
  celebrar en esta navidad. Regala accesorios, juguetes y más
  productos importados desde China a un excelente precio.
</p>

          <div className="flex justify-center mb-8 leading-relaxed max-w-2xl mx-auto">
            <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg">
              Ver productos
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Contacto
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://images.creativefabrica.com/products/thumbnails/2023/10/11/EgUUUAqTX/2Wbq2imFPaYLnbaAahkCQe2LCpw.png"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
