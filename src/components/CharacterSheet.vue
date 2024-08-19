<template>
    <div class="character-sheet">
      <div class="form-group">
        <label for="characterName">Name:</label>
        <input v-model="characterSheet.name" id="characterName" />
      </div>
      <div class="form-group">
        <label for="concept">Concept:</label>
        <input v-model="characterSheet.concept" id="concept" />
      </div>
      <div class="form-group">
        <label for="problem">Problem:</label>
        <textarea v-model="characterSheet.problem" id="problem" rows="5"></textarea>
      </div>
      <div class="form-group">
        <label for="aspects">Aspects:</label>
        <textarea v-model="characterSheet.aspects" id="aspects" rows="5"></textarea>
      </div>
      <div class="form-group">
        <label for="stunt">Stunt:</label>
        <textarea v-model="characterSheet.stunt" id="stunt" rows="5"></textarea>
      </div>
      <div class="form-group">
        <label for="stress">Stress:</label>
        <textarea v-model="characterSheet.stress" id="stress" rows="5"></textarea>
      </div>
      <div class="form-group">
        <label for="fatePoints">Fate Points:</label>
        <input type="number" v-model.number="characterSheet.fatePoints" id="fatePoints" min="0" max="99" />
      </div>
      <div class="form-group">
        <label for="xp">XP:</label>
        <input type="number" v-model.number="characterSheet.xp" id="xp" min="0" max="999" />
      </div>
    </div>
  </template>

  <script setup>
    import { globalState } from '@/globalState';
    const { characterSheet } = globalState.currentSession;

  </script>

  <style scoped>
  .character-sheet {
    background-color: #111;
    color: #ffc107;
    padding: 20px;
    border: 1px solid #ffc107;
    border-radius: 5px;
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    box-sizing: border-box;
    height: 100%;
  }

  .character-sheet h3 {
    text-align: center;
    margin-bottom: 20px;
    grid-column: span 2;
  }

  .form-group {
    margin-bottom: 15px;
    padding: 20px;
  }

  .form-group label {
    display: block;
    margin-bottom: 5px;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ffc107;
    border-radius: 3px;
    background-color: #333;
    color: #ffc107;
  }

  .form-group input[type="number"] {
    width: 60px;
  }

  .form-group textarea {
    resize: vertical;
    min-height: 100px;
  }
  </style>
