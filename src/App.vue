<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Global styles for dark theme with Star Wars feel */
body {
  background-color: #000;
  color: #ffc107;
  font-family: "Star Jedi", Arial, sans-serif;
  margin: 0;
  padding: 0;
}

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

button {
  background-color: #111;
  color: #ffc107;
  border: 1px solid #ffc107;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #333;
}


table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

table th,
table td {
  border: 1px solid #ffc107;
  padding: 8px;
  text-align: left;
}

table th {
  background-color: #111;
}

table td input,
table td textarea {
  width: 100%;
  background-color: #000;
  color: #ffc107;
  border: 1px solid #ffc107;
  padding: 4px;
}

table td textarea {
  resize: vertical;
}
</style>
