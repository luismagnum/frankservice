"use client";
import "./globals.css";
import { useEffect} from 'react';
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import Hero from "@/components";
import Navbar from "@/components/navbar/Navbar";
import Tecnico from "@/components/tecnico/Tecnico";
import Reparar from "@/components/reparar/Reparar";
import Footer from "@/components/footer/Footer";
import Testimonios from "@/components/testimonios/Testimonios";
import Marcas from "@/components/marcas/Marcas";
import Boton from "@/components/Boton";
import FormasPago from "@/components/formaspago/FormasPago";
import Garantia from "@/components/garantia/Garantia";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset:100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
    }, []);
    
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <div id="reparar">
      <Reparar />
      </div>
      <div id="tecnico">
      <Tecnico />
      </div>
      <Garantia />
      <Marcas />
      <Testimonios />
      <FormasPago />
      <div id="footer">
      <Footer />
      </div>
      <Boton />
    </main>
  );
}
