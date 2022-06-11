# UrbaPass Backend

## Tabla de Contenidos

1. [Descripción](#descripción)
2. [Uso](#uso)
3. [Rutas](#rutas)
   * [Usuario](#usuario)
   * [Residente](#residente)
   * [Administrador](#administrador)
   * [Guardia](#guardia)
   * [Alicuota](#alicuotas)
   * [Pago](#pagos)
   * [QR](#qr)
4. [Reconstrucción de Modelos](#reconstrucción-de-modelos)
5. [Generación de Datos](#generación-de-datos)
6. [Bugs](#bugs)
7. [Autor](#autor)

## Descripción

**UrbaPass Backend** es una API REST que permitirá la comunicación entre el cliente y servidor de Facturando, facilita la interación y obtención de los datos mediante peticiones con el protocolo HTTP.

## Uso

* Abrir un terminal de comandos en el directorio del proyecto.
* Usar el comando `npm install` para descargar todas las dependencias.
* [Reconstruir los modelos](#reconstrucción-de-modelos) en caso de no tenerlos.
* [Llenar la bd con datos de prueba]() para poder probar la API
* Configurar el archivo `./config/config.json` con las credenciales para development y production en caso de ser necesario.
* Usar el comando `npm run devstart` para correr el proyecto.

## Rutas

Todos los parámetros solicitados en ciertos métodos HTTP deben ser enviados mediante el body del requerimiento en formato JSON.

### Usuario

|Método|Ruta|Función|Parámetros|
|------|----|-------|----------|
|`get`|/usuario|Retorna todos los usuarios.|None|

### Residente

|Método|Ruta|Función|Parámetros|
|------|----|-------|----------|
|`get`|/residente|Retorna todos los residentes.|None|
|`post`|/residente|Añade un residente a la db.|`cedula` `nombre` `apellido` `urbano` `correo` `clave` `dir`|
|`get`|/residente/:cedula|Retorna el residente con la cédula dada.|None|
|`put`|/residente/:cedula|Actualiza el residente con la cédula dada en la db.|WIP|
|`delete`|/residente/:cedula|Elimina el residente con la cédula dada en la db.|None|

### Administrador

|Método|Ruta|Función|Parámetros|
|------|----|-------|----------|
|`get`|/administrador|Retorna todos los administradores.|None|
|`post`|/administrador|Añade un administrador a la bd.|WIP|
|`get`|/administrador/:cedula|Retorna el administrador con la cédula dada.|None|
|`put`|/administrador/:cedula|Actualiza el administrador con la cédula dada.|WIP|
|`delete`|/administrador/:cedula|Elimina el administrador con la cédula dada en la bd.|None|

### Guardia

|Método|Ruta|Función|Parámetros|
|------|----|-------|----------|
|`get`|/guardia|Retorna todos los guardias.|None|
|`post`|/guardia|Añade un guardia a la bd.|`cedula` `nombre` `apellido` `urbano` `correo` `clave`|
|`get`|/guardia/:cedula|Retorna el guardia con la cédula dada.|None|
|`put`|/guardia/:cedula|Actualiza el guardia con la cédula dada.|WIP|
|`delete`|/guardia/:cedula|Elimina el guardia con la cédula dada en la bd.|None|

### Alicuota

|Método|Ruta|Función|Parámetros|
|------|----|-------|----------|
|`get`|/alicuota|Retorna todas las alicuotas.|None|
|`put`|/alicuota|Actualiza el estado de la alicuota.|WIP|
|`get`|/alicuota/:cedula|Retorna todas las alicuotas correspondiente al residente(cédula) dada.|None|
|`post`|/alicuota/:cedula|Añade una alicuota asociada al residente(cédula) dada.|WIP|


### Pago

|Método|Ruta|Función|Parámetros|
|------|----|-------|----------|
|`get`|/pago|Retorna todos los pagos.|None|
|`post`|/pago|Añade un pago asociada a la alícuota dada como parámetro en la bd.|WIP|

### QR

|Método|Ruta|Función|Parámetros|
|------|----|-------|----------|
|`get`|/qr|Retorna todos los QR.|None|
|`delete`|/qr|Elimina el QR con UID dado como parámetro de la bd.|WIP|
|`post`|/qr/:cedula|Añade un QR asociado al residente(cédula) dada en la bd.|WIP

## Reconstrucción de Modelos

Abre `./script-sql/create-schema.sql` en MySQL Workbench y ejecuta el código dentro. Esto creará la base de datos necesaria para los modelos en caso de no tenerlos en el proyecto.

Abre una terminal de comandos en el directorio del proyecto y ejecuta el siguiente comando:

```
sequelize-auto -h <host> -d <database> -u <user> -x <password> -p <port> -T <skiptables>
```

### Donde:

- Especifique el hostname después del parámetro -h \<host>. Generalmente **localhost**.
- Especifique el nombre de la base de datos después del parámetro -d \<database>. Reemplazar con el nombre de la base de datos **UrbaPassDB**.
- Especifique el nombre del usuario después del parámetro -u \<user>. Reemplazar con su **usuario para la conexión MySQL**.
- Especifique la contraseña del usuario después del parámetro -x \<password>. Reemplazar con su **contraseña para la conexión MySQL**.
- Especifique el puerto después del parámetro -p \<port>. Generalmente **3306**.
- Especifique las tablas a omitir después del parámetro -T \<skiptables>. Reemplazar con **sequelizemeta**.

## Generación de Datos

Una vez tengas creada el *schema* de la base de datos **UrbaPassDB** generaremos datos de prueba para probar la API. Abre el archivo `./script-sql/insert-data.sql` en MySQL Workbench y ejecuta el código dentro. 

De esta manera se creará una cantidad moderada de datos de prueba. No olvides configurar el archivo `./config/config.json` con tus credenciales para poder conectarte a la base de datos.

## Bugs

## Autor

- [Jonathan García](https://github.com/ElPitagoras14)