<template>
  <div class="main-view-wrapper">
    <div class="slide-container">
      <vs-slide></vs-slide>
    </div>
  </div>
</template>

<script>
import vsSlide from "@/components/vs-slide.vue";
export default {
  components: {vsSlide},
};
</script>

<style lang="scss" scoped>
.slide-container {
  width: 70%;
  margin: 0 auto;
}
</style>
