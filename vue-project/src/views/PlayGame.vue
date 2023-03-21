<script>
import data from '../views/GameHome.vue'
export default {
  components: {
    data
  },
  methods: {
    test: function () {
      console.log(data.data().currentcharacter)
    }
  }
}
</script>

<template>
  <div class="background">
    <h1 v-on:click="test()">djeifnef</h1>
  </div>
</template>

<style scoped>
.background {
  background-color: lightblue;
  width: 100%;
  height: 800px;
}
</style>
