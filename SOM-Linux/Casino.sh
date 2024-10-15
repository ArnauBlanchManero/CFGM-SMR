#!/bin/bash

puntaje=0

# Función que genera un número aleatorio entre 1 y 10
function generar_numero_aleatorio {
    echo $((1 + $RANDOM % 10))
}

while true; do
    read -p "Elige un número del 1 al 10 para jugar: " numero_elegido
    numero_aleatorio=$(generar_numero_aleatorio)
    if [[ $numero_elegido -eq $numero_aleatorio ]]; then
        echo "¡Ganaste! El número aleatorio era $numero_aleatorio. Sumas 10 puntos."
        puntaje=$((puntaje + 10))
    else
        echo "Perdiste. El número aleatorio era $numero_aleatorio. Pierdes 5 puntos."
        puntaje=$((puntaje - 5))
    fi
    echo "Puntaje total: $puntaje"
done


