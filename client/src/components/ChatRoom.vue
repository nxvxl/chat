<template>
  <main class="chat-room">
    <h1>Chat Room {{ $store.state.room }}</h1>
    <button class="btn-small" @click="logout()">logout</button>
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
      <label>{{ $store.state.username }}</label>
      <input type="text" v-model="message" />
      <button type="submit">Send</button>
    </form>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';
import io from 'socket.io-client';

export default {
  name: 'ChatRoom',
  data() {
    return {
      message: '',
      socket: null,
    };
  },
  methods: {
    sendMessage() {
      if (!this.message) return;
      this.$store.dispatch('sendMessage', this.message);

      this.message = '';
    },
    scrollToBottom() {
      const chatBox = this.$el.querySelector('.chat-box');
      chatBox.scrollTop = chatBox.scrollHeight;
    },
    logout() {
      this.$store.commit('RESET');
      this.$router.push('/');
    },
  },
  computed: {
    ...mapGetters(['getMessages']),
  },
  mounted() {
    this.socket = io('http://localhost:8000');
    this.socket.on('connect', () => {
      this.$store.dispatch('fetchMessages');
    });
    this.socket.on('message', (message) => {
      console.log('message', message);
      this.$store.commit('PUSH_MESSAGE', message);
    });
    this.socket.on('disconnect', function() {});

    this.scrollToBottom();
  },
  updated() {
    this.scrollToBottom();
  },
  destroyed() {
    this.socket.disconnect();
  },
};
</script>
