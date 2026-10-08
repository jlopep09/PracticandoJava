# PracticandoJava

Repositorio de aprendizaje para fortalecer Java desde los fundamentos hasta la construcción de un backend real con Spring Boot, JPA y contenedores.

Este proyecto combina ejercicios prácticos de programación orientada a objetos con una pequeña API REST conectada a una base de datos, todo preparado para experimentar, aprender y extender.

## ✨ ¿Qué hace este proyecto?

- Explora conceptos esenciales de Java: clases, herencia, polimorfismo, encapsulación y manejo de excepciones.
- Incluye un mini simulador de gremio de aventureros para practicar lógica de negocio y estructuras de datos.
- Cuenta con un backend en Spring Boot que expone servicios REST y persiste datos con JPA.
- Integra una base de datos MariaDB mediante Docker Compose para emular un entorno de desarrollo real.
- Deja espacio para evoluciones futuras en UI o servicios adicionales.

## 🧱 Estructura del proyecto

```text
PracticandoJava/
├── Fundamentos/
│   ├── src/main/java/org/example/
│   ├── pom.xml
│   └── ...
├── backend/
│   ├── src/main/java/com/joselp/practJava/
│   ├── pom.xml
│   └── ...
├── ui/
├── .env.example
├── compose.yml
├── README.md
└── .gitignore
```

### Fundamentos

Dentro de `Fundamentos` encuentras ejercicios de Java orientados a la lógica y la POO. El ejemplo principal simula un gremio de aventureros con personajes como guerrero, mago y arquero, donde se practican:

- herencia y especialización
- manejo de estados y atributos
- arrays y colecciones
- decisiones y flujo de juego
- generación de escenarios tipo RPG

### Backend

La carpeta `backend` contiene una aplicación Spring Boot con:

- Spring Web
- Spring Data JPA
- Jersey
- MariaDB/MySQL connector
- Docker-ready setup

La API básica retorna un `Greeting` desde la base de datos.

## 🚀 Requisitos

Antes de arrancarlo, asegúrate de tener instalado:

- Java 11+ (backend)
- Java 21+ (para `Fundamentos` si quieres ejecutar ese módulo directamente)
- Maven
- Docker + Docker Compose

## 🛠️ Cómo arrancar el proyecto

### 1) Configurar variables de entorno

Copia el ejemplo:

```bash
copy .env.example .env
```

Ajusta los valores de:

- `MYSQL_DATABASE`
- `MYSQL_ROOT_PASSWORD`

### 2) Levantar la base de datos y el backend

Desde la raíz del proyecto:

```bash
docker compose up --build
```

Esto levanta:

- un contenedor con MariaDB
- un contenedor con la API backend

La aplicación queda disponible en:

- http://localhost:8080

### 3) Ejecutar los ejercicios de `Fundamentos`

Abre la carpeta `Fundamentos` en tu IDE o compílala con Maven:

```bash
cd Fundamentos
mvn compile
```

Luego ejecuta la clase `org.example.Main` desde tu entorno de desarrollo.

## 🌐 API de ejemplo

El backend expone un endpoint principal:

```http
GET /
```

Ejemplo de respuesta:

```json
{
  "id": 1,
  "name": "Hola desde Java"
}
```

Este valor se obtiene desde la entidad `Greeting` y se persiste en la tabla `greetings`.

## 📌 Objetivos de aprendizaje

Este repositorio está pensado para ir avanzando en estos niveles:

1. Sintaxis y fundamentos de Java
2. Programación orientada a objetos
3. Colecciones y lógica de negocio
4. Persistencia con JPA/Hibernate
5. APIs REST con Spring Boot
6. Contenerización con Docker
7. Integración de frontend y servicios reales

## 💡 Por qué es un buen proyecto para practicar

Porque mezcla teoría y aplicación real:

- no solo escribes clases aisladas
- puedes ver el resultado de tus cambios en una API real
- trabajas con entorno de desarrollo parecido a proyectos profesionales
- te permite integrar conceptos de backend, bases de datos y despliegue local

## 🚧 Estado actual

El proyecto está en fase de aprendizaje y crecimiento. La base de Java y el backend ya están funcionando como una primera versión funcional, y el siguiente paso natural es continuar con:

- mejoras de la API
- más entidades y relaciones
- validaciones y tests
- una interfaz de usuario
- consolidación de patrones y arquitectura

## 🧭 Siguientes pasos recomendados

- ampliar la lógica del gremio con más clases y misiones
- crear endpoints CRUD para entidades reales
- añadir tests unitarios e integración
- preparar una UI con React, Angular o un cliente web ligero
- encapsular configuraciones y secretos de entorno

## Contribuye

Si quieres seguir desarrollando este proyecto, puedes:

- mejorar la estructura del backend
- añadir nuevas entidades y rutas
- corregir bugs de configuración
- documentar nuevos ejercicios
- crear una interfaz para consumir la API

## Licencia

Este proyecto se comparte con fines de aprendizaje y experimentación.
