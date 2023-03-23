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
    updatecharacter: function (data) {
      this.chosencharacter = data
      console.log(data)
    }
  }
}
</script>

<template>
  <div>
    <RouterLink class="router" to="/character">Select</RouterLink>
    <RouterLink class="router" to="/playgame">Play</RouterLink>
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
