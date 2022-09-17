<template>
  <div class="slide-wrapper">
    <splide :options="options" @splide:pagination:updated="onPaginationUpdated" @splide:move="onMoved">
      <splide-slide>
        <img src="https://cdn.pixabay.com/photo/2017/07/28/14/23/macarons-2548810__340.jpg" alt="image1" />
      </splide-slide>
      <splide-slide>
        <img src="https://cdn.pixabay.com/photo/2018/03/11/09/08/cookie-3216243__340.jpg" alt="image2" />
      </splide-slide>
      <splide-slide>
        <img src="https://cdn.pixabay.com/photo/2015/07/01/08/41/afternoon-tea-827395__340.jpg" alt="image3" />
      </splide-slide>
      <splide-slide>
        <img src="https://cdn.pixabay.com/photo/2016/03/27/19/23/tart-1283822__340.jpg" alt="image4" />
      </splide-slide>
    </splide>
  </div>
</template>

<script>
import {Splide, SplideSlide} from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        rewind: true,
        gap: "1rem",
        type: "loop",
        padding: "5rem",
      },
    };
  },
  methods: {
    onMoved() {
      console.log("moved");
    },
    onPaginationUpdated() {
      console.log("pagination");
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
}
</style>
