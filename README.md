
El Chat de Antonio

La primera prueba para crear un Chat


Requiere tener instalados

El entorno node:
- node.js y npm en https://nodejs.org/en/
    
    Documentacion npm: https://docs.npmjs.com/

Para el control de versiones
- git en https://git-scm.com/downloads
    Documentacion git en: https://git-scm.com/book/es/v1/Empezando-Acerca-del-control-de-versiones

Instalaciones globales
(Siempre con el comando npm install -g <Nombre del paquete>)
- express
- pm2 
- gulp
- stylus


Instalar dependencias
(con npm install --save <paquete> )
- express-handlebars
- html-minifier
- js-yaml
- lodash
- mysql
- oauth
- stylus

Instalar dev-dependencias
(con npm install --save-dev <paquete> )
- bower
- chai
- gulp-eslint
- git-guppy
- gulp
- gulp-mocha
- guppy-pre-push
- m- ocha
- ewire
- sinon

a) Crear fichero .bowerrc
b) Crear fichero .editorconfig
c) Crear fichero .eslintrc
d) Crear fichero bower.json
e) Preparar gulp
    Crear una nueva carpeta en raiz de nombre gulp
    Crear fichero en raiz como gulpfile.js
    Crear fichero en gulp como eslint.js

    Para comprobar que funciona, teclear gulp analyze
f) Instalamos express-handlebars (en sustitucion de jade) y stylus
    Modificamos el app.js requiriendo el express-handlebars y unos helpers y 
    Cambiamos en engine de 'jade' a '.hbs'
    Creamos carpeta stylus en src
    Crear fichero style.styl en esa carpeta
    Crear en layouts en fichero main.hbs
    Crear fichero en partials/site -> header.hbs
    Crear la vista index (La de Welcome Node js)
    Crear fichero index.hbs en views
    Crear fichero error.hbs en views

