// src/models/Session.js
export default class Session {
    constructor(name = '', game = '', characterSheet = {}, missionLog = [], gameLog = []) {
      this.name = name;
      this.game = game;
      this.characterSheet = characterSheet;
      this.missionLog = missionLog;
      this.gameLog = gameLog;
    }

    get lastMissionName() {
        return this?.missionLog[this.missionLog.length - 1]?.name || '';
    }

    get characterName() {
        return this.characterSheet.name;
    }

    // Add any methods related to session logic here
  }
