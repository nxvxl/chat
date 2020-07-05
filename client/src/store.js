import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    sessionId: '',
    username: '',
    room: '',
    messages: [],
    onlineUsers: 0,
  },
  getters: {
    getMessages: (state) => {
      return state.messages;
    },
  },
  mutations: {
    SET_SESSION_ID: (state, sessionId) => {
      state.sessionId = sessionId;
    },
    SET_USERNAME: (state, username) => {
      state.username = username;
    },
    SET_ROOM: (state, room) => {
      state.room = room;
    },
    SET_MESSAGES: (state, messages) => {
      state.messages = messages;
    },
    PUSH_MESSAGE: (state, message) => {
      state.messages.push(message);
    },
    RESET: (state) => {
      (state.messages = ''), (state.room = ''), (state.messages = []);
    },
    SET_ONLINE_USERS: (state, onlineUsers) => {
      state.onlineUsers = onlineUsers;
    },
  },
  actions: {
    fetchMessages: ({ commit, state }) => {
      axios
        .get(`${process.env.VUE_APP_BASE_API}/api/messages?room=${state.room}`)
        .then((res) => commit('SET_MESSAGES', res.data.messages))
        .catch(console.error);
    },
    sendMessage: ({ state }, message) => {
      axios
        .post(`${process.env.VUE_APP_BASE_API}/api/messages`, {
          sessionId: state.sessionId,
          username: state.username,
          room: state.room,
          content: message,
        })
        .catch(console.log);
    },
    pushNotification: ({ commit }, data) => {
      commit('PUSH_MESSAGE', data);
      commit('SET_ONLINE_USERS', data.onlineUsers);
    },
  },
});

export default store;
