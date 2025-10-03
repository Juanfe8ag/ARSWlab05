## ARSW LAB 05
## Autor: Juan Felipe Ochoa

## Construción de un cliente 'grueso' con un API REST, HTML5, Javascript y CSS3. Parte I

Para esta primera parte se plantea la creación de instancias estáticas de Javascript para la visualización de 
los diferentes Blueprints creados. Para ello, se necesitan dos cosas:

1. El API Rest creado en el anterior laboratorio
2. La creación de un directorio estático para el Front

## Uso y visualización
Para el uso iniciamos nuestra aplicación con el comando 'mvn spring-boot:run' y en el navegador buscamos 
'http://localhost:8080/index.html' para la visualización de la creación del Front.

![Pantalla General.png](util/Pantalla%20General.png)

En esta pantalla vemos un lugar para ingresar el autor, los 'blueprints' asignados a este y los puntos a su vez
asignados. Además, se ve un cuadro tipo Canvas (implementar para la próxima parte) para la visualización de los 'blueprints'.

Las pruebas que se tienen son dos, juan y maria que tienen dos 'blueprints' asociados.

![Test Juan.png](util/Test%20Juan.png)

![Test Maria.png](util/Test%20Maria.png)