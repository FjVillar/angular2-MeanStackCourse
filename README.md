# Angular 2 Messenger

Esta aplicación la realicé mientras hacía un curso de MEAN Stack. Principalmente se compone de un Backend hecho con Express y Node, y Front-end con Angular2. 
La base de datos en MongoDB está hospedada en MongoLab y la aplicación se sirve a traves de Heroku.

## Carácteristicas principales

Se compone de tres módulos:

1. Auth -> Autenticación de usuario. Login, logout y signin.
2. Messages -> Un CRUD de mensajes. Inserción, edición, borrado y listado de mensajes. Los mensajes están asociados a un único usuario que sólo pueden ver sus propios mensajes.
3. Error -> Manejo de errores.
4. Header. Desde aquí se dirige la navegación.

# Librerías utilziadas

1. Json Web Tokens(JWT) -> para la autorización de usuarios y restringir visibildiad de los mensajes.
2. Bcrypt -> para encriptar los tokens

## Guia de estructura de ficheros

### Assets

Aqui se encuentran los distintos módulos de la aplicación y sus componentes.

### Models

El módelo: usuarios y mensajes.

### Routes

API backend que se comunica con Node.

### Views

Index handlebar. Desde aquí empieza mi aplicación cuando es renderizada al ejecutarse app.js