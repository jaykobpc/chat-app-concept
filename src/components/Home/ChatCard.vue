<template>
  <router-link to="/chat" class="chatcard">
    <div class="chatcard__imagebox">
      <img
        :src="require(`@/assets/profile/${cardImage}`)"
        :alt="cardUsername"
        class="chatcard__imagebox__img"
      />
    </div>
    <div class="chatcard__textview">
      <div class="chatcard__groupview">
        <h3 class="chatcard__textview__title">{{ cardUsername }}</h3>
        <span class="chatcard__textview__timestamp">{{ cardTimestamp }}</span>
      </div>
      <p class="chatcard__textview__text">{{ cardText }}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ChatCard",
  props: {
    cardImage: {
      type: String,
    },
    cardUsername: {
      type: String,
    },
    cardTimestamp: {
      type: String,
    },
    cardText: {
      type: String,
    },
  },
};
</script>
