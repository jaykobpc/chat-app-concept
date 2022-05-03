<template>
  <section class="homepage__statusbox">
    <swiper
      :slides-per-view="5"
      :space-between="5"
      class="homepage__statusbox__wrapper"
    >
      <swiper-slide
        v-for="(status, index) in StatusList"
        :key="index"
        class="homepage__statusbox__itembox"
      >
        <img
          :src="require(`@/assets/profile/${status.profileImg}`)"
          :alt="status.name"
          draggable="false"
          class="homepage__statusbox__image"
        />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { useStore } from "vuex";

export default {
  name: "StatusList",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const store = useStore();
    let StatusList = store.state.StatusList;

    return {
      StatusList,
    };
  },
};
</script>
