<template>
  <main class="homepage">
    <section class="homepage__titlebox">
      <h3 class="homepage__titlebox__text">Chat with your friends</h3>
    </section>
    <status-list />
    <chat-list />
  </main>
</template>

<script>
import StatusList from "@/components/Home/StatusList.vue";
import ChatList from "@/components/Home/ChatList.vue";

export default {
  name: "HomeView",
  components: {
    StatusList,
    ChatList,
  },
};
</script>
