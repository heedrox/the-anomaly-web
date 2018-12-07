<template>
    <div id="walkie" class="walkie">
        <audio id="walkieAudio" loop="true">
            <source src="audio/radio-static.mp3" type="audio/mpeg">
        </audio>
        <walkie-screen :answers="answers" :speaking-sentence="speakingSentence"
                       :style="{ top: chatTop + 'px', left: chatLeft + 'px', width: chatWidth + 'px', height: chatHeight + 'px' }"></walkie-screen>
        <walkie-button :button-start="buttonPressed" :button-end="buttonReleased" :style="{ top: buttonTop + 'px', left: buttonLeft + 'px', width: buttonWidth + 'px', height: buttonHeight + 'px' }"></walkie-button>
    </div>
</template>

<script>
  import WalkieScreen from './WalkieScreen.vue';
  import WalkieButton from './WalkieButton.vue';

  export default {
    name: 'walkie',
    components: {
      WalkieScreen,
      WalkieButton,
    },
    props: ['answers', 'speakingSentence', 'buttonStart', 'buttonEnd', 'isDronSpeaking' ],
    data: function () {
      return {
        chatWidth: 100,
        chatHeight: 100,
        chatLeft: 50,
        chatTop: 50,
        buttonWidth: 100,
        buttonHeight: 100,
        buttonLeft: 100,
        buttonTop: 50,
      }
    }
    ,
    mounted() {
      document.getElementById('walkieAudio').load();
      document.getElementById('walkieAudio').volume = 0.3;
      this.positionElements();
      window.addEventListener('resize', this.positionElements);
    }
    ,
    watch: {
      isDronSpeaking: function(isSpeaking, beforeWasSpeaking) {
        console.log('changed dron speaking', isSpeaking);
        if (isSpeaking) {
          document.getElementById('walkieAudio').pause();
        } else {
          document.getElementById('walkieAudio').play();
        };
      },
    },
    methods: {
      positionElements() {
        const walkie = document.getElementById('walkie');
        const totalHeight = walkie.offsetHeight;
        const totalWidth = walkie.offsetWidth;
        const correctorFactor = Math.min(totalHeight / 1200, totalWidth / 596);
        this.chatWidth = 440 * correctorFactor;
        this.chatHeight = 660 * correctorFactor;
        this.chatLeft = (totalWidth - this.chatWidth - 16) / 2;
        this.chatTop = totalHeight - 370 * correctorFactor - this.chatHeight;
        this.buttonWidth = 382 * correctorFactor;
        this.buttonHeight = 78 * correctorFactor;
        this.buttonLeft = (totalWidth - this.buttonWidth - 16) / 2;
        this.buttonTop = totalHeight - (308 * correctorFactor);
      },
      buttonPressed() {
        document.getElementById('walkieAudio').pause();
        this.buttonStart();
      },
      buttonReleased() {
        document.getElementById('walkieAudio').play();
        this.buttonEnd();
      }
    },
  };
</script>

<style>

    .walkie {
        bottom: 0;
        margin: auto;
        background-image: url('img/walkie.png');
        background-size: contain;
        width: 100vw;
        height: 100%;
        background-repeat: no-repeat;
        background-position: bottom;
    }

    ::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }

</style>
