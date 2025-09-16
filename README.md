# Proyecto de Ingeniería de Software

\\LinkPruebas de endpoints realizadas en Postman\\
[text](https://sayen-barra2301-6694820.postman.co/workspace/saien's-Workspace~19449793-4e00-4b29-8b7d-7ead1dc06a7c/request/47294072-eabf61b3-8b76-4fe2-b6e1-b5913c60cf28?action=share&creator=47294072)

## Descripción
API REST desarrollada como material educativo para las clases de Ingeniería de Software. Este proyecto implementa un sistema de autenticación y gestión de usuarios utilizando Node.js, Express.js y PostgreSQL.

## Características
- Autenticación con JWT
- Base de datos PostgreSQL con TypeORM
- Arquitectura MVC
- Manejo de errores con handlers personalizados
- Validaciones de entrada
- Middleware de autenticación
- Variables de entorno para configuración

## Tecnologías Utilizadas
- **Backend:** Node.js, Express.js
- **Base de Datos:** PostgreSQL
- **ORM:** TypeORM
- **Autenticación:** JSON Web Tokens (JWT)
- **Encriptación:** bcrypt
- **Desarrollo:** nodemon

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/Marco-0107/CLASE-2-AYUDANTIA-ISW-ALUMNOS.git
cd CLASE-2-AYUDANTIA-ISW-ALUMNOS
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno creando un archivo `.env`:
```env
DB_HOST=localhost
DB_PORT=tu_port
DB_USERNAME=tu_user_bd
DB_PASSWORD=tu_password_bd
DATABASE=tu_base_de_datos

HOST=localhost
PORT=3000
JWT_SECRET=tu_jwt_secret
COOKIE_KEY=tu_cookie_key
```

4. Ejecuta el proyecto:
```bash
# Modo desarrollo
npm run dev

# Modo producción
npm start
```

## Endpoints

### Autenticación
- `POST /api/auth/register` - Registrar usuario
- `POST /api/auth/login` - Iniciar sesión

### Perfil
- `GET /api/profile/public` - Perfil público
- `GET /api/profile/private` - Perfil privado (requiere autenticación)

## Estructura del Proyecto
```
src/
├── config/          # Configuración de DB y variables de entorno
├── controllers/     # Controladores de las rutas
├── entities/        # Entidades de TypeORM
├── Handlers/        # Manejadores de respuestas
├── middleware/      # Middleware personalizado
├── routes/          # Definición de rutas
├── services/        # Lógica de negocio
└── index.js         # Punto de entrada de la aplicación
```

## Uso Educativo
Este proyecto ha sido desarrollado específicamente para el aprendizaje de conceptos fundamentales en Ingeniería de Software, incluyendo:
- Arquitectura de software
- APIs RESTful
- Bases de datos relacionales
- Autenticación y autorización
- Manejo de errores
- Buenas prácticas de desarrollo

## Autores
- **Marco Cerda**
- **Sebastian Espinoza**

## Licencia
Este proyecto está bajo una licencia académica para uso educativo exclusivamente en las clases de Ingeniería de Software. Ver el archivo [LICENSE](LICENSE) para más detalles.

---
*Desarrollado para fines educativos - Universidad del Bio Bio 2025-2*
"# Tarea-2" 
