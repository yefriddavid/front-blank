# Desarrollo software administración de usuarios

## Se requiere realizar un software con las siguientes características.


Realizar una aplicación con la capacidad de insertar, modificar, eliminar
y consultar (CRUD) registros sobre una tabla de usuarios con los campos (id, nombre, apellido,
password, email, estado, teléfono) sobre una base de datos local que puede ser en archivos de tipo (.txt,
.json u otro).  Todo esto utilizando nodeJs como backend del software, dichos archivos de base de datos deben de
estar excluidos del repositorio, posteriormente realizar el admin o frontend de la apicación en reactJs utilizando
algunos de las siguientes librerias y patrones de desarollo.



### Arbol de directorio esperado
```
./projects/usermanager/
.
├── api
│   ├── app.js
│   └── package.json
└── webapp
    └── package.json
```

### Librerias requeridas
```
reactJs
```

### Lenguajes que deben ser empleados para el desarrollo de la aplicación

**NodeJs** y **Javascript**


### Libraries empleadas

Para el desarrollo del software se deben emplear las siguientes tecnologias.

Sagas
Redux
redux-sagas
redux-act
axios
react-router-dom
socket.io-client



### Metodologías y patrones a emplear
```
BEM (Css)
Ecmascript 5
Ecmascript 6
Ecmascript 7


```

### Paso a paso del requerimiento

A continuación se enumera el paso a paso de que debe hacer el sotfware


| Paso| Descripció  | Descripción   |   Detalle  	  |
| --- |-------------|:-------------:|:-------------:|
| 1 | Pantalla de inicio sin login | Al ingresar en la dirección del navegador http://localhost:3000 debe aparecer la pantalla de inicio  |	![Example](./images/login.png)	|
| 2 | |Ingresar usuario y contraseña y validar en el api dichos datos posteriormente el software debe redireccionar al usuario a la pantalla de usuarios del software desde donde podrá modificar, eliminar y consultar un registro  |	![Example](./example.png) |
| 3 | |Si los datos son incorrectos deberia de aparecer una pantalla similar a esto  | ![Example](./example.png)	|
| 4 | | ![Example](./example.png)	|
| 5 | |  | ![Example](./example.png)	|

david



### Tener en cuenta

- La solución debe contener estandares, patrones, metodologías conocidas y claras
de desarrollo las cuales deben estar sustentadas dentro del codigo.

- El software debe estar escrito en ingles a nivel de codigo y presentación.

- El repositorio debe contener dos folders con los nombres **api** y **webapp**
  respectivamente.

- Hostear la aplicación en un repositorio publico de **github**
sobre la rama **master** y enviar la url al correo **yefriddavid@gmail.com**

- Debe tener encuenta que cuenta con 4 horas para realizar la prueba, que inicia
  una ves se comparte este enlace.



### La presentación del software debe ser algo aproximado al siguiente ejemplo.


![Example](./example.png)






| Tecnologías   | Requerida     | Opcional  	|
| ------------- |:-------------:|:-------------:|
| ReactJs       | 	x 	|  		|
| Sagas         |  		| 	x 	|
| Redux         |  		| 	x 	|
| Axios         |  		| 	x 	|
| Redux-sagas   |  		| 	x 	|


`mdless`

### Es libre de usar las librerias o recursos que desee dentro de ReactJs o NodeJs

