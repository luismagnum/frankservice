"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-80 md:h-screen flex flex-col justify-center items-center lg:px-32 px-2">
      <div className="absolute inset-0 z-[-1]">
        <div>
        <Image 
        src="/reparar.jpg"
        alt="Fondo del Hero"
        width={1920} 
        height={1080} 
        priority={true} 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>

      <div className="max-w-2xl text-white mb-52 md:mb-48">
        <h2 className="text-base py-6 md:mt-0 md:text-5xl text-blue-500 md:text-white">Smartphone</h2>
        <h1 className="text-3xl md:text-8xl font-bold">
          Frank <span className="text-teal-500">Services</span>
        </h1>
        <div data-aos="fade-right" className="mt-4 text-base md:text-4xl">
          Reparacion y Mantenimiento de celulares
        </div>
        <a 
          href="#contacto"
          className="mt-6 inline-block px-4 py-2 bg-sky-900 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Contacto
        </a>
      </div>
    </section>
  );
};

export default Hero;
