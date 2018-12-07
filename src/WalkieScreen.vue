<template>
    <div class="screen">
        <!-- Chat window -->
        <table v-for="a in answers" class="chat-window">

            <!-- Your messages -->
            <tr>
                <td class="bubble">{{a.query}}</td>
            </tr>

            <tr>
                <td>
                    <div v-if="a.response" class="bubble bot">
                        {{a.response}}
                    </div>
                </td>
            </tr>
        </table>
        <div v-if="speakingSentence" class="bubble">
            {{speakingSentence}}
        </div>
        <a id="bottom"></a>
    </div>
</template>

<script>
  export default {
    name: 'walkie-screen',
    props: ['answers', 'speakingSentence'],
    watch: {
      answers: function () {
        this.scrollDown();
      },
      speakingSentence: function (val) {
        if (val !== '') {
          this.scrollDown();
        }
      }
    },
    methods: {
      scrollDown: () => {
        setTimeout(() => {
          document.querySelector('#bottom').scrollIntoView({
            behavior: 'smooth'
          })
        }, 2);
      }
    }
  }
</script>

<style>
    .screen {
        background: transparent;
        margin: auto;
        position: absolute;
        overflow-y: scroll;
    }
    .chat-window {
        width: 100%;
    }
    .bubble {
        max-width:300px;
        background-color: #E1E1E1;
        padding:16px;
        border-radius:8px;
        color:rgba(0,0,0,0.7);
        float: right;
        animation: msg .25s linear;
        font-size: small;
    }

    .bubble.bot {
        background-color: white;
        float: left;
        margin-right:10px;
    }

    td {
        margin-top:30px;
        margin-bottom:10px;

    }
    @keyframes msg {
        0% { opacity:0; transform: scale(0.8); }
        100% { opacity:1; transform: scale(1); }
    }
</style>