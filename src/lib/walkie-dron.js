import { ApiAiClient } from 'api-ai-javascript'

export default class WalkieDron {
  constructor(options) {
    this.lang = options.lang;
    this.token = options.token;
    this.client = new ApiAiClient({ accessToken: this.token, lang: this.lang});
  }

  say(text) {
    if (text && text !== '') {
      return this.client.textRequest(text, { originalRequest: {} })
        .then((response) => {
          return (response.result.fulfillment.speech || response.result.fulfillment.messages[0].type === 'simple_response') ?
            (response.result.fulfillment.speech || response.result.fulfillment.messages[0].textToSpeech) :
            '';
        });
    } else {
      return Promise.resolve('');
    }
  }

}