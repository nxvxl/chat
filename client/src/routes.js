import VueRouter from 'vue-router';
import LoginPage from './components/LoginPage.vue';
import ChatRoom from './components/ChatRoom.vue';
import store from './store.js';

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: LoginPage,
      name: 'login-page',
    },
    {
      path: '/room/',
      component: ChatRoom,
      name: 'chat-room',
      beforeEnter: (to, from, next) => {
        if (!store.state.username || !store.state.room) {
          next({
            path: '/',
          });
        } else {
          next();
        }
      },
    },
  ],
});

export default router;
