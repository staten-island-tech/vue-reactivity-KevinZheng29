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
  font-size: 20px;
}
.router {
  margin-left: 20px;
  margin-right: 20px;
}
</style>
