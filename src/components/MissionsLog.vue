<template>
    <div>
      <h2>Mission Log</h2>
      <button @click="addEmptyMission">Add Empty Mission</button>
      <button @click="addRandomMission">Add Random Mission</button>
      <table>
        <thead>
          <tr>
            <th class="narrow-column">Level</th>
            <th class="narrow-column">Difficulty</th>
            <th>Description</th>
            <th>Place</th>
            <th>Location</th>
            <th>Goal</th>
            <th>Challenge</th>
            <th>Reward</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody ref="missionsTable">
          <tr v-for="(mission) in missionsLog" :key="mission.id">
            <td class="narrow-column"><input v-model="mission.level" type="number" min="0" max="99" /></td>
            <td class="narrow-column"><input v-model="mission.difficulty" type="number" min="0" max="99" /></td>
            <td><textarea v-model="mission.description"></textarea></td>
            <td><input v-model="mission.place" type="text" /></td>
            <td><input v-model="mission.location" type="text" /></td>
            <td><input v-model="mission.goal" type="text" /></td>
            <td><input v-model="mission.challenge" type="text" /></td>
            <td><input v-model="mission.reward" type="text" /></td>
            <td><input v-model="mission.status" type="text" /></td>
            <td><button @click="deleteMission(mission)">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>

  <script>
  import Sortable from 'sortablejs';
  import { randomTables, genericTables, getRandomElement } from '@/randomTables.js';
  import { globalState } from '@/globalState';
  export default {
    name: 'MissionsLog',
    data() {
        return {
          gameRandomTables: randomTables[globalState.currentSession?.game],
          missionsLog: globalState.currentSession?.missionsLog || []
        };
    },
    methods: {
      addEmptyMission() {
        globalState.addMission({
          id: Date.now(),
          level: '',
          difficulty: '',
          description: '',
          place: '',
          location: '',
          goal: '',
          challenge: '',
          reward: '',
          status: '',
        });
      },
      addRandomMission() {
        globalState.addMission({
          id: Date.now(),
          level: getRandomElement(genericTables.level),
          difficulty: getRandomElement(genericTables.difficulty),
          description: '',
          place: getRandomElement(this.gameRandomTables.place),
          location: getRandomElement(this.gameRandomTables.location),
          goal: getRandomElement(this.gameRandomTables.goal),
          challenge: getRandomElement(this.gameRandomTables.challenge),
          reward: getRandomElement(this.gameRandomTables.reward),
          status: 'Open',
        });
      },
      removeMission(mission) {
        globalState.deleteMission(mission);
      },
    },
    mounted() {
      Sortable.create(this.$refs.missionsTable, {
        animation: 150,
        onEnd: (evt) => {
          globalState.moveMission({
            oldIndex: evt.oldIndex,
            newIndex: evt.newIndex,
          });
        },
      });
    },
  };
  </script>

<style scoped>
  .narrow-column {
    width: 80px;
  }
</style>
