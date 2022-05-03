<template>
  <div :class="[widgetRow]" class="chatview__chatwidget">
    <div v-if="origin == 'recipent'" class="chatview__chatimagebox">
      <img
        src="@/assets/profile/user_2.jpeg"
        alt="Profile"
        class="chatview__chatimagebox__img"
      />
    </div>
    <div :class="[textFlex]" class="chatview__textwidget">
      <div :class="[textBoxColor]" class="chatview__textbox">
        <p class="chatview__textbox__text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
          laudantium corporis.
        </p>
      </div>
    </div>
    <div class="chatview__timestamp">
      <span class="chatview__timestamp__time">18:32</span>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "ChatWidget",
  props: {
    origin: {
      type: String,
    },
  },
  setup(props) {
    const widgetRow = computed(() => {
      return props.origin == "recipent" ? "row" : "row-reverse space-between";
    });

    const textFlex = computed(() => {
        return props.origin == 'recipent' ? 'flex-1' : 'flex-0';
    })

    const textBoxColor = computed(() => {
        return props.origin == 'recipent' ? 'chat-recipent-bg text-left' : 'chat-sender-bg text-right';
    })

    return {
      widgetRow,
      textFlex,
      textBoxColor
    };
  },
};
</script>
