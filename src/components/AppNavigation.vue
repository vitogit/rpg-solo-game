<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/character-sheet">Character Sheet</router-link></li>
      <li><router-link to="/missions-log">Mission Log</router-link></li>
      <li><router-link to="/game-log">Game Log</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppNavigation',
};
</script>

<style scoped>

</style>
