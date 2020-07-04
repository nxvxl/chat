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
      {
        username: 'C',
        room: 'test',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quisquam voluptas laudantium, assumenda voluptatum quis facere eius itaque placeat dolorem id nemo? Repellendus adipisci inventore ex voluptatum sint, voluptas sunt?',
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
  },
});

export default store;
