# REACT AVANZADO - PLATZI

<div align="center">
  <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="react logo" width="300">
</div>

## Index

- [Estructura de carpetas](#estructura-de-carpetas)
  - [Components](#components)
  - [Layout](#layout)
  - [Pages](#pages)

## Estructura de carpetas

### Components

* Algo se convierte en un componente si se usa más de una vez o si tiene funcionalidad propia
* Los componentes son la base para los layouts
* Los componentes se pueden reutilizar entre si para crear más componentes
* No interactua con la api
* Es el único que trabaja con los estilos
* Solo usa el estado para la funcionalidad correcta del componente

### Layout

* Los la layouts estan compuestos de componentes y solo son reutilizables en las pages
* Un layout no se puede reutilizar dentro de otro layout
* Interactua con la api
* Si esta trabajando con la api se encarga solo de manejar los estados (loading, error, data)
* No trabaja con los estilos
* Usa el estado para trabajar con la data global o que sera enviada a una api 

### Pages

* Compuesto de elementos del layout
* Un page no se pueden reutilizar dentro de otro page
* Son los archivos utilizados en el router
* No interactua con la api
* No trabaja con los estilos

<div align="right">
  <small><a href="#index">↑ Volver al inicio</a></small>
</div>