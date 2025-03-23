"use client";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { SiMercadopago } from "react-icons/si";

const FormasPago = () => {
  return (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-sky-900 mb-8">
          Aceptamos las siguientes formas de pago
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex flex-col items-center justify-center bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-transform">
            <FaCcVisa className="text-blue-600 text-6xl" />
            <p className="mt-3 text-lg font-semibold text-gray-800">Visa</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-transform">
            <FaCcMastercard className="text-red-600 text-6xl" />
            <p className="mt-3 text-lg font-semibold text-gray-800">Mastercard</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-transform">
            <SiMercadopago className="text-blue-500 text-6xl" />
            <p className="mt-3 text-lg font-semibold text-gray-800">Mercado Pago</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormasPago;
