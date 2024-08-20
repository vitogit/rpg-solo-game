// globalState.js
import { reactive } from 'vue';

export const globalState = reactive({
  sessions: [],
  currentSession: {},
  characterSheet: {},
  gameLog: [],
  missionsLog: [],
  setSessions(sessions) {
    this.sessions = sessions;
  },
  addSession(session) {
    this.sessions.push(session);
  },
  loadSession(session) {
    this.currentSession = session;
  },
  deleteSession(session) {
    const index = this.sessions.indexOf(session);
    if (index > -1) {
      this.sessions.splice(index, 1);
    }
  },
  moveSession(fromIndex, toIndex) {
    const movedItem = this.sessions.splice(fromIndex, 1)[0];
    this.sessions.splice(toIndex, 0, movedItem);
  },
  loadGlobalState(state) {
    this.currentSession = state.currentSession;
    this.sessions = state.sessions;
  }
});
