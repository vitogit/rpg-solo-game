import { createRouter, createWebHistory } from 'vue-router';
import CharacterSheet from '../components/CharacterSheet.vue';
import MissionLog from '../components/MissionLog.vue';
import GameLog from '../components/GameLog.vue';
import MainComponent from '../components/MainComponent.vue';
import HomePage from '../components/HomePage.vue'; // Assuming you have a Home component

const routes = [
  {
    path: '/',
    component: MainComponent,
    children: [
      { path: '', component: HomePage },
      { path: 'character-sheet', component: CharacterSheet },
      { path: 'mission-log', component: MissionLog },
      { path: 'game-log', component: GameLog },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
