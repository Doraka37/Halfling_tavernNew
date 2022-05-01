import { createSlice } from '@reduxjs/toolkit'

const characterSlice = createSlice({
  name: 'character',
  initialState: {
    race: "",
    clas: "",
    skills: [],
    savings: [""],
    proficiencies: [""],
    abilities: [],
    languages: [],
    abilityScore: {Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0},
    speed: 0,

  },
  reducers: {
    addSkill: (state, action) => {
      state.skills = [action.payload, ...state.skills]
    },
    addLanguage: (state, action) => {
      state.languages = [action.payload, ...state.languages]
    },
    addLanguages: (state, action) => {
      for (let index = 0; index < action.payload.length; index++) {
        state.languages.push(action.payload[index])
      }
    },
    addAbilityScore: (state, action) => {
      state.abilityScore[action.payload] += 1
    },
    addSpeed: (state, action) => {
      state.speed = action.payload
    },
    removeSkill: (state, action) => {
      for (let index = 0; index < state.skills.length; index++) {
        if (action.payload == state.skills[index]) {
          state.skills.splice(index, 1)
          return
        }
      }
    },
    removeLanguage: (state, action) => {
      for (let index = 0; index < state.languages.length; index++) {
        if (action.payload == state.languages[index]) {
          state.languages.splice(index, 1)
          return
        }
      }
    },
    removeAbilityScore: (state, action) => {
        state.abilityScore[action.payload] -= 1
    },
    addClass: (state, action) => {
      state.clas = action.payload.clas
      state.proficiencies = action.payload.proficiencies
      state.savings = action.payload.savings
      state.abilities = [action.payload.abilities, ...state.abilities]
    }
  }
})
  
  export const {addSkill, removeSkill, addClass, addLanguage, removeLanguage, addAbilityScore, removeAbilityScore, addLanguages, addSpeed } = characterSlice.actions
  export default characterSlice.reducer;