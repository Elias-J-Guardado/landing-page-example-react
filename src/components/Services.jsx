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
            <div className=" flex flex-row gap-3 justify-center">
                {services.map((service, i) => (
                    <div 
                        key={i}
                        className="w-64 border border-white/20 bg-[#5e698c] rounded-2xl p-6 flex flex-col gap-2 shrink-0 text-center"
                    >
                        <h3 className="text-white text-4xl"> {service.title} </h3>
                        <p className="text-yellow-500 text-2xl"> {service.descripcion} </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export { Services }