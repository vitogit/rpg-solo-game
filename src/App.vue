<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
/* Global styles for dark theme with Star Wars feel */
body {
  height: 100%;
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
  margin: 5px 0;
  cursor: pointer;
}

button:hover {
  background-color: #333;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  table-layout: fixed;
}

table th,
table td {
  border: 1px solid #ffc107;
  padding: 8px;
  text-align: center;
}

table th {
  background-color: #111;
}

table tr {
  cursor: pointer;
}

table tr:hover {
  background-color: #333;
}

table input,
table select,
table textarea {
  width: 80%;
  padding: 8px;
  border: 1px solid #ffc107;
  border-radius: 15px;
  background-color: #333;
  color: #ffc107;
}

table td textarea {
  resize: vertical;
}

input:focus, textarea:focus, select:focus {
  border-color: #ff5733; /* Change this to your desired focus color */
  outline: none; /* Remove the default outline */
}
</style>
