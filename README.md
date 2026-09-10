# PROJECTE-ITALUMNI
# ITAlumni

## 📋 Descripción

**ITAlumni** es una aplicación web desarrollada como proyecto de formación en desarrollo web.

La aplicación está orientada a una comunidad de alumnos y antiguos alumnos, permitiendo consultar perfiles, oportunidades laborales y eventos relacionados con la formación y el networking.

El proyecto pone en práctica conceptos de **HTML, CSS, JavaScript, manipulación del DOM, programación modular, almacenamiento local y testing**.

## 🚀 Tecnologías utilizadas

* **HTML5** — estructura y contenido de las páginas.
* **CSS3** — estilos, diseño responsive y organización visual.
* **JavaScript (ES6+)** — lógica de la aplicación e interacción con el usuario.
* **Node.js** — entorno de ejecución y gestión de dependencias.
* **Jest** — pruebas automatizadas.
* **Git** — control de versiones.
* **GitHub** — alojamiento del repositorio.

## 📁 Estructura del proyecto

```text
PROJECTE-ITALUMNI/
│
├── home.html
├── networking.html
├── package.json
├── package-lock.json
├── README.md
│
├── css/
│   └── styles.css
│
├── scripts/
│   ├── App.js
│   └── Utils.js
│
├── test/
│   └── App.test.js
│
└── imagenes/
    └── ...
```

### Principales archivos

**`App.js`**

Contiene la lógica principal de la aplicación:

* Inicialización de la aplicación.
* Manipulación del DOM.
* Renderizado de contenidos.
* Búsqueda y filtrado.
* Gestión de favoritos.
* Navegación entre las diferentes secciones.
* Gestión de eventos de usuario.

**`Utils.js`**

Contiene funciones auxiliares y funciones puras utilizadas por la aplicación.

Entre ellas se encuentran funciones relacionadas con:

* Gestión de datos.
* Favoritos.
* Lectura y escritura de `localStorage`.
* Tratamiento y transformación de información.

**`App.test.js`**

Contiene las pruebas automatizadas realizadas con Jest para comprobar el funcionamiento de la aplicación y sus diferentes funcionalidades.

## ✨ Funcionalidades

### 👤 Perfiles

La aplicación permite visualizar información relacionada con los miembros de la comunidad ITAlumni.

### 💼 Empleo

Se pueden consultar oportunidades laborales disponibles para los usuarios.

### 📅 Eventos

La aplicación muestra eventos relacionados con formación, networking y actividades de la comunidad.

### 🔎 Búsqueda y filtrado

Los contenidos pueden buscarse y filtrarse para facilitar la localización de perfiles, empleos o eventos.

### ❤️ Favoritos

Los usuarios pueden marcar determinados elementos como favoritos.

Los favoritos se almacenan en el navegador utilizando `localStorage`, permitiendo conservar la información aunque se recargue la página.

### 🧭 Navegación

La aplicación dispone de diferentes páginas y secciones, utilizando atributos `data-page` para identificar la página actual.

Ejemplo:

```html
<body data-page="home">
```

Esto permite que JavaScript determine la página en la que se encuentra el usuario y gestione elementos como la navegación activa.

## 💾 LocalStorage

Los favoritos se almacenan en el `localStorage` del navegador.

Los datos se gestionan mediante JSON para poder almacenar estructuras de información:

```javascript
JSON.stringify()
```

y recuperarlas posteriormente:

```javascript
JSON.parse()
```

La aplicación también contempla posibles errores al leer información almacenada, evitando que un JSON incorrecto provoque el fallo completo de la aplicación.

## 🧪 Testing

El proyecto utiliza **Jest** para realizar pruebas automatizadas.

Las pruebas se encuentran en:

```text
test/
└── App.test.js
```

Para ejecutar todos los tests:

```bash
npm test
```

El objetivo de los tests es comprobar que las diferentes funciones de la aplicación producen los resultados esperados y detectar posibles errores durante el desarrollo.

## ▶️ Ejecución del proyecto

### 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

### 2. Entrar en el proyecto

```bash
cd PROJECTE-ITALUMNI
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Ejecutar la aplicación

El proyecto puede ejecutarse utilizando **Live Server** desde Visual Studio Code.

Abre `home.html` y selecciona:

```text
Open with Live Server
```

La aplicación se abrirá en el navegador.

## 🧪 Ejecutar los tests

Desde la terminal:

```bash
npm test
```

Para ejecutar Jest en modo observación:

```bash
npm test -- --watch
```

## 🎨 Diseño

La interfaz utiliza un diseño **responsive**, adaptándose a diferentes tamaños de pantalla.

Se contemplan principalmente:

* 📱 Dispositivos móviles.
* 💻 Tablets y portátiles.
* 🖥️ Pantallas de escritorio.

El proyecto utiliza diferentes clases y estructuras CSS para separar las responsabilidades de layout y componentes.

## ♿ Accesibilidad

Se han aplicado diferentes prácticas de accesibilidad, entre ellas:

* HTML semántico.
* Uso de `aria-label` en controles que lo necesitan.
* Navegación mediante teclado.
* Textos alternativos para imágenes.
* Botones y enlaces identificables.
* Estructura jerárquica de contenidos.

Ejemplo:

```html
<button class="icon-btn menu-btn" aria-label="Abrir menú">
    <span></span>
    <span></span>
    <span></span>
</button>
```

## 🧱 Arquitectura JavaScript

La lógica se divide principalmente en dos archivos:

```text
App.js
   │
   ├── Interfaz
   ├── Eventos
   ├── Renderizado
   ├── Búsqueda
   └── Favoritos
          │
          ▼
      Utils.js
          │
          ├── Funciones auxiliares
          ├── Gestión de datos
          └── localStorage
```

Esta separación permite mantener la lógica de la aplicación organizada y facilita la realización de pruebas.

## 🌿 Control de versiones

El proyecto utiliza Git para controlar los cambios realizados durante el desarrollo.

Comandos utilizados habitualmente:

```bash
git status
git add .
git commit -m "Descripción del cambio"
git push
```

## 📚 Objetivos de aprendizaje

Durante el desarrollo del proyecto se han trabajado conceptos como:

* Estructuración de proyectos web.
* HTML semántico.
* CSS y Responsive Design.
* JavaScript moderno.
* Manipulación del DOM.
* Eventos.
* Arrays y objetos.
* Funciones.
* Modularización del código.
* `localStorage`.
* JSON.
* Validación y tratamiento de errores.
* Testing con Jest.
* Git y GitHub.
* Accesibilidad web.
* Organización y mantenimiento del código.

## 👨‍💻 Autor

**Alejandro Rodríguez**

Proyecto realizado como parte de la formación en desarrollo web.

## 📄 Licencia

Este proyecto ha sido desarrollado con fines educativos.
