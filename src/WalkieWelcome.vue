<template>
    <div class="welcome">
        <p class="bubble">Soy DRON Johnson y necesito tu ayuda.</p>
        <p class="bubble">Se ha abierto una anomalía espacio temporal en un complejo de alta seguridad, y todo indica que estallará en 15 minutos.</p>
        <p class="bubble">Debido a la alta radiación, solo un DRON como yo puede moverse por el lugar. ¡Tenemos 15 minutos!</p>
        <p class="bubble">Dame instrucciones pulsando el botón rojo con la etiqueta P.T.T., que verás cuando presiones ¡EMPECEMOS!</p>
        <p class="bubble">Mantenlo pulsado para hablar. Suéltalo para dejar de hablar.</p>
    </div>
</template>
<style>
    .welcome {
        background: transparent;
        margin: auto;
        position: absolute;
        overflow-y: scroll;
        text-align: center;
    }
    .bubble {
        margin-left: auto;
        margin-right: auto;
        background-color: #fff;
        padding:8px;
        margin-top: 5px;
        margin-bottom: 5px;
        border-radius:8px;
        color:rgba(0,0,0,0.7);
        animation: msg .25s linear;
        font-size: small;
    }

</style>
