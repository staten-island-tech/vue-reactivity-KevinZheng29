<script>
import { ref } from 'vue'
import { store } from '../store/store.js'
export default {
  data() {
    return {
      characterlink: [
        {
          Character: 1,
          IMG: 'https://th.bing.com/th/id/R.bb75d09bce90bd1eef9b69fc34cb02b3?rik=YgLpsYw65dCbsg&riu=http%3a%2f%2fmedia.giphy.com%2fmedia%2f19z865XUHqTcs%2fgiphy.gif&ehk=fpm2SWYOpP18S0CxqjtBgqkgGRNMg2qWR9W5nYK7Qmc%3d&risl=&pid=ImgRaw&r=0'
        },
        {
          Character: 2,
          IMG: 'https://orig00.deviantart.net/2ec1/f/2016/310/2/1/link_pixel_art_32_bit_by_knightbruh-dampj2t.gif'
        },
        {
          Character: 3,
          IMG: 'https://thumbs.gfycat.com/FaintSkinnyFowl-max-1mb.gif'
        },
        {
          Character: 4,
          IMG: 'https://orig00.deviantart.net/9fb3/f/2013/210/a/f/sonic_16_bit__gif__by_fulanit0-d6fso2y.png'
        },
        {
          Character: 5,
          IMG: 'https://th.bing.com/th/id/R.9453b20048f675f9764026f97eda2222?rik=XLvreeTbd%2fkhVQ&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2facq%2fLKG%2facqLKGAzi.gif&ehk=q1ewa%2fIm1GmAS8SlG4i32VUKxAGWQwykeAIQIC2NL7o%3d&risl=&pid=ImgRaw&r=0'
        }
      ],
      store
    }
  },
  methods: {
    test(data) {
      this.store.character = data.IMG
    }
  }
}
</script>

<template>
  <div class="wholepage">
    <div class="characterpage">
      <div class="displayed">
        <img
          draggable="false"
          class="currentcharacter"
          :src="this.store.character"
          :alt="this.store.character.alt"
        />
      </div>
    </div>
    <div class="modifypage">
      <div>
        <div class="choosecharacter">
          <img
            class="img"
            draggable="false"
            v-for="image in characterlink"
            :src="image.IMG"
            :alt="image.alt"
            v-on:click="test(image)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wholepage {
  border: 3px solid black;
}
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
