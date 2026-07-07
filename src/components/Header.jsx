import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

function Header() {

    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        AOS.init({ duration: 500 })
    }, [])

    return (
        <section
            style={{ backgroundImage: 'url(/nelli-chaitanya-9yu5JZygjv0-unsplash.jpg)' }}
            className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
        >
            { /* Contenido del header */}
            <div className="absolute inset-0 bg-black/50" />
            <nav className="relative z-10 flex items-center justify-between px-5">
                <a data-aos="zoom-in" className="block text-white text-6xl font-black uppercase pt-4 p-4 cursor-pointer">CarGrow</a>
                
                <button 
                    onClick={() => setMenuOpen(!menuOpen)}
                    className='md:hidden flex flex-col gap-1.5 cursor-pointer'
                >
                    <span className='w-8 h-0.5 bg-white block'/>
                    <span className='w-8 h-0.5 bg-white block'/>
                    <span className='w-8 h-0.5 bg-white block'/>
                </button>
                <div className="grid place-content-center" id="navbar">
                        <ul className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-5 absolute md:relative top-16 md:top-0 right-4 md:right-0 bg-black/90 md:bg-transparent p-4 md:p-0 rounded-xl`}>
                            <li>
                                <a data-aos="zoom-in" href="#" className="text-white text-2xl">¿Quines somos?</a>
                            </li>
                            <li >
                                <a data-aos="zoom-in" href="#" className="text-white text-2xl">Servicios</a>
                            </li>
                            <li >
                                <a data-aos="zoom-in" href="#" className="text-white text-2xl">Contacto</a>
                            </li>
                        </ul>
                </div>
            </nav>

            <div className="relative z-10 flex flex-col justify-center h-full p-8 md:p-12">
                <h1 data-aos="zoom-in" className="text-white text-5xl md:text-6xl font-black uppercase">
                    Restauraciones Profesionales
                </h1>
                <p data-aos="zoom-in" className="text-white/70 mt-2 text-2xl">Restauraciones al mejor precio</p>
                <a data-aos="zoom-in" className="mt-6 bg-[#151d36] text-white p-4 rounded-full uppercase font-bold w-fit cursor-pointer text-center 
                text-2xl hover:bg-[#1C2B47] focus:outline-offset-2 focus:outline-bg[#203052]">
                    Agenda tu cita
                </a>
            </div>

        </section>
    )
}

export {
    Header
};