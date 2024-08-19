// globalState.js
import { reactive } from 'vue';

export const globalState = reactive({
  currentSession: {
    name: '',
    game: '',
    characterSheet: {},
    missionLog: [],
    gameLog: [],
  },
  sessions: [],
});
