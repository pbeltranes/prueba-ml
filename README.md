# Servicio Mercado Libre

## Overview

Incluye dos repositorios de código uno que es el servicio _mercado-libre-bff_ y otro que es la ui o interfaz _mercado-libre-ui_

El servicio esta escuchando por defecto el puerto 3001 y posee dos endpoints GET http://localhost:3001/api/items y http://localhost:3001/api/items/:id

Por su parte la ui cuenta con tres vistas el home que tiene como ruta de inicio "http://localhost:3000/", la segunda que lista productos "http://localhost:3000/items?search=" y la tercera que muestra en detalle productos "http://localhost:3000/items/MLA88489016"

![Home](/evidencia/home.png)

![Buscador](/evidencia/buscador.png)

![Detalle](/evidencia/detalle.png)

## Getting Started

Ambos proyectos requieren de:

- npm install
- npm run dev

## Improve

No se completo el _breadcrumb_ porque no entendí si hacía falta el consumo de alguno otro servicio que no haya sido provisto, de ser necesario se puede construir un nuevo servicio e integrarlo a cada uno de los endpoint dado que son distintos los breadcrumb que se construye.

Debido al tiempo no se realizaron los test unitarios correspondientes a los servicios y endpoint, tampoco se realizo test en los componentes y servicios del frontend. Falta también declarar de forma correcta muchas estructuras que por simplicidad fueron declaradas como _any_. También algo que me di cuenta al final de un caso es que el frontend falla cuando el backend no esta operativo y se intenta hacer las llamadas.

## Stack

- [Express](https://expressjs.com/) - The api Framework used
- [Nextjs](https://nextjs.org/) - The frontend Framework used
- [Bulma](https://bulma.io/) - The CSS Frameword used

## Authors

- **Paul Beltrán**
