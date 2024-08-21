<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/character-sheet">Character Sheet</router-link></li>
      <li><router-link to="/mission-log">Mission Log</router-link></li>
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
nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  background-color: #111;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  color: #ffc107;
  text-decoration: none;
  font-size: 1.2em;
}

nav ul li a:hover {
  color: #fff;
}
</style>
