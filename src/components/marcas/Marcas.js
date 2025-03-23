import { SiMotorola, SiSamsung, SiXiaomi, SiLg } from "react-icons/si";

const Marcas = () => {
  return (
    <section className="bg-[#0d0d0d] py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-400 mb-8">
          Trabajamos con las siguientes marcas
        </h2>

        <div data-aos="zoom-in-up" className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center justify-center bg-white shadow-lg p-6 rounded-lg">
            <SiMotorola className="text-blue-500 text-6xl" />
            <p className="mt-3 text-lg font-semibold text-gray-800">Motorola</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-white shadow-lg p-6 rounded-lg">
            <SiSamsung className="text-blue-700 text-6xl" />
            <p className="mt-3 text-lg font-semibold text-gray-800">Samsung</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-white shadow-lg p-6 rounded-lg">
            <SiXiaomi className="text-orange-500 text-6xl" />
            <p className="mt-3 text-lg font-semibold text-gray-800">Xiaomi</p>
          </div>

          <div className="flex flex-col items-center justify-center bg-white shadow-lg p-6 rounded-lg">
            <SiLg className="text-red-500 text-6xl" />
            <p className="mt-3 text-lg font-semibold text-gray-800">Lg</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marcas;
