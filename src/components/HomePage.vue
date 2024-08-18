<template>
  <div>
    <form @submit.prevent="addSession">
      <div>
        <label for="sessionName">Session Name:</label>
        <input v-model="newSession.name" id="sessionName" required />
      </div>
      <div>
        <label for="gameType">Game Type:</label>
        <select v-model="newSession.game" id="gameType" required>
          <option disabled value="">Please select one</option>
          <option v-for="game in games" :key="game" :value="game">{{ game }}</option>
        </select>
      </div>
      <button type="submit">Add Session</button>
    </form>

    <h3>Old Sessions</h3>
    <table class="session-table" ref="sessionTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Game</th>
          <th>Character Name</th>
          <th>Last Mission Description</th>
          <th>Last Game Log Entry</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="session in globalState.sessions" :key="session.name" @click="loadSession(session)">
          <td>{{ session.name }}</td>
          <td>{{ session.game }}</td>
          <td>{{ session.characterName }}</td>
          <td>{{ session.lastMissionDescription }}</td>
          <td>{{ session.lastGameLogEntry }}</td>
        </tr>
      </tbody>
    </table>

    <div v-if="selectedTables">
      <h3>Tables for {{ newSession.game }}</h3>
      <pre>{{ selectedTables }}</pre>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue';
import Sortable from 'sortablejs';

export default {
  name: 'HomePage',
  data() {
    return {
      newSession: {
        name: '',
        game: '',
      },
      games: ['James Bond', 'Sherlock Holmes', 'Star Wars'],
      tables: {
        'James Bond': { /* James Bond specific tables */ },
        'Sherlock Holmes': { /* Sherlock Holmes specific tables */ },
        'Star Wars': { /* Star Wars specific tables */ },
      },
    };
  },
  computed: {
    globalState() {
      return inject('globalState');
    },
    selectedTables() {
      return this.tables[this.newSession.game] || null;
    },
  },
  methods: {
    addSession() {
      this.globalState.sessions.push({ ...this.newSession });
      this.newSession.name = '';
      this.newSession.game = '';
    },
    loadSession(session) {
      this.globalState.currentSession = session;
    },
  },
  mounted() {
    Sortable.create(this.$refs.sessionTable, {
      animation: 150,
      onEnd: (evt) => {
        const movedItem = this.globalState.sessions.splice(evt.oldIndex, 1)[0];
        this.globalState.sessions.splice(evt.newIndex, 0, movedItem);
      },
    });
  },
};
</script>

<style scoped>
form {
  margin-bottom: 20px;
}

form div {
  margin-bottom: 10px;
}

form label {
  display: block;
  margin-bottom: 5px;
}

form input,
form select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ffc107;
  border-radius: 3px;
  background-color: #333;
  color: #ffc107;
}

button {
  background-color: #111;
  color: #ffc107;
  border: 1px solid #ffc107;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background-color: #333;
}

.session-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.session-table th,
.session-table td {
  border: 1px solid #ffc107;
  padding: 8px;
  text-align: left;
}

.session-table th {
  background-color: #111;
}

.session-table tr {
  cursor: pointer;
}

.session-table tr:hover {
  background-color: #333;
}
</style>
