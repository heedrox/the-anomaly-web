<template>
    <section id="app">
        <walkie :answers="this.answers" :speaking-sentence="this.query"
                :button-start="this.microphoneStart" :button-end="this.microphoneEnd"
                :is-dron-speaking="this.isDronSpeaking"
                :startGameCallback = "this.startGame"></walkie>
    </section>
</template>

<style lang="sass">
    @import url('https://fonts.googleapis.com/css?family=Roboto')
    @import "App.sass"
</style>

<script>
  import Walkie from './Walkie.vue'
  import config from './../config'
  import WalkieRecognition from './lib/walkie-recognition';
  import WalkieSpeech from './lib/walkie-speech';
  import WalkieDron from './lib/walkie-dron';
  import cleanSsml from './lib/clean-ssml';

  export default {
    name: 'app',
    components: {
      Walkie
    },
    data: function () {
      return {
        answers: [],
        query: '',
        recognition: null,
        speech: null,
        dron: null,
        isDronSpeaking: false,
      }
    },
    mounted() {
      this.recognition = new WalkieRecognition({
        lang: config.locale,
        intermediateCallback: (txt) => this.showMessage(txt),
        callback: (txt) => this.dronSay(txt),
      });
      this.speech = new WalkieSpeech({
        lang: config.locale,
        callback: () => this.speechEnd(),
      });
      this.dron = new WalkieDron({
        lang: config.locale,
        token: config.token,
      })
    },
    methods: {
      startGame() {
        this.dronSay('Jugar a la anomalía');
      },
      showMessage(text) {
        this.query = text;
      },
      dronSay(text) {
        this.showMessage(text);
        console.log('text', text);
        this.dron.say(text)
          .then((response) => this.dronListen(response));
      },
      dronListen(response) {
        if (response) {
          const text = cleanSsml(response);
          this.answers.push({ query: this.query, response: text });
          this.speechStart(text);
          this.showMessage('');
        }
      },
      microphoneStart() {
        this.showMessage('...');
        this.speech.cancel();
        this.recognition.start();
      },
      microphoneEnd() {
        this.recognition.stop();
      },
      speechStart(text) {
        this.isDronSpeaking = true;
        this.speech.speak(text);
      },
      speechEnd() {
        console.log('stops speaking');
        this.isDronSpeaking = false;
      },
    },
  }
</script>

<style>
    html {
        height: 100%;
    }

    body {
        margin: 0;
        background-image: url('img/fondo.jpg');
        background-size: cover;
        font-family: 'Roboto', 'Google Sans', sans-serif;
        height: 100%;
    }

    #app {
        height:100%;
    }
</style>