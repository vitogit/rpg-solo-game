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
    data() {
      return {
        missions: [],
        randomTables: {
          level: Array.from({ length: 6 }, (_, i) => i + 1),
          difficulty: Array.from({ length: 6 }, (_, i) => i + 1),
          description: ['Desc1', 'Desc2', 'Desc3', 'Desc4', 'Desc5', 'Desc6', 'Desc7', 'Desc8', 'Desc9', 'Desc10', 'Desc11', 'Desc12'],
          place: ['Place1', 'Place2', 'Place3', 'Place4', 'Place5', 'Place6', 'Place7', 'Place8', 'Place9', 'Place10', 'Place11', 'Place12'],
          location: ['Location1', 'Location2', 'Location3', 'Location4', 'Location5', 'Location6', 'Location7', 'Location8', 'Location9', 'Location10', 'Location11', 'Location12'],
          goal: ['Goal1', 'Goal2', 'Goal3', 'Goal4', 'Goal5', 'Goal6', 'Goal7', 'Goal8', 'Goal9', 'Goal10', 'Goal11', 'Goal12'],
          challenge: ['Challenge1', 'Challenge2', 'Challenge3', 'Challenge4', 'Challenge5', 'Challenge6', 'Challenge7', 'Challenge8', 'Challenge9', 'Challenge10', 'Challenge11', 'Challenge12'],
          reward: ['Reward1', 'Reward2', 'Reward3', 'Reward4', 'Reward5', 'Reward6', 'Reward7', 'Reward8', 'Reward9', 'Reward10', 'Reward11', 'Reward12'],
          status: ['Status1', 'Status2', 'Status3', 'Status4', 'Status5', 'Status6', 'Status7', 'Status8', 'Status9', 'Status10', 'Status11', 'Status12'],
        },
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
