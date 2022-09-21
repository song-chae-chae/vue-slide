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
        rewind: false,
        gap: '1rem',
        type: 'loop',
        padding: '5rem',
        autoplay: true,
        interval: 7000,
        speed: 1500,
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
    onMoved(splide, newIndex) {
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
    setSlideClass(splide) {
      let cloneList = splide.Components.Clones.clones;
      cloneList.forEach((element, index) => {
        this.classList(element).remove('previous').remove('next');
        if (this.previousIndex === index) this.classList(element).add('previous');
        if (this.nextIndex === index) this.classList(element).add('next');
      });
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
  },
};
</script>

<style lang="scss" scoped>
@mixin slider-img {
  position: absolute;
  top: 0;
  z-index: 2;
}

.splide__slide {
  overflow: hidden;

  &.previous {
    border: 10px solid blue;
    img {
      left: 50%;
      animation: 1s linear 0s back-sliding forwards;
      @include slider-img;
    }
  }

  &.is-active.is-visible {
    border: 10px solid black;
    img {
      left: 5%;
      animation: 1s linear 0s sliding forwards;
      @include slider-img;
    }
  }

  &.next {
    border: 10px solid red;
    img {
      left: 50%;
      animation: 0.8s ease-in-out 0s back-sliding forwards;
      @include slider-img;
    }
  }
}

@keyframes back-sliding {
  from {
    left: 50%;
  }
  to {
    left: 0%;
  }
}
@keyframes sliding {
  from {
    left: 5%;
  }
  to {
    left: 50%;
  }
}
</style>
