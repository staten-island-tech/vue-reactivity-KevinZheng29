<script>
import { ref } from 'vue'
import { arr } from '../components/icons/CharacterList.vue'
export default {
  data() {
    return {
      characterlink: arr,
      currentcharacter:
        'https://th.bing.com/th/id/R.bb75d09bce90bd1eef9b69fc34cb02b3?rik=YgLpsYw65dCbsg&riu=http%3a%2f%2fmedia.giphy.com%2fmedia%2f19z865XUHqTcs%2fgiphy.gif&ehk=fpm2SWYOpP18S0CxqjtBgqkgGRNMg2qWR9W5nYK7Qmc%3d&risl=&pid=ImgRaw&r=0'
    }
  },
  methods: {
    test: function (data) {
      this.currentcharacter = data.IMG
    }
  }
}
</script>

<template>
  <div class="characterpage">
    <div class="displayed">
      <img class="currentcharacter" :src="currentcharacter" :alt="currentcharacter.alt" />
    </div>
  </div>
  <div class="modifypage">
    <div>
      <div class="choosecharacter">
        <img
          class="img"
          v-for="image in characterlink"
          :src="image.IMG"
          :alt="image.alt"
          v-on:click="test(image)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.displayed {
  text-align: center;
}
.currentcharacter {
  width: 180px;
  height: 180px;
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

.choosecharacter {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.img {
  width: 200px;
  height: 200px;
}

.testimg {
  width: 200px;
  height: 200px;
}
</style>
