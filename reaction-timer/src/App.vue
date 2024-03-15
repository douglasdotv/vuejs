<template>
  <h1>Reaction Timer</h1>
  <h2>Test your reaction time!</h2>
  <button @click="startGame" :disabled="isPlaying">Play</button>
  <Block :delay="delay" v-if="isPlaying" @game-over="endGame" />
  <Results :scores="scores" />
  <img class="logo" alt="Vue logo" src="./assets/logo.png">
</template>

<script>
import Block from './components/Block.vue'
import Results from './components/Results.vue'

export default {
  name: 'App',
  components: {
    Block, Results
  },
  data() {
    return {
      delay: 0,
      score: 0,
      isPlaying: false,
      scores: []
    }
  },
  methods: {
    startGame() {
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
    },
    endGame(reactionTime) {
      this.score = reactionTime
      this.isPlaying = false
      this.scores.push({ id: this.scores.length + 1, time: reactionTime, rank: this.getRank(reactionTime) })
    },
    getRank(reactionTime) {
      if (reactionTime < 200) {
        return 'Godlike'
      } else if (reactionTime < 250) {
        return 'Great'
      } else if (reactionTime < 300) {
        return 'Good'
      } else if (reactionTime < 350) {
        return 'Average'
      } else {
        return 'Bad'
      }
    },
    endGame(reactionTime) {
      this.score = reactionTime
      this.isPlaying = false
      this.scores.push({ id: this.scores.length + 1, time: reactionTime, rank: this.getRank(reactionTime) })
    },
    getRank(reactionTime) {
      if (reactionTime < 200) {
        return 'Godlike'
      } else if (reactionTime < 250) {
        return 'Great'
      } else if (reactionTime < 300) {
        return 'Good'
      } else if (reactionTime < 350) {
        return 'Average'
      } else {
        return 'Bad'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  margin: 40px 0 20px;
  width: 100px;
  height: 100px;
}
</style>