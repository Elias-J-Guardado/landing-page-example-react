import { useState, useEffect, useRef } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css'
import emailjs from "@emailjs/browser";
import { AlertaExito } from "./AlertaExito";

function Form() {
    //UseEffect AOS
    useEffect(() => {
        AOS.init({ duration: 500 })
    }, [])


    //Form set
    const [form, setForm] = useState({
        nombre: "",
        asunto: "",
        telefono: "",
        correo: "",
        mensaje: ""
    })

    const [enviado, setEnviado] = useState(false);

     //emailjs Api
    const formulario = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_pmg869e', 'template_24jt3jp', formulario.current, {
                publicKey: 'hd-H15cB2v3eIPDpK',
            })
            .then(
            () => {
                setEnviado(true)

            },
                (error) => {
                    console.log('Operación fallida...', error.text);
                },
            );
    };

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <section data-aos="fade-up" className="px-12 py-16 bg-[#0d1117]">
            <h2 className="text-center text-4xl mb-8 text-white">Contacto</h2>
            {enviado && <AlertaExito/>}
            <form ref={formulario} onSubmit={sendEmail} className="flex flex-col gap-4 w-full max-w-3xl mx-auto" action="">
                <div className="flex flex-col gap-2">
                    <label className="text-white/70" htmlFor="">Nombre</label>
                    <input type="text" name="nombre" className="bg-transparent border border-white/20 rounded-xl px-4 text-white" type="text" value={form.nombre} name="nombre" placeholder="Jhon Doe" onChange={handleChange} />
                </div>
                <div className="flex flex-row gap-4">
                    <label className="text-white/70" htmlFor="">Asunto</label>
                    <input type="text" name="asunto" className="w-1/2 bg-transparent border border-white/20 rounded-xl px-4 text-white" type="text " value={form.asunto} name="asunto" placeholder="Presupuesto" onChange={handleChange} />
                    <label className="text-white/70" htmlFor="">Telefono</label>
                    <input type="tel" name="telefono" className="w-1/2 bg-transparent border border-white/20 rounded-xl px-4 text-white" type="text" value={form.telefono} name="telefono" placeholder="(+1)9935-4498" onChange={handleChange} />
                </div>
                <label className="text-white/70" htmlFor="">Correo</label>
                <input type="email" name="correo" className="bg-transparent border border-white/20 rounded-xl px-4 text-white" type="text" value={form.correo} name="correo" placeholder="JhonDoe@mail.com" onChange={handleChange} />
                <label className="text-white/70" htmlFor="">Mensaje</label>
                <textarea className="bg-transparent border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/60 resize-none h-32" type="text" name="mensaje" value={form.mensaje} placeholder="Mensaje" onChange={handleChange} />
                <div className="flex items-center justify-center">
                    <input type="submit" name="mensaje" className="rounded-xl cursor-pointer text-white bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-linear-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:ring-blue-800 font-medium rounded-base px-4 py-2.5 text-center leading-5 text-xl" value="Enviar" />
                </div>
            </form>
        </section>
    )
}

export { Form }