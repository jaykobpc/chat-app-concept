<template>
  <div class="homepage__chatlist">
    <div class="homepage__chatlist__wrapper">
      <chat-card
        v-for="(card, index) in ChatList"
        :key="index"
        :cardImage="card.profileImg"
        :cardUsername="card.name"
        :cardTimestamp="card.timestamp"
        :cardText="card.msg"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import ChatCard from "./ChatCard.vue";

export default {
  name: "ChatList",
  components: {
    ChatCard,
  },
  setup() {
    const store = useStore();

    let ChatList = store.state.ContactList;

    return {
      ChatList,
    };
  },
};
</script>
