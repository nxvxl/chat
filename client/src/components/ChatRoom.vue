<template>
  <main class="chat-room">
    <h1>Chat Room {{ $store.state.room }}</h1>
    <nav class="topnav">
      <span class="online-users"
        >{{ $store.state.onlineUsers }} Online User</span
      >
      <button class="btn-small" @click="logout()">logout</button>
    </nav>
    <div class="chat-box">
      <div
        class="chat-bubble-wrapper"
        v-for="(message, index) in getMessages"
        :key="index"
      >
        <div v-if="message.type == 'notification'" class="chat-notification">
          {{ message.message }}
        </div>
        <div
          v-else
          class="chat-bubble"
          :class="{ sender: message.sessionId == $store.state.sessionId }"
        >
          <h5 class="chat-username">{{ message.username }}</h5>
          <p class="chat-content">{{ message.content }}</p>
        </div>
      </div>
    </div>
    <form @submit.prevent="sendMessage()" class="chat-input">
      <label>{{ $store.state.username }}</label>
      <input type="text" v-model="message" />
      <button type="submit">Send</button>
    </form>
    <audio src="@/assets/pristine.ogg" ref="notification"></audio>
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
      username: this.$store.state.username,
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
      this.$router.push('/');
    },
  },
  computed: {
    ...mapGetters(['getMessages']),
  },
  mounted() {
    this.socket = io(process.env.VUE_APP_SOCKETIO);
    this.socket.on('connect', () => {
      this.socket.emit('join', {
        room: this.$store.state.room,
        username: this.$store.state.username,
      });
      this.$store.dispatch('fetchMessages');
    });
    this.socket.on('notification', (message) => {
      this.$store.dispatch('pushNotification', message);
    });
    this.socket.on('message', (message) => {
      this.$refs.notification.currentTime = 0;
      this.$refs.notification.play();
      this.$store.commit('PUSH_MESSAGE', message);
    });
    this.scrollToBottom();
  },
  updated() {
    this.scrollToBottom();
  },
  destroyed() {
    this.socket.emit('leave', {
      room: this.$store.state.room,
      username: this.$store.state.username,
    });
    this.socket.disconnect();
    this.$store.commit('RESET');
  },
};
</script>
