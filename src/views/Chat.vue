<template>
  <main class="chatview">
    <navbar />
    <chat-group />
  </main>
</template>

<script>
import Navbar from "@/components/Chat/Navbar.vue";
import ChatGroup from "@/components/Chat/ChatGroup.vue";

export default {
  name: "ChatView",
  components: {
    Navbar,
    ChatGroup,
  },
};
</script>
