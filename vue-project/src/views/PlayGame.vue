<script>
export default {
  props: ['character']
}
</script>

<template>
  <div class="background">
    <h1>{{ character }}</h1>
  </div>
</template>

<style scoped>
.background {
  background-color: lightblue;
  width: 100%;
  height: 800px;
}
</style>
