# Giphy searcher (Wizeline Academy final project)

_Cliente web para buscar gifs atravez de Giphy_

## Nota

\_Este proyecto se baso en un fork de la pagina siguiente : https://codesandbox.io/s/angry-diffie-63hhr

### Funcionamiento ⚙️

```
Este proyecto funciona como un buscador de gifs con la posibilidad de guardar favoritos y desplegarlos.
Para hacer una busqueda se necesitan almenos 3 caracteres y precionar la tecla enter o el boton "Search".

Una vez desplegados los resultados basta con hacer click en el checkbox de cualquier gif para agregar o
remover de favoritos. Se pueden realizar las busquedas que sean necesarias para seguir agregando favoritos
a la lista. Puedes deseleccionar tus favoritos simplemente haciendo click en el checkbox.

Para acceder a los favoritos basta con hacer click en el boton "Filter" -> "Favoritos"

Una vez que el usuario recarga la pagina, se pierden los favoritos seleccionados.

```

### Estructura del codigo 🔧

_HTML_

```
Se utilizo Boostrap 4 como base para construir el frontend con un objeto Jumbotron como contenedor
principial en el cual se agregaron una barra de busqueda, un boton simple y un dropdown para poder
seleccionar los favoritos.

Hay un div con el id : "gifArea" donde se despliegan los gifs de la busqueda.

Cada uno de estos elementos tiene un identificador unico el cual sera buscado para lograr su funcionalidad

```

_Javascript_

```
El codigo inicia importando las API's de Giphy e imediatamente busca cada identificador de la base del html:
- La barra de busqueda
- Boton de buscar
- Dropdown de opciones y favoritos
- El area donde se mostraran los Gifs

Ademas inicializamos una lista vacia que es donde se almacenaran los favoritos.

Existen dos funciones principales :
- filterGif: Es la funcion que se manda llamar una vez que se preciona el boton de filtro siempre y cuando
exista mas de un favorito en la lista de favoritos.

- getGif: Es la funcion que se manda a llamar al precionar enter o el boton de busqueda siempre y cuando
el usuario ingrese mas 3 o mas caracteres. Esta funcion regresa hasta 18 elementos por busqueda.

Ambas funciones construyen los objetos que se mostraran creando elementos HTML de forma dinamica anadiendo
un identificador unico dado por la url de cada elemento que se obtiene de consultar la API de Giphy.
```

## Construido con 🛠️

- [Bootstrap] https://getbootstrap.com/
- [Giphy] https://developers.giphy.com/
- [Fork] https://codesandbox.io/s/angry-diffie-63hhr
- [MDTemplate] https://gist.github.com/Villanuevand

## Autores ✒️

- **Carlos Ignacio Avila Gutierrez** - _Web app Developer : a52xmax@gmail.com_
- **Wizeline Academy** - _Fork_

## Licencia 📄

Free for everyone!!!

## Agradecimientos 🎁

- Todo el equipo de instructores y organizadores de Wizeline Academy ❤️
