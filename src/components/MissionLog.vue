<template>
    <div>
      <h2>Mission Log</h2>
      <button @click="addEmptyMission">Add Empty Mission</button>
      <button @click="addRandomMission">Add Random Mission</button>
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Difficulty</th>
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
          <tr v-for="(mission, index) in missions" :key="index">
            <td><input v-model="mission.level" type="number" min="0" max="99" /></td>
            <td><input v-model="mission.difficulty" type="number" min="0" max="99" /></td>
            <td><textarea v-model="mission.description"></textarea></td>
            <td><input v-model="mission.place" type="text" /></td>
            <td><input v-model="mission.location" type="text" /></td>
            <td><input v-model="mission.goal" type="text" /></td>
            <td><input v-model="mission.challenge" type="text" /></td>
            <td><input v-model="mission.reward" type="text" /></td>
            <td><input v-model="mission.status" type="text" /></td>
            <td><button @click="removeMission(index)">Remove</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>

  <script>
  import Sortable from 'sortablejs';

  export default {
    name: 'MissionLog',
    props: {
        missionTables: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
        missions: [],
        };
    },
    methods: {
      addEmptyMission() {
        this.missions.push({
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
        const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
        this.missions.push({
          level: getRandomElement(this.randomTables.level),
          difficulty: getRandomElement(this.randomTables.difficulty),
          description: getRandomElement(this.randomTables.description),
          place: getRandomElement(this.randomTables.place),
          location: getRandomElement(this.randomTables.location),
          goal: getRandomElement(this.randomTables.goal),
          challenge: getRandomElement(this.randomTables.challenge),
          reward: getRandomElement(this.randomTables.reward),
          status: getRandomElement(this.randomTables.status),
        });
      },
      removeMission(index) {
        this.missions.splice(index, 1);
      },
    },
    mounted() {
      Sortable.create(this.$refs.missionsTable, {
        animation: 150,
        onEnd: (evt) => {
          const movedItem = this.missions.splice(evt.oldIndex, 1)[0];
          this.missions.splice(evt.newIndex, 0, movedItem);
        },
      });
    },
  };
  </script>

  <style scoped>
  /* Add styles here */
  </style>
