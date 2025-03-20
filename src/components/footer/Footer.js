import Image from "next/image"
import { FaFacebook, FaInstagram, } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";


const section = [
    {
        title:"Servicios",
        items:["vidrio roto","bateria dañada","pin de carga"]
    },
    {
        title:"Accesorios",
        items:["fundas","cargador rapido","vidrio templado"]
    },
]

const items = [
    {
        name:"Facebook",
        icon:FaFacebook,
        link: '/'
    },
    {
        name:"Instagram",
        icon:FaInstagram,
        link: '/'
    },
    {
        name:"Twitter",
        icon:FaXTwitter,
        link: '/'
    },
]

const Footer = () => {
  return (
    <div className='w-full mt-12 text-gray-300 py-y px-8'>
        <br></br>
        <span>
        <Image src='/logo.png' alt='logo' width={200} height={200} className='rounded-full text-center mx-auto mb-6 object-contain'/>
        </span>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 text-center border-b-2 border-sky-900 py-4'>
        {
            section.map((section,index)=>(
                <div key={index}>
                    <h6 className='text-teal-500 font-bold uppercase pt-2'>
                        {section.title}
                    </h6>
                    <ul>
                        {section.items.map((item,i)=>(
                            <li key={i}
                            className='py-1 text-white cursor-pointer'>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))
        }
        <div className='col-span-2 pt-8 md:pt-2'>
            <p className='text-teal-500 text-center font-bold uppercase'>
             Informacion
            </p>
            <div className='flex flex-col sm:flex-row sm:justify-center sm:items-center text-center mx-auto mt-2'>
                <button className="inline-block font-semibold tracking-wide border-none justify-center text-center bg-blue-700 hover:text-blue-900 duration-300 px-8 sm:px-16 py-2 font-[Poppins] rounded-xl md:mr-15 md:rounded-md md:text-white w-full md:w-auto min-w-[200px] mx-0 sm:mx-6">
                <a href="https://wa.me/542984792639?text=Hola quiero un presupuesto" target="_blank" className="flex items-center justify-center space-x-2">
                <Image src="./whatsapp-fill.svg" alt="what" width={30} height={30} className='flex-shrink-0'/>
                <span className='font-bold sm:text-sm md:text-xl'>Contacto</span>
                </a>
                </button>
            </div>
        </div>
      </div>
        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-center
        sm:flex-row text-center text-teal-500'>
            <p className='text-white py-4'>
                @2025 Dev Luis E. Diaz.
            </p>

            <div className='flex justify-center sm:w-[300px] pt-4 text-2xl mb-10 gap-6'>
                {
                    items.map((x,index)=>{
                        return <x.icon key={index} className='hover:text-white cursor-pointer'/>
                })
                }
            </div>
        </div>
        <div className='flex items-center justify-center mx-auto'>
            <button className='grid grid-cols-1'>
              <a className='flex text-center text-teal-500 font-semibold text-xl hover:text-slate-200 mb-10 scroll-smooth' href="/">
                Villa Regina
            </a>
            </button>
        </div>
    </div>
  )
}

export default Footer