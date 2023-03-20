<script setup>
import { RouterLink, RouterView } from 'vue-router'
import GameHome from '../src/views/GameHome.vue'
</script>

<script setup></script>

<template>
  <div>
    <RouterLink to="/character">Select Character </RouterLink>
  </div>
  <GameHome />
  <RouterView />
</template>

<style scoped></style>
