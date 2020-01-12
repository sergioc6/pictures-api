# pictures-api

A continuación se detallan los pasos para configurar el proyecto localmente. Las siguientes instalaciones son requeridas:

  - Git
  - Docker
  - Docker-compose


### Instalación

Clonar el repositorio
```sh
$ git clone https://github.com/sergioc6/pictures-api.git
$ cd pictures-api
```

Copiar el archivo de enviroment:
```sh
$ cp .env.example .env
```

Construir los containers:
```sh
$ docker-compose build
```
Levantar los servicios de DB, node y adminer.
```sh
$ docker-compose up -d
```

Listo! Por defecto la API corre en el puerto 3000
```sh
$ localhost:3000
```

### Endpoints

| Metodo | Ruta | Descripción |
| --- | --- | ---|
| GET | / | Ruta principal |
| GET | /users | Listado de Usuarios |
| GET | /users/:id | Retorna el Usuario del Id |
| GET | /pictures | Listado de Cuadros |
| GET | /pictures/:id | Retorna el Cuadro del Id |
| POST | /pictures | Ingresa un nuevo Cuadro |
| PUT | /pictures/:id | Modifica un Cuadro existente |
| DELETE | /pictures/:id | Elimina un Cuadro existente |

### Adminer
Puede corroborar los cambios en la DB Postgres utilizando el cliente Adminer.
```sh
$ localhost:8080
```

### TODO
- Desarrollar una aplicación frontend que consuma la API.
- Un endpoint de status para conocer el promedio de tiempo de respuesta
del servicio.
- Plantear por escrito una comunicación asincrónica con otro servicio.