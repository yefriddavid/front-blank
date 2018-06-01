# Desarrollo software administración de usuarios

## Se requiere realizar un software con las siguientes características.


Realizar una aplicación con la capacidad de insertar, modificar, eliminar
y consultar (CRUD) registros sobre una tabla de usuarios con los campos (id, nombre, apellido,
password, email, estado, teléfono) sobre una base de datos local que puede ser en archivos de tipo (.txt,
.json u otro).  Todo esto utilizando nodeJs como backend del software, dichos archivos de base de datos deben de
estar excluidos del repositorio, posteriormente realizar el admin o frontend de la apicación en reactJs utilizando
algunos de las siguientes librerias y patrones de desarollo.




### Lenguajes y patrones de diseño que deben ser empleados para el desarrollo de la aplicación.

Para desarrollar esta aplicación es necesario seguir el siguiente patron de
diseño con los estandares planteados y descritos paso a paso en la siguinte
documentación.


[Documentación](/microvoz/front_blank)



### Paso a paso del requerimiento

A continuación se enumera el paso a paso de que debe hacer el sotfware


| Paso| Nombre  | Descripción   |   Detalle  	  |
| --- |-------------|:-------------:|:-------------:|
| 1 | Login | Al ingresar en la dirección del navegador **http://localhost:3000** debe mostrarse el login del software, si este cuenta con credenciales en el sistema lo debe redireccionar a la pantalla de inicio. |	![Example](./images/login.png)	|
| 2 | Login Error |Si los datos son incorrectos deberia mostrarse la siguiente pantalla. | ![Example](./images/login-error.png)	|
| 3 | Pagina de Inicio |Ingresar usuario y contraseña y validar en el api dichos datos posteriormente el software debe redireccionar al usuario a la pantalla de usuarios del software desde donde podrá modificar, eliminar y consultar un registro  |	![Example](./images/home.png) |
| 4 | Paginación | La pantalla donde se listan los usuarios registados del sistema debe permitir paginar y filtrar los registros almacenados en la base de datos | ![Example](./images/pagination.png)	|
| 5 | Creación nuevo usurio |  | ![Example](./images/new.png)	|
| 6 | Guardar nuevo usurio |  | ![Example](./images/save-new.png)	|
| 7 | Modificar usuario |  | ![Example](./images/alter.png)	|
| 8 | Guardar usurio modificado |  | ![Example](./images/save-alter.png)	|
| 9 | Eliminar usurio |  | ![Example](./images/delete.png)	|
| 10 | Confirmar eliminación de usuario |  | ![Example](./images/confirn-delete.png)	|
| 11 | Logout |  | ![Example](./images/home.png)	|


## Endpoints requeridos para el desarrollo

```
http://10.60.0.60:81/api/oauth/token [POST]
http://10.60.0.60:81/api/oauth/token [DELETE]
http://10.60.0.60:81/api/users [GET]
http://10.60.0.60:81/api/users [POST]
http://10.60.0.60:81/api/users/1 [DELETE]
http://10.60.0.60:81/api/users/1 [GET]
http://10.60.0.60:81/api/users/1 [PUT]

```


### Tener en cuenta

- Es necesario que tanto los componentes como los contenedores deben estar
  documentados con una descripción corta y una descripción detallada sobre sus
  funciones

- El software debe estar escrito en ingles a nivel de codigo.










| Tecnologías   | Requerida     | Opcional  	|
| ------------- |:-------------:|:-------------:|
| ReactJs       | 	x 	|  		|
| Sagas         |  		| 	x 	|
| Redux         |  		| 	x 	|
| Axios         |  		| 	x 	|
| Redux-sagas   |  		| 	x 	|


`mdless`

### Es libre de usar las librerias o recursos que desee dentro de ReactJs o NodeJs

