"use client";
import { FaTools, FaClock, FaShieldAlt } from "react-icons/fa";

const Garantias = () => {
  return (
    <section className="bg-[#0d0d0d] py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-400 mb-8">
          Calidad Asegurada
        </h2>

        <div data-aos="fade-left" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-transform">
            <FaTools className="text-blue-500 text-6xl" />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">Usamos repuestos originales</h3>
          </div>

          <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-transform">
            <FaClock className="text-green-500 text-6xl" />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">En 30 minutos revisamos tu celular</h3>
          </div>

          <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-transform">
            <FaShieldAlt className="text-yellow-500 text-6xl" />
            <h3 className="mt-4 text-xl font-semibold text-gray-800">30 días de garantía</h3>
            <p className="text-gray-600 text-center mt-2">
              Si algo no funciona bien, lo revisamos sin costo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Garantias;
