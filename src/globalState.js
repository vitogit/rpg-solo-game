import { reactive } from 'vue';

export const globalState = reactive({
  sessions: [],
  currentSession: {
    name: '',
    game: '',
    characterSheet: {},
    gameLog: [],
    missionsLog: [],
  },

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
  },
  addMission(mission) {
    this.currentSession.missionsLog.push(mission);
  },
  deleteMission(mission) {
    const index = this.currentSession.missionsLog.indexOf(mission);
    if (index > -1) {
      this.currentSession.missionsLog.splice(index, 1);
    }
  },
  moveMission(fromIndex, toIndex) {
    const movedItem = this.currentSession.missionsLog.splice(fromIndex, 1)[0];
    this.currentSession.missionsLog.splice(toIndex, 0, movedItem);
  }
});
