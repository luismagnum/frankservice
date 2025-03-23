import Image from "next/image";

const Reparar = () => {
  return (
    <section className="w-full bg-[#0d0d0d] py-12 mt-0 px-6 md:px-12 ">
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
              <span className="text-white text-lg">Pantallas Rotas? Display con rayas?</span>
            </li>
            <li className="flex items-center text-lg">
              <span className="text-blue-500 text-2xl mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </span>
              <span className="text-white text-lg">Vidrio Templado rallado o roto?</span>
            </li>
            <li className="flex items-center text-lg">
              <span className="text-blue-500 text-2xl mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </span>
              <span className="text-white text-lg">Equipos mojados? No encienden?</span>
            </li>
            <li className="flex items-center text-lg">
              <span className="text-blue-500 text-2xl mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </span>
              <span className="text-white text-lg">Batería dañada, No carga? Dura Poco?</span>
            </li>
            <li className="flex items-center text-lg">
              <span className="text-blue-500 text-2xl mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </span>
              <span className="text-white text-lg">Pin de carga? Tienes que presionarlo?</span>
            </li>
            <li className="flex items-center text-lg">
              <span className="text-blue-500 text-2xl mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </span>
              <span className="text-white text-lg">Periféricos? No se escucha?</span>
            </li>
          </ul>
        </div>

        <div className="mt-6 md:mt-2 md:w-1/2 flex justify-center md:justify-start">
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
