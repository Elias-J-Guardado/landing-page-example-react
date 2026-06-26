function Services() {

    const services = [
        {title: "Restauración completa", descripcion: "Devolvemos tu auto a su estado original"},
        {title: "Restauración completa", descripcion: "Devolvemos tu auto a su estado original"},
        {title: "Restauración completa", descripcion: "Devolvemos tu auto a su estado original"},
        {title: "Restauración completa", descripcion: "Devolvemos tu auto a su estado original"},
        {title: "Restauración completa", descripcion: "Devolvemos tu auto a su estado original"},
    ]

    return(
        <section className="px-12 py-16">
            <p className="text-center text-4xl mb-8">Services</p>
            <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
                {services.map((service, i) => (
                    <div 
                        key={i}
                        className="min-w-64 border border-white/20 bg-[#5e698c] rounded-2xl p-6 flex flex-col gap-2 shrink-0"
                    >
                        <h3> {service.title} </h3>
                        <p> {service.descripcion} </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export { Services }