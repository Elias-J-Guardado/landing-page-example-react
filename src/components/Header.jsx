function Header() {
    return (
        <section
            style={{ backgroundImage: 'url(/nelli-chaitanya-9yu5JZygjv0-unsplash.jpg)' }}
            className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
        >
            { /* Contenido del header */}
            <div className="absolute inset-0 bg-black/50" />
            <nav className="relative z-10">
                <a className="block text-white text-4xl font-black uppercase pt-4 p-4 cursor-pointer">CarGrow</a>
                <div>
                    <ul>
                        <li className="text-white">¿Quines somos?</li>
                        <li className="text-white">Servicios</li>
                        <li className="text-white">Contacto</li>
                    </ul>
                </div>
            </nav>

            <div className="relative z-10 flex flex-col justify-end h-full p-12 py-100">
                <h1 className="text-white text-6xl font-black uppercase">
                    Restauraciones Profesionales
                </h1>
                <p className="text-white/70 mt-2">Restauraciones al mejor precio</p>
                <button className="mt-6 bg-[#151d36] text-white px-8 py-3 rounded-full uppercase font-bold w-fit">
                    Agenda tu cita
                </button>
            </div>

        </section>
    )
}

export {
    Header
};