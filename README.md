# Proyecto Mutaciones en ADN 🧬

Proyecto que detecta si una persona tiene diferencias genéticas basándose en su secuencia de ADN.

### Instalación 🔧

_Clonamos el repositorio ejecutando el siguiente comando en la terminal_

> git clone https://github.com/royquiroz/sequences-adn.git

_Una vez finalizada la clonacion instalamos las paqueterias_

```
npm install
```

- Antes de ejecutar la aplicacion es necesario crear el archivo `.env` con las variables de entorno.

```
PORT=3000
DB=mongodb://localhost:27017/dna
```

_Al finalizar la instalacion de los modulos ejecutamos_

```
npm start
```

- Si la aplicación esta corriendo exitosamente veremos el mensaje en la terminal

> Aplicación corriendo en el puerto 3000

## Construido con 🛠️

_Herramientas que se utilizaron para crear el proyecto._

- [NodeJS](https://nodejs.org/es/) - Entorno JavaScript de lado del servidor
- [Express](https://expressjs.com/es/) - Framework para Node.js
- [Mongoose](https://mongoosejs.com/) - Usado para crear Schemas y conectarnos a la base de datos MongoDB
- [MongoDB](https://www.mongodb.com/es) - Bases de Datos NoSQL

## Autor ✒️

- **Gonzalo Quiroz** - [royquiroz](https://github.com/royquiroz)
