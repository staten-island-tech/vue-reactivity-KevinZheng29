<script>
import rulepage from '../components/rulepage.vue'
import tutorial from '../components/tutorialpage.vue'
export default {
  data() {
    return {
      page: 'home'
    }
  },
  methods: {
    tutorialpage() {
      this.page = 'tutorial'
    },
    rulepage() {
      this.page = 'rulepage'
    },
    returnback() {
      this.page = 'home'
    }
  },
  components: {
    rulepage,
    tutorial
  }
}
</script>

<template>
  <div class="homepage">
    <div v-if="page === 'home'">
      <h1 style="font-size: 80px; text-align: center">some project</h1>
      <div class="btnpage">
        <button class="homepagebtn" @click="tutorialpage()">Control</button>
        <button class="homepagebtn" @click="rulepage()">Rules</button>
      </div>
    </div>
    <div v-if="page === 'tutorial'">
      <button class="otherpagebtn" @click="returnback()">Back</button>
      <tutorial />
    </div>
    <div v-if="page === 'rulepage'">
      <button class="otherpagebtn" @click="returnback()">Back</button>
      <rulepage />
    </div>
  </div>
</template>
<style scoped>
.homepagebtn {
  background-color: transparent;
  border: 3px solid black;
  font-size: 60px;
  width: 20%;
  margin: 150px 10px 0px 10px;
}
.btnpage {
  text-align: center;
}

.otherpagebtn {
  background-color: transparent;
  border: 3px solid black;
  font-size: 30px;
  width: 20%;
  margin-top: 50px;
  margin-left: 10px;
}
.homepage {
  width: 100%;
  height: 800px;
  border: 3px solid black;
  background-image: url(https://cdnb.artstation.com/p/assets/images/images/029/413/443/large/sarah-clark-environment.jpg?1597452779);
  background-size: cover;
}
</style>
<script setup></script>
