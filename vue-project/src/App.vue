<script setup>
import { RouterLink, RouterView } from 'vue-router'
import GameHome from '../src/views/GameHome.vue'
</script>

<script setup></script>

<template>
  <div>
    <RouterLink class="btn" to="/character">Select Character </RouterLink>
    <RouterLink class="btn" to="/playgame">Play Game</RouterLink>
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
