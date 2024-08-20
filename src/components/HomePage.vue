<template>
  <div>
    <h1>Welcome, {{  globalState.characterSheet.name }}</h1>

    <h3>Sessions</h3>
    <button @click="addSession">Add New Session</button>
    <button @click="saveGlobalState">Save</button>

    <table class="session-table" ref="sessionTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Game</th>
          <!-- <th>Character Name</th>
          <th>Last Mission Description</th> -->
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="session in globalState.sessions" :key="session.id" @click="loadSession(session)">
          <td>
            <input v-model="session.name"/>
          </td>
          <td>
            <input v-model="session.game"/>
          </td>
          <!-- <td>{{ session.characterSheet.name }}</td>
          <td>{{ session.missionLog.length ? session.missionLog[session.missionLog.length - 1].description : '' }}</td> -->
          <td>
            <button @click.stop="deleteSession(session)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>
<script>
import { watch } from 'vue';
import Sortable from 'sortablejs';
import { globalState } from '@/globalState.js'

export default {
  name: 'HomePage',
  data() {
    return {
      globalState,
      games: ['James Bond', 'Sherlock Holmes', 'Star Wars'],
      tables: {
        'James Bond': { /* James Bond specific tables */ },
        'Sherlock Holmes': { /* Sherlock Holmes specific tables */ },
        'Star Wars': { /* Star Wars specific tables */ },
      }
    };
  },
  methods: {
    addSession() {
      const newSession = { id: Date.now(), name: '', game: '' };
      globalState.sessions.unshift(newSession);
      this.loadSession(newSession);
    },
    loadSession(session) {
      console.log('loadSession', session)
      globalState.loadSession(session);
    },
    deleteSession(session) {
      globalState.deleteSession(session);
    },
    saveGlobalState() {
      // TODOS this can be in a watch to call each time the state changes
      console.log('save globalState', globalState)
      localStorage.setItem('globalState', JSON.stringify(globalState));
    },
    loadGlobalState() {
      const loadedGlobalState = JSON.parse(localStorage.getItem('globalState'));
      if (loadedGlobalState) {
        globalState.loadGlobalState(loadedGlobalState);
      }
    },
  },
  created() {
    console.log('created')
    this.loadGlobalState();
    watch(() => globalState, () => {
      console.log('watched')
      // this.saveGlobalState();
    }, { deep: true });
  },
  mounted() {
    Sortable.create(this.$refs.sessionTable, {
      animation: 150,
      onEnd: (evt) => {
        globalState.moveSession(evt.oldIndex, evt.newIndex);
      },
    });
  },
};
</script>

<style scoped>
button {
  background-color: #111;
  color: #ffc107;
  border: 1px solid #ffc107;
  padding: 10px 20px;
  cursor: pointer;
  margin-bottom: 20px;
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
  text-align: center;
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

.session-table input {
  width: 80%;
  padding: 8px;
  border: 1px solid #ffc107;
  border-radius: 15px;
  background-color: #333;
  color: #ffc107;
}
</style>
