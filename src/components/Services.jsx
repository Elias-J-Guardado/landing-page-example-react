function Services() {

    const services = [
        {title: "Restauración completa", descripcion: "Devolvemos tu auto a su estado original, cada detalle cuidado al máximo."},
        {title: "Pintura y Carrocería", descripcion: "Corrección de abolladuras y pintura personalizada con acabado profesional."},
        {title: "Tapicería", descripcion: "Restauración de interiores, asientos y techo con materiales de calidad."},
        {title: "Motor y Mećanica", descripcion: "Reconstrucción de motor y transmisión para máximo rendimiento."},
        {title: "Llantas y Mécanica", descripcion: "Alineación, balanceo y suspensión deportiva a tu medida."},
        {title: "Detailing", descripcion: "Pulido, encerado y protección de pintura para un acabado impecable."},
    ]

    return(
        <section className="px-12 py-16">
            <p className="text-center text-4xl mb-8">Services</p>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-3">
                {services.map((service, i) => (
                    <div 
                        key={i}
                        className="w-full md:min-w-64 md:shrink-0 border border-white/20  rounded-2xl p-6 flex flex-col gap-2 shrink-0 text-center bg-linear-to-r from-red-900 via-red-800 to-black"
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