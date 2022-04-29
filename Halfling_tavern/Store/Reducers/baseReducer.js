import { createSlice } from '@reduxjs/toolkit'

const characterSlice = createSlice({
  name: 'character',
  initialState: {
    race: "",
    clas: "",
    skills: [],
    savings: [""],
    proficiencies: [""],
    abilities: []
  },
  reducers: {
    addSkill: (state, action) => {
      state.skills = [action.payload, ...state.skills]
    },
    removeSkill: (state, action) => {
      for (let index = 0; index < state.skills.length; index++) {
        if (action.payload == state.skills[index]) {
          state.skills.splice(index, 1)
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
  
  export const {addSkill, removeSkill, addClass } = characterSlice.actions
  export default characterSlice.reducer;