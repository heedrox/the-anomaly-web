<template>
    <input type="button" class="button" value="P. T. T."
    @mousedown="buttonStart()" @mouseup="buttonEnd()"
           @touchstart="buttonStart()" @touchend="buttonEnd()">
</template>

<script>
    export default {
      name: 'walkie-button',
      props: [ 'buttonStart', 'buttonEnd' ],
    }
</script>

<style>
    .button {
        position: absolute;
        border-radius: 4px;
        border-color: #cc3f3e;
        background-color: #b12625;
        outline: none;
        font-size: large;
        color: #6f0100;
    }

    .button:hover, .button:active {
        background-color: #b12625;
        outline: none;
    }
    .button:active {
        padding-top: 5px;
    }

</style>