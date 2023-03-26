<script>
import { RouterLink, RouterView } from 'vue-router'
import GameHome from './views/GameHome.vue'
import PlayGame from './views/PlayGame.vue'
import { store } from './store/store.js'
export default {
  data() {
    return {
      store
    }
  },
  components: { GameHome, PlayGame },
  methods: {}
}
</script>

<template>
  <div class="btnpage">
    <RouterLink class="router" to="/">Home</RouterLink>
    <RouterLink class="router" to="/character">Select</RouterLink>
    <RouterLink class="router" :to="{ path: '/playgame' }">Play</RouterLink>
  </div>

  <RouterView />
</template>

<style scoped>
.btnpage {
  text-align: center;
  height: 40px;
  width: 100%;
  font-size: 20px;
  background-color: rgb(160, 160, 209);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.router {
  margin-left: 20px;
  margin-right: 20px;
  border: 3px black solid;
  width: 100px;
  background-color: white;
  color: black;
}
</style>
