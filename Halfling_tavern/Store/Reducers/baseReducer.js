import { createSlice } from '@reduxjs/toolkit'

function sizeUp(state, action) {
    while (state.character.length < action.payload.id + 1) {
      state.character.push({ race: "", clas: "", skills: [], savings: [""], proficiencies: [""], abilities: [], languages: [], abilityScore: {Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0}, speed: 0, })
    }
}

const characterSlice = createSlice({
  name: 'character',
  initialState: {
    character: [{
    race: "",
    clas: "",
    skills: [],
    savings: [""],
    proficiencies: [""],
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
    addClass: (state, action) => {
      sizeUp(state, action)
      state.character[action.payload.id].clas = action.payload.value.clas
      state.character[action.payload.id].proficiencies = action.payload.value.proficiencies
      state.character[action.payload.id].savings = action.payload.value.savings
      state.character[action.payload.id].abilities = [action.payload.value.abilities, ...state.character[action.payload.id].abilities]
    },
    reset: (state) => {
      sizeUp(state, action)
      console.log("RESET FORM: ", state);
      Object.assign(state, { race: "", clas: "", skills: [], savings: [""], proficiencies: [""], abilities: [], languages: [], abilityScore: {Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0}, speed: 0})
      //state = { race: "", clas: "", skills: [], savings: [""], proficiencies: [""], abilities: [], languages: [], abilityScore: {Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0}, speed: 0}
    },
  }
})
  
  export const {addSkill, removeSkill, addClass, addLanguage, removeLanguage, addAbilityScore, removeAbilityScore, addLanguages, addSpeed, reset } = characterSlice.actions
  export default characterSlice.reducer;