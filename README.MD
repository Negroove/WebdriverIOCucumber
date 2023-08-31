# WebDriverIO Cucumber - Lucas Montoya

## Requerimientos
- Node.js
- WebdriverIO
- Appium
- Allure Report

## Instalacion

```sh
npm install
npm install -g allure-commandline --save-dev
```

## Compatibiliad con emulador android Pixel 4 - Android 11
Pegar en la carpeta: 
```sh

\EntrevistaTecnica\node_modules\appium\node_modules\appium-chromedriver\chromedriver\win
```
El chromedriver proporcionado en el repositorio que se encuentra en la carpeta `drivers` 

```sh
EntrevistaTecnica\drivers
```
y eliminar el que ya se encuentra

## Para la ejecucion de los test

```sh
npm run wdio
```

## Para ejecutar limpieza de los reportes

```sh
npm run clean
```

## Para ejecutar la creacion de un reporte

```sh
npm run generate-report
```

## Para ejecutar visualizacion del reporte 

```sh
npm run open-report
