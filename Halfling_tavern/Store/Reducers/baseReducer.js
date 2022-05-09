import { createSlice } from '@reduxjs/toolkit'

function sizeUp(state, action) {
    while (state.character.length < action.payload.id + 1) {
      state.character.push({ race: "", clas: "", skills: [], savings: [""], proficiencies: [""], abilities: [], languages: [], abilityScore: {Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0}, speed: 0, })
    }
}

const raceSlice = createSlice({
  name: 'character',
  initialState: {
    character: [{
    race: "",
    clas: "",
    skills: [],
    savings: [""],
    proficiencies: [],
    abilities: [],
    languages: [],
    abilityScore: {Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0},
    speed: 0,
  }]},
  reducers: {
    addSkill: (state, action) => {
      sizeUp(state, action)
      state.character[action.payload.id].skills = [action.payload.value, ...state.character[action.payload.id].skills]
    },
    addLanguage: (state, action) => {
      sizeUp(state, action)
      state.character[action.payload.id].languages = [action.payload.value, ...state.character[action.payload.id].languages]
      console.log("state.character: ", state.character);
    },
    addLanguages: (state, action) => {
      sizeUp(state, action)
      for (let index = 0; index < action.payload.value.length; index++) {
        state.character[action.payload.id].languages.push(action.payload.value[index])
      }
    },
    addAbilityScore: (state, action) => {
      sizeUp(state, action)
      state.character[action.payload.id].abilityScore[action.payload.value] += 1
    },
    addSpeed: (state, action) => {
      sizeUp(state, action)
      state.character[action.payload.id].speed = action.payload.value
    },
    addProficiencies: (state, action) => {
      sizeUp(state, action)
      for (let index = 0; index < action.payload.value.length; index++) {
        state.character[action.payload.id].proficiencies.push(action.payload.value[index])
      }
      console.log("state.character: ", state.character[action.payload.id]);
    },
    addStats: (state, action) => {
      sizeUp(state, action)
      for (let index = 0; index < action.payload.value.length; index++) {
        state.character[action.payload.id].abilityScore[action.payload.value[index].stat] += action.payload.value[index].bonus
      }
      console.log("state.character: ", state.character[action.payload.id]);
    },
    removeSkill: (state, action) => {
      sizeUp(state, action)
      for (let index = 0; index < state.character[action.payload.id].skills.length; index++) {
        if (action.payload.value == state.character[action.payload.id].skills[index]) {
          state.character[action.payload.id].skills.splice(index, 1)
          return
        }
      }
    },
    removeLanguage: (state, action) => {
      sizeUp(state, action)
      for (let index = 0; index < state.character[action.payload.id].languages.length; index++) {
        if (action.payload.value == state.character[action.payload.id].languages[index]) {
          state.character[action.payload.id].languages.splice(index, 1)
          return
        }
      }
    },
    removeAbilityScore: (state, action) => {
      sizeUp(state, action)
        state.character[action.payload.id].abilityScore[action.payload.value] -= 1
    },
    reset: (state, action) => {
      console.log("action: ", action);
      sizeUp(state, action)
      console.log("state: ", state);
      Object.assign(state.character[action.payload.id], { race: "", clas: "", skills: [], savings: [""], proficiencies: [""], abilities: [], languages: [], abilityScore: {Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0}, speed: 0})
      state.character[action.payload.id] = { race: "", clas: "", skills: [], savings: [""], proficiencies: [""], abilities: [], languages: [], abilityScore: {Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0}, speed: 0}
    },
  }
})
  
  export const {addSkill, removeSkill, addClass, addLanguage, removeLanguage, addAbilityScore, removeAbilityScore, addLanguages, addSpeed, reset, addProficiencies, addStats } = raceSlice.actions
  export default raceSlice.reducer;