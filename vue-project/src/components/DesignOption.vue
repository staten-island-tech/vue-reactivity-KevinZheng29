<template>
  <div>
    <img
      v-on:click="test"
      class="img"
      v-for="image in characterlink"
      :src="image"
      :alt="image.alt"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: function () {
        console.log('hi')
      },
      characterlink: [
        'https://th.bing.com/th/id/R.bb75d09bce90bd1eef9b69fc34cb02b3?rik=YgLpsYw65dCbsg&riu=http%3a%2f%2fmedia.giphy.com%2fmedia%2f19z865XUHqTcs%2fgiphy.gif&ehk=fpm2SWYOpP18S0CxqjtBgqkgGRNMg2qWR9W5nYK7Qmc%3d&risl=&pid=ImgRaw&r=0',
        'https://orig00.deviantart.net/2ec1/f/2016/310/2/1/link_pixel_art_32_bit_by_knightbruh-dampj2t.gif',
        'https://thumbs.gfycat.com/FaintSkinnyFowl-max-1mb.gif'
      ]
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
img {
  width: 200px;
  height: 200px;
}
</style>
