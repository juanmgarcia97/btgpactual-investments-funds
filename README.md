# btgpactual-investments-funds

## Configuración del ambiente
Al descargar el código fuente se encontrarán ambos projectos (Backend y Frontend). Lo más importante es configurar los archivos `.env` en las dos carpetas. En el Backend se deben ingresar las variables de configuración de la base de datos de la siguiente forma:
  - DB_HOST=`<host>`: host de la base de datos.
  - DB_PORT=`<puerto>`: puerto de la base de datos.
  - DB_NAME=`<name>`: puede ser cualquier nombre.
  - API_PORT=`<port>`: por defecto usar 3000, para evitar errores con el front.

De igual manera este archivo se encuentra en el repositorio, con los respectivos datos usados en el desarrollo.

## Intrucciones Backend

- ### Instalación
El proyecto fue desarrollado en Node.js con TypeScript y Express, es necesario tener Node en una versión actualizada, yo utilicé la [16](https://nodejs.org/es/download/) y el gestor de paquetes de Node, NPM, mayor a la 8 (que viene con Node por defecto). De igual forma, el proyecto utiliza [Mongoose](https://mongoosejs.com/docs/guide.html).

- ### Ejecución
El proyecto corre por defecto en el puerto `3000`, si requiere cambiar este puerto deberá ingresar al archivo `index.ts` dentro de la carpeta `src`. Si no es el caso puede seguir a instalar las dependencias del proyecto usando el comando `npm install` en la consola, ubicándose dentro de la carpeta `backend-project`. Al finalizar la instalación resta usar el comando `npm start` para correr el proyecto.

## Intrucciones Frontend

- ### Instalación
El proyecto fue desarrollado en Angular en su versión [14](https://angular.io/docs) y [Angular Material](https://material.angular.io/guides) es recomendable descargar el CLI de Angular usando el comando `npm install -g @angular/cli`.

- ### Ejecución
El proyecto corre por defecto en el puerto `8080`. Para instalar las dependencias se debe usar el comando `npm install` en la consola, ubicándose dentro de la carpeta `frontend-project`. Al finalizar la instalación resta usar el comando `npm run serve` para correr el proyecto y abrir el navegador para usarlo, escribiendo en la barra de búsqueda `localhost:4200`.
