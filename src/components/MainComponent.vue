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
      console.log('created main')
      this.loadGlobalState();
      // watch(() => globalState, () => {
      //   console.log('watched')
      //   // this.saveGlobalState();
      // }, { deep: true });
    },
    methods: {
      loadGlobalState() {
        const loadedGlobalState = JSON.parse(localStorage.getItem('globalState'));
        if (loadedGlobalState) {
          globalState.loadGlobalState(loadedGlobalState);
        }
      }
    },
  };
  </script>

  <style scoped>
  /* Add styles here */
  </style>
