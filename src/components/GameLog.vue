<template>
  <div class="game-log-container">
    <div class="main-content">
      <div class="chat-window">
        <div v-for="(message, index) in messages" :key="index" :class="message.type">
          {{ message.text }}
        </div>
      </div>
      <div class="input-container">
        <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type your message here..." />
        <button @click="sendMessage">Send</button>
      </div>
      <div class="button-container">
        <div>
          <select v-model="selectedDiceBonus">
            <option v-for="n in 5" :key="n" :value="n-1">{{ n-1 }}</option>
          </select>
          <button @click="throwDice(selectedDiceBonus)">Throw Dice</button>
        </div>
        <div>
          <select v-model="selectedOracleBonus">
            <option v-for="n in [-2, -1, 0, 1, 2]" :key="n" :value="n">{{ n }}</option>
          </select>
          <button @click="askOracle(selectedOracleBonus)">Ask Oracle</button>
        </div>
        <div>
          <select v-model="selectedTable">
            <option v-for="table in gameTableKeys" :key="table" :value="table">{{ table }}</option>
          </select>
          <button @click="getRandomElement(selectedTable)">Get Random Element</button>
        </div>
      </div>
    </div>
    <div class="sidebar">
      <div v-for="section in sidebarSections" :key="section.title" class="sidebar-section">
        <h3 @click="toggleSection(section)">{{ section.title }}</h3>
        <div v-if="section.expanded" class="sidebar-content">
          <textarea v-model="section.content"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { randomTables, genericTables, getRandomElement } from '@/randomTables.js';
import { globalState } from '@/globalState';
export default {
  name: 'GameLog',
  data() {
    return {
      globalState: globalState,
      messages: globalState.currentSession.gameLog.messages,
      newMessage: '',
      sidebarSections: [
        { title: 'Character Sheet', expanded: false, content: '' },
        { title: 'Aspects', expanded: false, content: '' },
        { title: 'Characters', expanded: false, content: '' },
        { title: 'Quests', expanded: false, content: '' }
      ],
      selectedOracleBonus: 0,
      selectedDiceBonus: 1,
    };
  },
  computed: {
    gameTableKeys() {
      return Object.keys(randomTables[globalState.currentSession.game]);
    }
  },
  created() {
    this.selectedTable = this.gameTableKeys[0];
  },
  methods: {
    sendMessage() {
      console.log('this.newMessage', this.newMessage)
      if (this.newMessage.trim() !== '') {
        console.log('this.newMessage', this.newMessage)

        globalState.addMessage({ text: this.newMessage, type: 'user-message' });
        this.newMessage = '';
      }
    },
    throwDice(bonus = 0) {
      let result = [];
      for (let i = 0; i < bonus + 1; i++) {
        result.push(getRandomElement(genericTables.dice));
      }
      globalState.addMessage({ text: result.join(', '), type: 'dice-message' });
    },
    askOracle(bonus = 0) {
      const numberOfDice = 1 + Math.abs(bonus);
      const results = Array.from({ length: numberOfDice }, () => getRandomElement(genericTables.dice));
      const oracleResponse = bonus >= 0 ? Math.max(...results) : Math.min(...results);
      // Map the results to if 6- yes and, if 5 yes, if 4 yes but, if 3 no but, if 2 no, if 1 no and
      // use a map instead of switch
      const mapString = {
        6: 'Yes, and...',
        5: 'Yes',
        4: 'Yes, but...',
        3: 'No, but...',
        2: 'No',
        1: 'No, and...',
      }
      globalState.addMessage({ text: mapString[oracleResponse], type: 'oracle-message' });
    },
    getRandomElement(tableName) {
      const randomElement = getRandomElement(randomTables[globalState.currentSession.game][tableName]);
      globalState.addMessage({ text: randomElement, type: 'random-element-message' });
    },
    toggleSection(section) {
      section.expanded = !section.expanded;
    }
  }
};
</script>

<style scoped>
.game-log-container {
  display: flex;
  height: 100%;
}

.main-content {
  flex: 3;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #111;
  border-right: 1px solid #ffc107;
  height: 80vh;
}

.chat-window {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: 1px solid #ffc107;
  padding: 10px;
  overflow-y: auto;
  background-color: #000;
  font-size: 0.9em;
  color: #b3b3b3;
  height: 50vh;
}

.input-container {
  display: flex;
  margin-bottom: 10px;
}

.input-container input {
  flex: 1;
  padding: 10px;
  margin-right: 5px;
  border: 1px solid #ffc107;
  border-radius: 4px;
  background-color: #111;
  color: #ffc107;
}

.button-container {
  display: flex;
  justify-content: space-between;
}

.button-container button {
  padding: 10px 20px;
  border: 1px solid #ffc107;
  border-radius: 4px;
  background-color: #111;
  color: #ffc107;
  cursor: pointer;
}

.button-container button:hover {
  background-color: #ffc107;
  color: #111;
}

.sidebar {
  flex: 1;
  border-left: 1px solid #ffc107;
  padding: 20px;
  overflow-y: auto;
  background-color: #111;
  display: flex;
  flex-direction: column;
}

.sidebar-section {
  margin-bottom: 10px;
}

.sidebar-section h3 {
  cursor: pointer;
  margin: 0;
  color: #ffc107;
}

.sidebar-content {
  margin-top: 5px;
  background-color: #000;
}

.sidebar-content textarea {
  width: 90%;
  height: 100px;
  background-color: #111;
  color: #ffc107;
  border: 1px solid #ffc107;
  border-radius: 4px;
  padding: 10px;
  resize: none;
}

.user-message {
  color: #ffc107;
  opacity: 0.7; /* Less opacity */
}

.dice-message,
.oracle-message,
.random-element-message {
  color: #ffc107;
  font-style: italic;
  opacity: 0.7; /* Less opacity */
  padding-left: 20px; /* Indentation */
  border-left: 3px solid #ffc107; /* Line on the left */
  margin: 5px 0 5px 10px; /* Margin */
}
</style>
