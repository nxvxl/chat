<template>
  <main class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit()">
      <div class="form-control">
        <label>Username</label>
        <input type="text" v-model="username" required />
      </div>
      <div class="form-control">
        <label>Room</label>
        <input type="text" v-model="room" required />
      </div>
      <button type="submit" class="btn-block">Join</button>
    </form>
  </main>
</template>
<script>
export default {
  name: 'LoginPage',
  data: () => ({
    username: '',
    room: '',
  }),
  methods: {
    handleSubmit() {
      const sessionId = Math.random()
        .toString(36)
        .substring(2);
      this.$store.commit('SET_USERNAME', this.username);
      this.$store.commit('SET_ROOM', this.room);
      this.$store.commit('SET_SESSION_ID', sessionId);
      this.$router.push('/room');
    },
  },
};
</script>
