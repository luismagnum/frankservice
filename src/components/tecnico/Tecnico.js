import Image from "next/image";

const Tecnico = () => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center text-white text-center">
      <div className="absolute inset-0">
        <Image
          src="/tecnico.jpg" 
          alt="Servicio Técnico"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>

      <div data-aos="fade-right" className="relative z-10 px-6">
        <h2 className="text-3xl md:text-5xl font-bold">Servicio técnico y <span className="text-blue-400">reparación de equipos</span></h2>
        <p className="mt-4 text-lg md:text-2xl">
          Lo revisamos en el momento, te realizamos un diagnóstico completo y en pocas horas lo tenés como nuevo.
        </p>
        <button className="mt-6 px-6 py-3 bg-sky-900 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
          Cotizar ahora
        </button>
      </div>
    </div>
  );
};

export default Tecnico;
