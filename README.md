# Tareas
Repositorio con las tareas a entregar en Universidad Galileo

## Solucion para la Calculadora de estaciones
La calculadora de estaciones consiste en un pequeño programa que nos pida el ingreso de un mes del año, luego de ingresado el año debiamos verificar esi el valor agregado era correcto, en caso de ser incorrecto se devolvia un error, en caso de ser correcto se procedia a verificar la estacion del mes.

Diciembre enero y febrero pertenecen a invierno.
Marzo, Abril y Mayo pertenecen a primavera.
Junio, Julio y Agosto pertenecen a verano.
Septiembre, Octubre y Noviembre pertenecen a otoño.

1. Obtuvimos el mes a verificar por medio de un prompt, lo cual consiste en una alerta en navegador que puede capturar datos.

2. Almacenamos el valor ingresado en una variable global llamada mes.

3. Verificamos mediante un IF que el valor ingresado se encuentre comprendido entre 1 y 12, de no ser asi devolvemos un error mediante un alert, de ser correcto seguimos con el flujo de la aplicacion.

4. Procedemos a catalogar la temporada del mes mediante varios IF los cuales funcionan de la misma manera, validando que el mes se encuentre entre los valores numericos a evaluar, cabe destacar que se uso la instruccion OR para devolver un true en caso la condicion se cumpliera en cualquiera de los escenarios.

5. Por ultimo le mostramos al usuario final nuestro nombre y numerio de carnet.
