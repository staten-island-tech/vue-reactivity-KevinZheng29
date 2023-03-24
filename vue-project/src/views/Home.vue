<script>
export default {
  data() {
    return {
      page: 'tutorial'
    }
  },
  methods: {
    tutorialpage() {
      this.page === 'tutorial'
      console.log('hello')
    },
    rulepage() {
      this.page === 'rule'
      console.log('hello')
    }
  }
}
</script>

<template>
  <div class="homepage">
    <section>
      <div class="intro">
        <h1>some game</h1>
        <div class="btnpage">
          <button @click="tutorialpage()">Control</button>
          <button @click="rulepage()">Rules</button>
        </div>
      </div>
      <div class="subsection">
        <div v-if="page === 'tutorial'">
          <h1>this is a tutorial</h1>
        </div>
        <div v-if="page === 'rule'">
          <h1>rule page</h1>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
button {
  background-color: transparent;
  border: 3px solid black;
  font-size: 30px;
  margin-top: 30px;
  width: 20%;
}
.btnpage {
  display: flex;
  flex-direction: column;
}
.homepage {
  width: 100%;
  height: 800px;
  border: 3px solid black;
  background-image: url(https://cdnb.artstation.com/p/assets/images/images/029/413/443/large/sarah-clark-environment.jpg?1597452779);
  background-size: cover;
}
section {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.intro,
.subsection {
  border: 3px solid black;
  height: 795px;
}
.intro {
  width: 40%;
}
.subsection {
  width: 60%;
}
</style>
<script setup></script>
