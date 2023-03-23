<script>
import { RouterLink, RouterView } from 'vue-router'
import GameHome from './views/GameHome.vue'
import PlayGame from './views/PlayGame.vue'
import { store } from './store/store.js'
export default {
  data() {
    return {
      store,
      test: 'this is a test'
    }
  },
  components: { GameHome, PlayGame },
  methods: {}
}
</script>

<template>
  <div>
    <RouterLink class="router" to="/character">Select</RouterLink>
    <RouterLink class="router" :to="{ path: '/playgame' }">Play</RouterLink>
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
.router {
  margin-left: 20px;
  margin-right: 20px;
}
</style>
