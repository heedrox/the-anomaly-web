<template>
    <input type="button" class="button" :value="text" :class="buttonClass"
    @mousedown="start()" @mouseup="end()"
           @touchstart="start($event)" @touchend="end($event)">
</template>

<script>
    export default {
      name: 'walkie-button',
      props: [ 'buttonStart', 'buttonEnd', 'text', 'buttonClass' ],
      methods: {
        start: function(event) {
          if (event) event.preventDefault();
          this.buttonStart();
        },
        end: function(event) {
          if (event) event.preventDefault();
          this.buttonEnd();
        }
      }
    }
</script>

<style>
    .button.red {
        border-color: #cc3f3e;
        background-color: #b12625;
        color: #6f0100;
    }
    .button.blue {
        border-color: #3e38cc;
        background-color: #1006cc;
        color: #cfcfff;
    }
    .button {
        position: absolute;
        border-radius: 4px;
        outline: none;
        font-size: large;
    }

    .button.red:hover, .button.red:active {
        background-color: #b12625;
        outline: none;
    }
    .button.blue:hover, .button.blue:active {
        background-color: #1006cc;
        outline: none;
    }

    .button:active {
        padding-top: 5px;
    }

</style>