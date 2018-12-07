export default class WalkieRecognition {

  constructor(options) {
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.lang = options.lang;
    this.callback = options.callback;
    this.intermediateCallback = options.intermediateCallback;
    this.sentQuery = '';
    this.recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      this.sentQuery = text;
      this.intermediateCallback(text);
      if (event.results[0].isFinal) {
        this.callback(text);
      }
    };
    this.recognition.onend = () => {
      if (this.sentQuery === '') {
         this.intermediateCallback('');
      }
    };
  }

  start() {
    this.sentQuery = '';
    this.recognition.start();
  }

  stop() {
    this.recognition.stop();
  }

}