#TARJETA DE CREDITO VALIDA

# 1. Preámbulo



El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),
también llamado algoritmo de módulo 10, es un método de suma de verificación,
se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verifica
![ALGORITMO DE LUHN](https://user-images.githubusercontent.com/124645862/222280324-dda6ec59-642e-44a1-9f4f-192f305d5a70.png)
