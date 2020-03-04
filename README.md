# SEFIN Móvil

Aplicación para el pago de impuestos de predial y vehicular.


## Contenido
- [Ejecución](#ejecución)
- [Despliegue](#despliegue)
  - [Progressive Web App](#progressive-web-app)
  - [Android](#android)
  - [iOS](#ios)


## Ejecución

* [Descargar](https://nodejs.org/) e instalar Node.js 6 O superior.
* Instalar globalmente el CLI de ionic: `npm install -g ionic`
* Clonar repositorio: `git clone https://github.com/Dev-efrain-93/SEFINMovil.git`.
* Ejecutar `npm install` desde la raíz del proyecto.
* Ejecutar `ionic serve` en la terminal desde la raíz del proyecto.

## Despliegue

### Progressive Web App

1. Ejecutar `npm run ionic:build --prod`
2. Colocar la carpeta `www` dentro del servicio de hosting

### Android

1. Ejecutar `ionic cordova run android --prod`

### iOS

1. Ejecutar `ionic cordova run ios --prod`
