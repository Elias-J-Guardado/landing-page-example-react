# Cargrow

Este proyecto es una muesta de landing page realizada en react

## Tabala de contenidos
- [Descripción](#descripción)
- [Instalación](#instalación)
- [Estructura](#estructura)
- [Uso](#uso)
- [Tecnologías](#tecnologías)
- [Referencias](#referencias)

## Descripción
Landing Page que permite la visualización de multimedia y el envio de formularios.

## Instalación
1. Clona el repositorio
```bash
    git clone https://github.com/Elias-J-Guardado/landing-page-example-react.git
```

2. Instala dependencias
 ```bash
    pnpm dev
```

3. Inicia el servidor de desarrollo
```bash
    git clone https://github.com/Elias-J-Guardado/landing-page-example-react.git
```

## Estructura
```
.
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── public
│   ├── dan-gold-N7RiDzfF2iw-unsplash.jpg
│   └── nelli-chaitanya-9yu5JZygjv0-unsplash.jpg
├── README.md
├── src
│   ├── app.css
│   ├── App.jsx
│   ├── components
│   │   ├── AboutSection.jsx
│   │   ├── AlertaError.jsx
│   │   ├── AlertaExito.jsx
│   │   ├── Footer.jsx
│   │   ├── Form.jsx
│   │   ├── Header.jsx
│   │   └── Services.jsx
│   ├── helpers
│   │   └── index.js
│   ├── index.css
│   └── main.jsx
└── vite.config.js
```

## Uso
Una vez el servidor de desarrollo esté corriendo, abre `http://localhost:5173` en tu navegador.

La landing page cuenta con las siguientes secciones:
- **Header** — presentación principal con navegación
- **¿Quiénes somos?** — información sobre el negocio
- **Servicios** — catálogo de servicios ofrecidos
- **Contacto** — formulario funcional que envía correos mediante EmailJS

### Configurar el formulario de contacto
Para que el envío de correos funcione, necesitas tu propia cuenta de [EmailJS](https://www.emailjs.com/) y reemplazar los siguientes valores en `src/components/Form.jsx`:

```js
emailjs.sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', formulario.current, {
    publicKey: 'TU_PUBLIC_KEY',
})
```


## Tecnologías
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [AOS](https://michalsnik.github.io/aos/)
- [EmailJS](https://www.emailjs.com/)


## Referencias

- [Hero image](https://unsplash.com/es/fotos/un-coche-amarillo-circulando-por-una-calle-de-noche-9yu5JZygjv0)

- [AboutUs image](https://unsplash.com/es/fotos/fotografia-de-enfoque-superficial-de-volkswagen-beetle-naranja-N7RiDzfF2iw)