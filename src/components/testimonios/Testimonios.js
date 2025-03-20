import Slider from 'react-slick';
import Image from 'next/image';
import BgImage from '../../../public/testi.jpg';

import Imagen1 from '../../../public/logo.png';
import Imagen2 from '../../../public/logo.png';
import Imagen3 from '../../../public/logo.png';

const BgStyle = {
    backgroundImage: `url(${BgImage.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: "repeat",
};

const TestimonialData = [
    {
        id: 1,
        name: "Luis Díaz.",
        text: "Increíble atención. Mi celular no encendía y en menos de dos horas lo arreglaron. ¡Super agradecido!¡Lo recomiendo al 100%!",
        imag: Imagen1,
    },
    {
        id: 2,
        name: "Zully C.",
        text: "Fui el lunes desesparada al taller de frank porque se me rompio la pantalla de mi Samsung. Y fue el mejor precio .Super recomendado!",
        imag: Imagen2,
    },
    {
        id: 3,
        name: "Alonso Diaz.",
        text: "Rápidos y confiables. Me solucionaron un problema con la batería en el mismo día. Excenete atencion ¡Muy buen precio!. Lo recomiendo.",
        imag: Imagen3,
    },
    {
        id: 4,
        name: "Alejandro",
        text: "Excelente servicio. Llevé mi celular con la pantalla rota y en pocas horas lo tenía como nuevo. 100% recomendado. Y lo mejor el precio..",
        imag: Imagen1,  
    },
];

const Testimonios = () => {
    const settings = {
        dots: true,
        arrow: false,
        infinite: true,
        speed: 400,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div style={BgStyle}>
            <div className='bg-black/30'>
                <div className="container">
                    <div data-aos="fade-up" className='text-center py-5 mb-12'>
                        <h1 className='text-3xl md:text-5xl text-sky-900 font-bold'>Testimonios</h1>
                    </div>
                    <div data-aos="zoom-in">
                        <Slider {...settings}>
                            {TestimonialData.map(({ id, name, text, imag }) => {
                                return (
                                    <div key={id} className='my-6'>
                                        <div className='flex flex-col gap-6 shadow-lg py-8 px-6 mx-4 rounded-3xl bg-sky-900 mb-2'>
                                            <div className='flex flex-col items-center'>
                                                <p className='text-xl text-white'>{text}</p>
                                            </div>
                                            <div className="flex items-center">
                                                <Image
                                                    src={imag} 
                                                    alt={name}
                                                    className="rounded-full"
                                                    width={64}
                                                    height={64}
                                                />
                                                <p className='text-sm text-white ml-2'>{name}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonios;