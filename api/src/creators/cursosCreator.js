const { Cursos } = require('../db');

const cursosCreator = () => {
    Cursos.create({
        name: 'Curso de NodeJS',
        description: 'En este curso aprenderás a crear aplicaciones del lado del servidor, empezaremos conociendo un poco acerca de Node.js y su funcionamiento, luego utilizaremos el framework Express que nos facilitará la creación de APIs, veremos cómo realizar conexiones con bases de datos relacionales y no relacionales, aprenderemos cómo funcionan las autenticaciones con JWT y también cómo trabajar con sockets. Finalizaremos creando una aplicación web que nos permita dibujar y ver los cambios en tiempo real.',
        image: 'http://www.jorgehernandezramirez.com/wp-content/uploads/2017/07/nodelogo.png'
    }).then(() => {
        Cursos.create({
            name: 'Curso de React',
            description: 'El desarrollo frontend actual es muy complejo y las tradicionales técnicas de separar HTML, CSS y JavaScript en archivos diferentes no es capaz de resolver las necesidades de una aplicación compleja con la que interactuarán muchos usuarios y que requiere un nuevo enfoque: separar las interfaces por componentes. React es la librería JavaScript creada por Facebook para crear interfaces web organizadas por componentes, que son piezas de UI que se pueden reutilizar en diferentes lugares de la aplicación. React usa la sintaxis JSX que permite crear a la vez la estructura y funcionalidad de un componente sin separar HTML y JavaScript. JSX tiene una sintaxis parecida a HTML por lo que la curva de aprendizaje es muy sencilla. En este curso aprenderás React desde las bases, la creación de componentes y su ciclo de vida, componentes funcionales y hooks. También aprenderás a crear las rutas de tu app con React Router, peticiones HTTP y buenas prácticas con React en 2021.',
            image: 'https://www.nicepng.com/png/detail/222-2224705_react-js-logo.png'
        }).then(() => {
            Cursos.create({
                name: 'Curso de Angular',
                description: 'Angular JS es la primer versión del afamado framework Angular, y aunque ya han salido nuevas versiones estando al punto en el que actualmente se encuentra en la versión 4 este framework sigue teniendo soporte y es aplicable aún para la creación de aplicaciones. Angular es un framework de Javascript soportado por Google para la creación de aplicaciones web de una sola página (SPA), en este curso aprende a utilizar Angular para crear aplicaciones web cuya lógica reside fuertemente en el Frontend.',
                image: 'https://www.salamarkesa.com/wp-content/uploads/2019/10/angular-servidor-subir.png'
            }).then(() => {
                Cursos.create({
                    name: 'Curso de Vue',
                    description: 'Vue.js es un framework progresivo para frontend que combina las buenas prácticas de React y Angular con una curva de aprendizaje muy sencilla que lo convierte en uno de los preferidos de la comunidad. Las principales características de la versión 3 de Vue 3 son composition API (los hooks de Vue) y su compatibilidad con Vue 2. Este curso aprenderás las nuevas características de Vue 3 y los conceptos más importantes de este framework (options API, directivas, conditional rendering, etc). También te enseñaremos a reutilizar la lógica de los componentes con la nueva feature de Vue 3: composition API. Además, aprenderás a crear una SPA (Single Page Application) utilizando vue-router para agregar un sistema de rutas de manera sencilla y a optimizar el código de tu aplicación web antes de subirlo a producción.',
                    image: 'https://ih1.redbubble.net/image.393347411.1344/farp,small,wall_texture,product,750x1000.u5.jpg'
                }).then(() => {
                    Cursos.create({
                        name: 'Curso de Express',
                        description: 'Si ya aprendiste Node.js el siguiente paso es aprender un framework que te simplifique las tareas pesadas como la configuración del servidor, la creación de rutas, servicios web, motores de plantillas, información de sesiones o servir archivos estáticos. Esas tareas que pueden tomar mucho tiempo se vuelven muy sencillas con Express.js el framework más popular de Node.js por su simplicidad y fácil aprendizaje. Este curso te enseñará a configurar tu servidor, a realizar tests y a desarrollar una aplicación web del lado del servidor con Node.js y Express.js ¡Comienza ahora!',
                        image: 'https://manticore-labs.com/wp-content/uploads/2019/02/express.png'
                    }).then(() => {
                        Cursos.create({
                            name: 'Curso de PostgreSQL',
                            description: 'Con este curso aprenderás a utilizar el motor de bases de datos Postgresql para sacarle provecho a sus características principales: Lógica en la base de datos con Funciones, ejecutar procesos creando triggers que están escuchando los cambios a tus datos. Te permitirá crear soluciones que un framework no te ofrece directamente.',
                            image: 'https://e7.pngegg.com/pngimages/738/738/png-clipart-postgresql-database-logo-application-software-computer-software-mysql-logo-blue-text.png'
                        }).then(() => {
                            Cursos.create({
                                name: 'Curso de Sequelize',
                                description: 'Cuando hacemos algún desarrollo del lado del backend una de las tareas más comunes que podemos realizar es manipular bases de datos(Insertar, buscar, actualizar, borrar), para esto generalmente se escribe directamente la consulta SQL en el lenguaje de programación y asi conseguir los datos, un ORM (Object-Relational mapping) nos permite convertir tablas de una base de datos en entidades en un lenguaje de programación orientado a objetos, lo cual agiliza bastante el acceso a estos datos. Sequelize es un ORM para Nodejs que nos permite manipular varias bases de datos SQL de una manera bastante sencilla, entre estas bases de datos podemos encontrar: mysql, sqlite, postgres, mssql.',
                                image: 'https://open-telemetry.github.io/opentelemetry-sqlcommenter/images/sequelize-logo.png'
                            })
                        }).then(() => {
                            Cursos.create({
                                name: 'Curso de MongoDB',
                                description: 'Seguro conoces las tradicionales bases de datos relacionales basadas en tablas como MySQL o Postgres. Pero, ¿sabías que existen sistemas de bases de datos no basados en tablas y que pueden darte el mismo o mejor rendimiento? Estos sistemas se llaman NoSQL y MongoDB es uno de los más populares del mundo, usado por millones de desarrolladores y empresas como Adobe, Google, Cisco o Electronic Arts. MongoDB está basado en documentos con una estructura similar a los objetos JSON por lo que es muy fácil empezar a usarlo. Además ofrece una gran escalabilidad, flexibilidad, modelo de consultas e indexación avanzado. En este curso aprenderás desde instalar MongoDB, a crear tus colecciones, manejar un ODM y crear consultas. Si quieres implementar una base de datos NoSQL en tus proyectos, ¡este curso es para ti! ¡Comienza hoy mismo',
                                image: 'https://res.cloudinary.com/hevo/image/upload/v1626694700/hevo-blog/MongoDB-sm-logo-500x400-1-1.gif'
                            })
                        })
                    })
                })
            })
        })
    })
}

module.exports = cursosCreator;