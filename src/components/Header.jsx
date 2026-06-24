import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

function Header() {
    useEffect(() => {
        AOS.init({duration: 1800})
    }, [])

    return (
        <section
            style={{ backgroundImage: 'url(/nelli-chaitanya-9yu5JZygjv0-unsplash.jpg)' }}
            className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
        >
            { /* Contenido del header */}
            <div
             className="absolute inset-0 bg-black/50" />
            <nav className="relative z-10 flex items-center justify-between">
                <a data-aos="zoom-in" className="block text-white text-6xl font-black uppercase pt-4 p-4 cursor-pointer">CarGrow</a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10
                justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading
                focus:ring-2 focus:ring-neutral-ternary" aria-controls="navar-default" aria-expanded="false">
                    <span className="sr-only">Abrir menu expandido</span>
                    {/* <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg> */}
                </button>
                
                <div className="hidden w-full md:block md:w-auto px-4 mt-4" id="navbar">
                    <ul className="flex gap-5">
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