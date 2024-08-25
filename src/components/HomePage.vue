<template>
  <div>
    <h1>Current Session: {{ globalState.currentSession?.name }} ({{ globalState.currentSession?.game }})</h1>

    <h3>Sessions</h3>
    <button @click="addAndLoadEmptySession">Add New Session</button>
    <button @click="saveGlobalState">Save</button>

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
        <tr v-for="session in globalState.sessions" :key="session.id" @click="loadSession(session)">
          <td>
            <input v-model="session.name"/>
          </td>
          <td>
            <select v-model="session.game">
              <option v-for="game in games" :key="game" :value="game">{{ game }}</option>
            </select>
          </td>
          <td>{{ session.characterSheet?.name }}</td>
          <td>{{ session.missionsLog?.[session.missionsLog.length - 1]?.description}}</td>
          <td>
            <button @click.stop="deleteSession(session)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>
<script>
import { toRaw } from 'vue';
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
    addAndLoadEmptySession() {
      globalState.addAndLoadEmptySession();
    },
    loadSession(session) {
      globalState.loadSession(session);
    },
    deleteSession(session) {
      globalState.deleteSession(session);
    },
    saveGlobalState() {
      const rawGlobalState = toRaw(globalState);
      localStorage.setItem('globalState', JSON.stringify(rawGlobalState));
    }
  },
  created() {
    console.log('created home', globalState)
    // this.loadGlobalState();
    // watch(() => globalState, () => {
    //   console.log('watched')
    //   // this.saveGlobalState();
    // }, { deep: true });
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

</style>
