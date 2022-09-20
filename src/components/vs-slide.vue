<template>
  <div class="slide-wrapper">
    <splide
      :options="options"
      @splide:pagination:updated="onPaginationUpdated"
      @splide:move="onMoved"
      @splide:active="onActived"
      @splide:mounted="onMounted"
    >
      <splide-slide
        v-for="(value, index) in images"
        :key="index"
        :class="[
          {next: nextIndex === index && nextIndex != previousIndex},
          {previous: previousIndex === index && nextIndex != previousIndex},
          `slide${index}`,
        ]"
        ref="slide"
      >
        <img :src="value" ref="image" :alt="`image${index + 1}`" />
      </splide-slide>
    </splide>
  </div>
</template>

<script>
import {Splide, SplideSlide} from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        rewind: true,
        gap: '1rem',
        type: 'loop',
        padding: '5rem',
        clones: 0,
        cloneStatus: true,
      },
      images: [
        'https://cdn.pixabay.com/photo/2017/07/28/14/23/macarons-2548810__340.jpg',
        'https://cdn.pixabay.com/photo/2018/03/11/09/08/cookie-3216243__340.jpg',
        'https://cdn.pixabay.com/photo/2015/07/01/08/41/afternoon-tea-827395__340.jpg',
        'https://cdn.pixabay.com/photo/2016/03/27/19/23/tart-1283822__340.jpg',
      ],
      slideIndex: 0,
      nextIndex: 0,
      previousIndex: 0,
    };
  },
  methods: {
    onMoved(splide, newIndex, prev, dest) {
      this.slideIndex = newIndex;
      this.setIndexes();
      this.setSlideClass(splide);
    },
    onPaginationUpdated(a, b) {},
    onActived(a, b) {
      this.slideIndex = b.index;
    },
    onMounted(splide) {
      this.setIndexes();
      this.setSlideClass(splide);
    },
    setIndexes() {
      this.previousIndex = this.slideIndex - 1 < 0 ? this.slideIndex - 1 + this.images.length : this.slideIndex - 1;
      this.nextIndex =
        this.slideIndex + 1 >= this.images.length ? this.slideIndex + 1 - this.images.length : this.slideIndex + 1;
    },
    classList(element) {
      let list = element.classList;

      return {
        add: function (c) {
          list.add(c);
          return list;
        },
        remove: function (c) {
          list.remove(c);
          return list;
        },
        toggle: function (c) {
          list.toggle(c);
          return list;
        },
      };
    },
    setSlideClass(splide) {
      let cloneList = splide.Components.Clones.clones;
      cloneList.forEach((element, index) => {
        this.classList(element).remove('previous').remove('next');
        if (this.previousIndex === index) this.classList(element).add('previous');
        if (this.nextIndex === index) this.classList(element).add('next');
      });
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
}
.next {
  border: 10px solid red;
}
.previous {
  border: 10px solid blue;
}
</style>
