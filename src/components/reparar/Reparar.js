import Image from "next/image";

const Reparar = () => {
  return (
    <section className="py-12 mt-4 px-6 md:px-12 md:mx-14">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
        <div data-aos="fade-up" className="md:w-1/2">
          <h2 className="text-3xl md:text-6xl font-bold text-blue-400 text-center md:text-left md:ml-20">
            Servicios
          </h2>
          <ul className="mt-8 space-y-4 md:ml-20">
            <li className="flex items-center text-lg">
              <span className="text-blue-500 text-2xl mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </span>
              <span className="text-white text-lg">Pantallas Rotas</span>
            </li>
            <li className="flex items-center text-lg">
              <span className="text-blue-500 text-2xl mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </span>
              <span className="text-white text-lg">Vidrio Templado</span>
            </li>
            <li className="flex items-center text-lg">
              <span className="text-blue-500 text-2xl mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </span>
              <span className="text-white text-lg">Equipos mojados</span>
            </li>
            <li className="flex items-center text-lg">
              <span className="text-blue-500 text-2xl mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </span>
              <span className="text-white text-lg">Batería dañada</span>
            </li>
            <li className="flex items-center text-lg">
              <span className="text-blue-500 text-2xl mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </span>
              <span className="text-white text-lg">Pin de carga</span>
            </li>
            <li className="flex items-center text-lg">
              <span className="text-blue-500 text-2xl mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </span>
              <span className="text-white text-lg">Periféricos</span>
            </li>
          </ul>
        </div>

        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center md:justify-start">
          <Image
            src="/hero.jpg"
            alt="Servicio de reparación"
            width={500}
            height={350}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Reparar;
