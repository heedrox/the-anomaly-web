# The Anomaly web game/ La Anomalía juego web

Una anomalía en el espacio tiempo se ha abierto en un laboratorio.

Da instrucciones a DRON para investigar lo ocurrido y salvar a la humanidad en menos de 15 minutos.

Controla el dron a través de un walkie talkie. Mantén pulsado el botón "PTT" (Push To Talk),
mientras hablas. Espera la respuesta de DRON.

¡Salva el mundo!

## ¿Cómo funciona?

Esto solo es un front cliente para el motor de "La Anomalía", que está en Dialogflow.
El código de fulfillment de las firebase functions de Dialogflow lo puedes encontrar aquí:
https://github.com/jmarti-theinit/the-anomaly

## ¿Por qué este repo?

Esto fue realizado como un experimento para ver si podía replicarse la experiencia
de un walkie talkie a través de una aplicación controlada por Dialogflow (el framework de referencia
para Google Assistant).

Personalmente, creo que el resultado es bastante satisfactorio.

## Descárgalo y pruébalo.

`npm install`

`npm run dev`

# Gracias!

* Basado en Dialogflow web client - https://github.com/MishUshakov/dialogflow-web

Kudos para ellos!
