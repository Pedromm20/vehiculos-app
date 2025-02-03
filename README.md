# Comandos Utilizados en la Práctica de Angular

Este documento contiene los comandos utilizados durante la práctica, junto con su explicación.

## 1️⃣ Crear un nuevo proyecto de Angular
```sh
ng new vehiculos-app
cd vehiculos-app
```
Crea un nuevo proyecto en Angular y entra en su directorio.

## 2️⃣ Instalar dependencias necesarias
```sh
npm install
```
Instala todas las dependencias requeridas por el proyecto.

## 3️⃣ Ejecutar el servidor de Angular
```sh
ng serve
```
Inicia el servidor de desarrollo de Angular y permite ver la aplicación en el navegador.

## 4️⃣ Crear Componentes
```sh
ng generate component components/vehiculo-form
ng generate component components/vehiculo-list
```
Genera los componentes necesarios para el formulario y la lista de vehículos.

## 5️⃣ Configurar `angular.json` para servir imágenes desde `public/`
```json
"assets": [
  {
    "glob": "**/*",
    "input": "public"
  }
]
```
Configura Angular para que sirva imágenes desde la carpeta `public/`.

## 6️⃣ Mover las imágenes a la carpeta `public/`
```sh
mv coche.png moto.png public/
```
Mueve las imágenes de `coche.png` y `moto.png` a la carpeta `public/`.

## 7️⃣ Forzar recarga del navegador para aplicar cambios
```
Ctrl + Shift + R
```
Recarga la página sin usar caché para ver los cambios recientes.

## 8️⃣ Revisar si las imágenes se están cargando correctamente
```sh
http://localhost:4200/coche.png
http://localhost:4200/moto.png
```
Prueba si las imágenes se están sirviendo correctamente desde `public/`.

## 9️⃣ Limpiar y reinstalar dependencias en caso de errores
```sh
rm -rf node_modules package-lock.json
npm install
ng serve
```
Elimina `node_modules`, reinstala las dependencias y reinicia el servidor de Angular.

## 🔟 Construir la aplicación para producción
```sh
ng build --configuration=production
```
Genera la versión optimizada del proyecto en la carpeta `dist/vehiculos-app/`.

