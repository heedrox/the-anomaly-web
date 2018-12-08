export default class WalkieSpeech {
  constructor(options) {
    this.lang = options.lang;
    this.callback = options.callback;
    this.interval = null;
  }

  speak(text) {
    var voices = speechSynthesis.getVoices();
    for (var i = 0; i < voices.length; i++) {
      console.log('Voice ' + i.toString() + ' ' + voices[i].name + ' ' + voices[i].voiceURI + ' ' + voices[i].lang);
    }
    this.clearInterval();
    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.voiceURI = 'native';
    // speech.pitch = 2;
    speech.rate = 1.2;
    speech.lang = this.lang;

    speech.addEventListener('end', () => {
      this.clearInterval();
      this.callback();
    });
    this.interval = setInterval(() => {
      if (!window.speechSynthesis.speaking) {
        this.clearInterval();
        this.callback();
      }
    }, 500);

    window.speechSynthesis.speak(speech);
  }

  cancel() {
    this.clearInterval();
    window.speechSynthesis.cancel();
  }

  clearInterval() {
    if (this.interval != null) {
      clearInterval(this.interval);
    }
  }
}