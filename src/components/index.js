"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-80 md:h-screen flex flex-col justify-center items-center lg:px-32 px-4">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-[-1]">
        <Image 
          src="/reparar.jpg"
          alt="Fondo del Hero"
          width={1920} 
          height={1080} 
          priority={true} 
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Contenido */}
      <div className="max-w-2xl text-white text-center md:text-left mt-10 md:mt-0">
        <h2 className="text-base font-bold py-2 md:py-6 md:text-5xl text-white">
          ¿Que le paso a tu celular?
        </h2>
        <h1 className="text-4xl md:text-8xl font-bold">
          Frank <span className="text-blue-400">Services</span>
        </h1>
        <div data-aos="fade-right" className="mt-4 text-lg md:text-4xl">
          Reparación y Mantenimiento de celulares
        </div>
        <a 
          href="#contacto"
          className="mt-6 inline-block px-6 py-3 bg-sky-900 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Contacto
        </a>
      </div>
    </section>
  );
};

export default Hero;
