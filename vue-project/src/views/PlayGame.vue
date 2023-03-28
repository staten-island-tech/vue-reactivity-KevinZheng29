<script>
import { store } from '../store/store.js'
import { ref } from 'vue'
export default {
  setup() {
    const sprite = ref(document.querySelector('.img'))
    const anumber = ref(100)
    return {
      anumber,
      sprite
    }
  },
  data() {
    return {
      store
    }
  },
  methods: {
    movement() {
      document.addEventListener('keyup', function () {
        console.log('entered')
      })
    }
  },
  beforeMount() {
    this.movement()
  },
  mounted() {
    console.log(this.anumber)
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
  background-image: url(https://cdn.gamedevmarket.net/wp-content/uploads/20191203165317/8657cfcd9a0aa1149a40988c4686478c.png);
  background-size: contain;
  width: 100%;
  height: 800px;
  border: solid 3px black;
}

.img {
  width: 180px;
  height: 180px;
  margin-top: 30%;
}
</style>
