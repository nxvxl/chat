import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    username: 'user',
    room: 'test',
    messages: [
      {
        username: 'A',
        room: 'test',
        content: 'hello',
      },
      {
        username: 'B',
        room: 'test',
        content: 'hello to you too',
      },
    ],
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
  },
  actions: {
    sendMessage: ({ commit, state }, message) => {
      commit('PUSH_MESSAGE', {
        username: state.username,
        room: state.room,
        content: message,
      });
    },
  },
});

export default store;
