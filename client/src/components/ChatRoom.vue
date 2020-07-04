<template>
  <main class="chat-room">
    <h1>Chat Room {{ $store.state.room }}</h1>
    <div class="chat-box">
      <div
        class="chat-bubble"
        v-for="(message, index) in getMessages"
        :key="index"
      >
        <h5 class="chat-sender">{{ message.username }}</h5>
        <p class="chat-content">{{ message.content }}</p>
      </div>
    </div>
    <form @submit.prevent="sendMessage()" class="chat-input">
      <input type="text" />
      <button type="submit">Send</button>
    </form>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'ChatRoom',
  computed: {
    ...mapGetters(['getMessages']),
  },
};
</script>
