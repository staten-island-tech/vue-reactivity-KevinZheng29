<script setup>
import DesignOption from '../components/DesignOption.vue'
import CurrentCharacter from '../components/icons/CurrentCharacter.vue'
</script>

<template>
  <div class="parent">
    <div class="modifypage">
      <div>
        <DesignOption />
        <nav>
          <RouterLink to="/about">about</RouterLink>
        </nav>
      </div>
    </div>
    <div class="characterpage">
      <div>
        <CurrentCharacter />
      </div>
    </div>
  </div>
</template>

<style scoped>
.parent {
  display: flex;
}

.modifypage {
  background-image: url(https://i.pinimg.com/originals/c1/33/70/c133707cc0f9c97d7869917b084da190.jpg);
  width: 65%;
  height: 1000px;
}
.characterpage {
  background-color: aquamarine;
  width: 35%;
  height: 1000px;
}
</style>
