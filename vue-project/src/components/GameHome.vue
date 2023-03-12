<script setup>
import DesignOption from '../components/DesignOption.vue'
import CurrentCharacter from '../components/icons/CurrentCharacter.vue'
</script>

<template>
  <div class="characterpage">
    <div class="displayed">
      <CurrentCharacter />
    </div>
  </div>
  <div class="modifypage">
    <div>
      <DesignOption />
    </div>
  </div>
</template>

<style scoped>
.displayed {
  text-align: center;
}
.modifypage {
  border: 2px solid black;
  background-image: url(https://i.pinimg.com/originals/c1/33/70/c133707cc0f9c97d7869917b084da190.jpg);
  height: 600px;
}
.characterpage {
  background-color: aquamarine;
  height: 250px;
}
</style>
