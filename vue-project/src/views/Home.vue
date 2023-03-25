<script>
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
  }
}
</script>

<template>
  <div class="homepage">
    <div v-if="page === 'home'">
      <h1 style="font-size: 80px; text-align: center">Welcome to _________</h1>
      <div class="btnpage">
        <button class="homepagebtn" @click="tutorialpage()">Control</button>
        <button class="homepagebtn" @click="rulepage()">Rules</button>
      </div>
    </div>
    <div v-if="page === 'tutorial'">
      <button class="otherpagebtn" @click="returnback()">Back</button>
      <div class="tutorialpage">
        <h1 class="title">Control</h1>
        <div class="toh">
          <h1>↑ Up</h1>
          <h1>↓ Down</h1>
        </div>
      </div>
    </div>
    <div v-if="page === 'rulepage'">
      <button class="otherpagebtn" @click="returnback()">Back</button>
      <div class="rulepage">
        <h1 class="title">Rules:</h1>
        <div class="toh">
          <h1>1. There is no rule</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.title {
  font-size: 50px;
}
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
.toh {
  margin-left: 20px;
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
