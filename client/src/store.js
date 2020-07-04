import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    username: '',
    room: '',
    messages: [],
  },
  getters: {
    getMessages: (state) => {
      return state.messages;
    },
  },
  mutations: {
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
  },
  actions: {
    fetchMessages: ({ commit, state }) => {
      axios
        .get(`http://localhost:8000/messages?room=${state.room}`)
        .then((res) => commit('SET_MESSAGES', res.data.messages));
    },
    sendMessage: ({ state }, message) => {
      axios
        .post('http://localhost:8000/messages', {
          username: state.username,
          room: state.room,
          content: message,
        })
        .catch(console.error);
    },
  },
});

export default store;
