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
        <button @click="throwDice">Throw Dice</button>
        <button @click="askOracle">Ask Oracle</button>
        <button @click="getRandomElement">Get Random Element</button>
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
export default {
  name: 'GameLog',
  data() {
    return {
      messages: [],
      newMessage: '',
      sidebarSections: [
        { title: 'Character Sheet', expanded: false, content: 'Character details here...' },
        { title: 'Aspects', expanded: false, content: 'Aspects details here...' },
        { title: 'Characters', expanded: false, content: 'Characters details here...' },
        { title: 'Quests', expanded: false, content: 'Quests details here...' }
      ]
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.messages.push({ text: this.newMessage, type: 'user-message' });
        this.newMessage = '';
      }
    },
    throwDice() {
      const diceResult = `You rolled a ${Math.floor(Math.random() * 6) + 1}`;
      this.messages.push({ text: diceResult, type: 'dice-message' });
    },
    askOracle() {
      const oracleResponse = 'The oracle says: Yes';
      this.messages.push({ text: oracleResponse, type: 'oracle-message' });
    },
    getRandomElement() {
      const elements = ['Fire', 'Water', 'Earth', 'Air'];
      const randomElement = `Random element: ${elements[Math.floor(Math.random() * elements.length)]}`;
      this.messages.push({ text: randomElement, type: 'random-element-message' });
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
  background-color: #000;
  color: #ffc107;
  font-family: "Star Jedi", Arial, sans-serif;
}

.main-content {
  flex: 3;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #111;
  border-right: 1px solid #ffc107;
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
  padding: 10px;
  overflow-y: auto;
  background-color: #111;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
  padding: 10px;
  border: 1px solid #ffc107;
  margin-top: 5px;
  background-color: #000;
}

.sidebar-content textarea {
  width: 100%;
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
}

.dice-message {
  color: #ffc107;
  font-style: italic;
}

.oracle-message {
  color: #ffc107;
  font-style: italic;
}

.random-element-message {
  color: #ffc107;
  font-style: italic;
}
</style>
