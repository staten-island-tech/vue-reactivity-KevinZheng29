<script>
import { store } from '../store/store.js'
export default {
  props: ['character'],
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <div class="background">
    <img class="img" :src="this.store.character" :alt="this.store.character.alt" />
  </div>
</template>

<style scoped>
.background {
  background-color: lightblue;
  width: 100%;
  height: 800px;
  border: solid 3px black;
}

.img {
  width: 180px;
  height: 180px;
}
</style>
