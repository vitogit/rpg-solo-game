<template>
    <div>
      <h1>RPG Solo Game</h1>
      <AppNavigation />
      <router-view></router-view>
    </div>
  </template>

  <script>
  import AppNavigation from './AppNavigation.vue';
  import { globalState } from '@/globalState.js'

  export default {
    name: 'MainComponent',
    components: {
      AppNavigation,
    },
    created() {
      this.loadGlobalState();
      this.loadFirstSessionOrEmpty();
    },
    methods: {
      loadGlobalState() {
        const loadedGlobalState = JSON.parse(localStorage.getItem('globalState'));
        if (loadedGlobalState) {
          globalState.loadGlobalState(loadedGlobalState);
        }
      },
      loadFirstSessionOrEmpty() {
        if (globalState.sessions.length === 0) {
          globalState.addAndLoadEmptySession();
        } else {
          globalState.loadSession(globalState.sessions[0]);
        }
      },
    },
  };
  </script>
