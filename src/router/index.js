import { createRouter, createWebHistory } from 'vue-router';
import CharacterSheet from '../components/CharacterSheet.vue';
import MissionsLog from '../components/MissionsLog.vue';
import GameLog from '../components/GameLog.vue';
import MainComponent from '../components/MainComponent.vue';
import HomePage from '../components/HomePage.vue';

// const missionTables = {
//     level: Array.from({ length: 6 }, (_, i) => i + 1),
//     difficulty: Array.from({ length: 6 }, (_, i) => i + 1),
//     description: ['Desc1', 'Desc2', 'Desc3', 'Desc4', 'Desc5', 'Desc6', 'Desc7', 'Desc8', 'Desc9', 'Desc10', 'Desc11', 'Desc12'],
//     place: ['Place1', 'Place2', 'Place3', 'Place4', 'Place5', 'Place6', 'Place7', 'Place8', 'Place9', 'Place10', 'Place11', 'Place12'],
//     location: ['Location1', 'Location2', 'Location3', 'Location4', 'Location5', 'Location6', 'Location7', 'Location8', 'Location9', 'Location10', 'Location11', 'Location12'],
//     goal: ['Goal1', 'Goal2', 'Goal3', 'Goal4', 'Goal5', 'Goal6', 'Goal7', 'Goal8', 'Goal9', 'Goal10', 'Goal11', 'Goal12'],
//     challenge: ['Challenge1', 'Challenge2', 'Challenge3', 'Challenge4', 'Challenge5', 'Challenge6', 'Challenge7', 'Challenge8', 'Challenge9', 'Challenge10', 'Challenge11', 'Challenge12'],
//     reward: ['Reward1', 'Reward2', 'Reward3', 'Reward4', 'Reward5', 'Reward6', 'Reward7', 'Reward8', 'Reward9', 'Reward10', 'Reward11', 'Reward12'],
//     status: ['Status1', 'Status2', 'Status3', 'Status4', 'Status5', 'Status6', 'Status7', 'Status8', 'Status9', 'Status10', 'Status11', 'Status12'],
//   };

const routes = [
  {
    path: '/',
    component: MainComponent,
    children: [
      { path: '', component: HomePage },
      { path: 'character-sheet', component: CharacterSheet },
      {
        path: 'missions-log', component: MissionsLog },
      { path: 'game-log', component: GameLog },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
