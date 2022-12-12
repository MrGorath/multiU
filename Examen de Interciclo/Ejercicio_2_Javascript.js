        /*

        Ejercicio 2: JavaScript & HTML

        Un equipo de fútbol ha tenido una buena campaña y desea premiar a sus jugadores con un 
        aumento del salario para la siguiente campaña. Los sueldos deben ajustarse de la siguiente 
        forma: 

        Sueldo Actual Aumento
        0 – 6000 (incluido los 6000) 20%
        6000 – 7900 (incluido los 7900) 10%
        7900 – 12000 (incluido los 12000) 5%
        más de 12000 0%

        • Diseñar un script que permita leer el salario de un jugador (input de tipo ”number”), y 
        que a continuación muestre en HTML, el tanto por ciento de aumento, el sueldo actual 
        y el sueldo aumentado, en el siguiente formato estrictamente:

        Aumento: “20%”
        Sueldo Actual: “1000.00 $”
        Sueldo Aumentado: “1200.00 $

        */

        function aumentoSueldo(sueldoActual) {

            var sueldoAu = document.getElementById(parseFloat("sueldoAumento"))
            var sueldoAumentado = 0

            if (sueldoActual <= 6000) {

                sueldoAumentado = sueldoActual + (sueldoActual * 0.2)
                sueldoAu.innerText = "Aumento: 20%" + "Sueldo Actual:" + sueldoActual + "Sueldo Aumentado:" + sueldoAumentado

            } else if (sueldoActual > 6000 && sueldoActual <= 7900) {

                sueldoAumentado = sueldoActual + (sueldoActual * 0.1)
                sueldoAu.innerText = "Aumento: 10%" + "Sueldo Actual:" + sueldoActual + "Sueldo Aumentado:" + sueldoAumentado

            } else if (sueldoActual > 7900 && sueldoActual <= 12000) {

                sueldoAumentado = sueldoActual + (sueldoActual * 0.05)
                sueldoAu.innerText = "Aumento: 5%" + "Sueldo Actual:" + sueldoActual + "Sueldo Aumentado:" + sueldoAumentado

            } else if (sueldoActual > 12000) {

                sueldoAu.innerText = "Aumento: 0%" + "Sueldo Actual:" + sueldoActual + "Sueldo Aumentado:" + sueldoActual

            }

        }        