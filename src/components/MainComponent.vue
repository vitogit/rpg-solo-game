<template>
    <div>
      <h1>RPG Solo Game</h1>
      <AppNavigation />
      <router-view></router-view>
    </div>
  </template>

  <script>
  import AppNavigation from './AppNavigation.vue';

  export default {
    name: 'MainComponent',
    components: {
      AppNavigation,
    },
  };
  </script>

  <style scoped>
  /* Add styles here */
  </style>
