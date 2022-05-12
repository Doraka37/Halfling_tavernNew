import { createSlice } from '@reduxjs/toolkit'

function sizeUp(state, action) {
    while (state.class.length < action.payload.id + 1) {
      state.class.push({ race: "", clas: "", skills: [], savings: [""], proficiencies: [""], abilities: [], languages: [], abilityScore: {Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0}, speed: 0, })
    }
}

const charaSlice = createSlice({
  name: 'class',
  initialState: {
    class: [{
    race: "",
    clas: "",
    skills: [],
    savings: [],
    proficiencies: [],
    abilities: [],
    languages: [],
    abilityScore: {Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0},
    speed: 0,
  }]},
  reducers: {
    classAddSkill: (state, action) => {
      sizeUp(state, action)
      state.class[action.payload.id].skills = [action.payload.value, ...state.class[action.payload.id].skills]
      console.log("class: ", state.class[action.payload.id]);
    },
    classAddLanguage: (state, action) => {
      sizeUp(state, action)
      state.class[action.payload.id].languages = [action.payload.value, ...state.class[action.payload.id].languages]
      console.log("state.class: ", state.class);
    },
    classAddLanguages: (state, action) => {
      sizeUp(state, action)
      for (let index = 0; index < action.payload.value.length; index++) {
        state.class[action.payload.id].languages.push(action.payload.value[index])
      }
    },
    classAddAbilityScore: (state, action) => {
      sizeUp(state, action)
      state.class[action.payload.id].abilityScore[action.payload.value] += 1
    },
    classAddProficiencies: (state, action) => {
      sizeUp(state, action)
      for (let index = 0; index < action.payload.value.length; index++) {
        state.class[action.payload.id].proficiencies.push(action.payload.value[index])
      }
    },
    classAddAbilities: (state, action) => {
      sizeUp(state, action)
      for (let index = 0; index < action.payload.value.length; index++) {
        state.class[action.payload.id].abilities.push(action.payload.value[index])
      }
      console.log("state.class: ", state.class[action.payload.id]);
    },
    classRemoveSkill: (state, action) => {
      sizeUp(state, action)
      for (let index = 0; index < state.class[action.payload.id].skills.length; index++) {
        if (action.payload.value == state.class[action.payload.id].skills[index]) {
          state.class[action.payload.id].skills.splice(index, 1)
          return
        }
      }
    },
    classRemoveLanguage: (state, action) => {
      sizeUp(state, action)
      for (let index = 0; index < state.class[action.payload.id].languages.length; index++) {
        if (action.payload.value == state.class[action.payload.id].languages[index]) {
          state.class[action.payload.id].languages.splice(index, 1)
          return
        }
      }
    },
    classRemoveAbilityScore: (state, action) => {
      sizeUp(state, action)
        state.class[action.payload.id].abilityScore[action.payload.value] -= 1
    },
    classAddClass: (state, action) => {
      sizeUp(state, action)
      state.class[action.payload.id].clas = action.payload.value.clas
      state.class[action.payload.id].proficiencies = action.payload.value.proficiencies
      state.class[action.payload.id].savings = action.payload.value.savings
      state.class[action.payload.id].abilities = [action.payload.value.abilities, ...state.class[action.payload.id].abilities]
    },
    classReset: (state, action) => {
      console.log("action: ", action);
      sizeUp(state, action)
      console.log("state: ", state);
      Object.assign(state.class[action.payload.id], { race: "", clas: "", skills: [], savings: [""], proficiencies: [""], abilities: [], languages: [], abilityScore: {Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0}, speed: 0})
      state.class[action.payload.id] = { race: "", clas: "", skills: [], savings: [""], proficiencies: [""], abilities: [], languages: [], abilityScore: {Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0}, speed: 0}
    },
  }
})
  
  export const {classAddSkill, classRemoveSkill, classAddClass, classAddLanguage, classRemoveLanguage, classAddAbilityScore, classRemoveAbilityScore, classAddLanguages, classAddProficiencies, reset, classAddAbilities } = charaSlice.actions
  export default charaSlice.reducer;