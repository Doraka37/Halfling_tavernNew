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
    languages: []
  },
  reducers: {
    addSkill: (state, action) => {
      state.skills = [action.payload, ...state.skills]
    },
    addLanguage: (state, action) => {
      state.languages = [action.payload, ...state.languages]
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
    addClass: (state, action) => {
      state.clas = action.payload.clas
      state.proficiencies = action.payload.proficiencies
      state.savings = action.payload.savings
      state.abilities = [action.payload.abilities, ...state.abilities]
    }
  }
})
  
  export const {addSkill, removeSkill, addClass, addLanguage, removeLanguage } = characterSlice.actions
  export default characterSlice.reducer;