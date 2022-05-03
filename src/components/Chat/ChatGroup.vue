<template>
  <div class="chatgroup">
    <div class="chatgroup__chatcolumn">
      <chat-widget origin="recipent" />
      <chat-widget origin="sender" />
      <chat-widget origin="recipent" />
      <chat-widget origin="sender" />
      <chat-widget origin="recipent" />
      <chat-widget origin="sender" />
      <chat-widget origin="recipent" />
      <chat-widget origin="sender" />
    </div>
    <div class="chatgroup__chatbox">
      <div class="chatgroup__chatbox__wrapper">
        <input
          type="text"
          placeholder="Type your message..."
          class="chatgroup__chatbox__input"
        />
        <button class="chatgroup__chatbox__btn">
            <i class='bx bxs-send' ></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ChatWidget from "@/components/Chat/ChatWidget.vue";

export default {
  name: "ChatGroup",
  components: {
    ChatWidget,
  },
};
</script>
