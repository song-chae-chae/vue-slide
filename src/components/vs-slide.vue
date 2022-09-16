<template>
  <div class="slide-wrapper">
    <splide :options="options">
      <splide-slide>
        <img src="https://cdn.pixabay.com/photo/2017/07/28/14/23/macarons-2548810__340.jpg" alt="image1" />
      </splide-slide>
      <splide-slide>
        <img src="https://cdn.pixabay.com/photo/2018/03/11/09/08/cookie-3216243__340.jpg" alt="image2" />
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
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
