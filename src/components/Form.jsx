import { useState } from "react"

function Form() {
    const [nombre, setNombre] = useState("");

    function handleChange(e) {
        setNombre(e.target.value);
    }

    return (
        <section>
            <div className="flex justify-center flex-col items-center">
                <div>
                    <h2>Contacto</h2>
                </div>
                <form action="">
                    <label htmlFor="">Nombre</label>
                    <input type="text" value={nombre} placeholder="Jhon Doe" onChange={handleChange} />
                    <div>
                        <label htmlFor="">Asunto</label>
                        <input type="text" value={nombre} placeholder="Jhon Doe" onChange={handleChange} />
                        <label htmlFor="">Telefono</label>
                        <input type="text" value={nombre} placeholder="Jhon Doe" onChange={handleChange} />
                    </div>
                     <label htmlFor="">Correo</label>
                    <input type="text" value={nombre} placeholder="Jhon Doe" onChange={handleChange} />
                     <label htmlFor="">Mensaje</label>
                    <textarea type="text" value={nombre} placeholder="Jhon Doe" onChange={handleChange} />
                    <div>
                        <input type="button" value="Enviar" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export { Form }