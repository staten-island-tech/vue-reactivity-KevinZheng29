<script>
import { RouterLink, RouterView } from 'vue-router'
import GameHome from './views/GameHome.vue'
import PlayGame from './views/PlayGame.vue'
export default {
  data() {
    return {
      page: 'select',
      chosencharacter: ''
    }
  },
  components: { GameHome, PlayGame },
  methods: {
    playgame: function () {
      this.page = 'playgame'
    },
    selectcharacter: function () {
      this.page = 'select'
    },
    updatecharacter: function (data) {
      this.chosencharacter = data
      console.log(data)
    }
  }
}
</script>

<template>
  <div>
    <button @click="selectcharacter()">Select Character</button>
    <button @click="playgame(), updatecharacter($event)">Play Game</button>
  </div>
  <div>
    <div v-if="page === 'select'">
      <GameHome />
    </div>
    <div v-if="page === 'playgame'">
      <PlayGame character="testrn" />
    </div>
  </div>

  <RouterView />
</template>

<style scoped>
.btn {
  margin-left: 10px;
  margin-right: 10px;
}
div {
  text-align: center;
}
</style>
