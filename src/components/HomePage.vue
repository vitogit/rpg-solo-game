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
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="session in globalState.sessions" :key="session.name" @click="loadSession(session)">
          <td>{{ session.name }}</td>
          <td>{{ session.game }}</td>
          <td>{{ session.characterSheet.name }}</td>
          <td>{{ session.missionLog.length ? session.missionLog[session.missionLog.length - 1].description : '' }}</td>
          <td>
            <button @click.stop="deleteSession(session)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="selectedTables">
      <h3>Tables for {{ newSession.game }}</h3>
      <pre>{{ selectedTables }}</pre>
    </div>

    <button @click="exportSessions">Export Sessions</button>
    <input type="file" @change="importSessions" />
  </div>
</template>
<script>
import { inject, watch } from 'vue';
import Sortable from 'sortablejs';
import Session from '@/models/Session';

export default {
  name: 'HomePage',
  data() {
    return {
      newSession: new Session(),
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
      this.globalState.sessions.push(new Session(
        this.newSession.name,
        this.newSession.game,
        this.newSession.characterSheet,
        this.newSession.missionLog,
        this.newSession.gameLog
      ));
      this.saveSessions();
      this.newSession = new Session();
    },
    loadSession(session) {
      this.globalState.currentSession = session;
    },
    deleteSession(session) {
      const index = this.globalState.sessions.indexOf(session);
      if (index > -1) {
        this.globalState.sessions.splice(index, 1);
        this.saveSessions();
      }
    },
    saveSessions() {
      localStorage.setItem('sessions', JSON.stringify(this.globalState.sessions));
    },
    loadSessions() {
      const sessions = JSON.parse(localStorage.getItem('sessions'));
      if (sessions) {
        this.globalState.sessions = sessions.map(session => new Session(
          session.name,
          session.game,
          session.characterSheet,
          session.missionLog,
          session.gameLog
        ));
      }
    },
    exportSessions() {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.globalState.sessions));
      const downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", "sessions.json");
      document.body.appendChild(downloadAnchorNode);
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    },
    importSessions(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const sessions = JSON.parse(e.target.result);
        this.globalState.sessions = sessions.map(session => new Session(
          session.name,
          session.game,
          session.characterSheet,
          session.missionLog,
          session.gameLog
        ));
        this.saveSessions();
      };
      reader.readAsText(file);
    },
  },
  mounted() {
    this.globalState.currentSession = new Session();
    this.loadSessions();

    Sortable.create(this.$refs.sessionTable, {
      animation: 150,
      onEnd: (evt) => {
        const movedItem = this.globalState.sessions.splice(evt.oldIndex, 1)[0];
        this.globalState.sessions.splice(evt.newIndex, 0, movedItem);
        this.saveSessions();
      },
    });

    watch(() => this.globalState.sessions, () => {
      this.saveSessions();
    }, { deep: true });

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
