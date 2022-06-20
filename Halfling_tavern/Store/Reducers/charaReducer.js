import { createSlice } from '@reduxjs/toolkit'

function sizeUp(state, action) {
    while (state.class.length < action.payload.id + 1) {
      state.class.push({ race: "", clas: "", skills: [], savings: [""], proficiencies: [""], abilities: [], languages: [], abilityScore: {Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0}, speed: 0, equipments: [], spells: [] })
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
    equipments: [],
    spells: []
  }],
  raceId: 0,
  abilityScore: {Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0},
  classId: 0
},
  reducers: {
    classAddSkill: (state, action) => {
      sizeUp(state, action)
      state.class[action.payload.id].skills = [action.payload.value, ...state.class[action.payload.id].skills]
    },
    classAddLanguage: (state, action) => {
      sizeUp(state, action)
      state.class[action.payload.id].languages = [action.payload.value, ...state.class[action.payload.id].languages]
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
    },
    classAddEquipment: (state, action) => {
      sizeUp(state, action)
      state.class[action.payload.id].equipments.push(action.payload.value)
    },
    classAddEquipments: (state, action) => {
      sizeUp(state, action)
      for (let index = 0; index < action.payload.value.length; index++) {
        state.class[action.payload.id].equipments.push(action.payload.value[index])
      }
    },
    classAddSpell: (state, action) => {
      sizeUp(state, action)
      state.class[action.payload.id].spells = [action.payload.value, ...state.class[action.payload.id].spells]
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
    classRemoveEquipment: (state, action) => {
      sizeUp(state, action)
      for (let index = 0; index < state.class[action.payload.id].equipments.length; index++) {
        if (action.payload.value == state.class[action.payload.id].equipments[index]) {
          state.class[action.payload.id].equipments.splice(index, 1)
          return
        }
      }
    },
    classRemoveSpell: (state, action) => {
      sizeUp(state, action)
      for (let index = 0; index < state.class[action.payload.id].spells.length; index++) {
        if (action.payload.value == state.class[action.payload.id].spells[index].name) {
          state.class[action.payload.id].spells.splice(index, 1)
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
      sizeUp(state, action)
      Object.assign(state.class[action.payload.id], { race: "", clas: "", skills: [], savings: [""], proficiencies: [""], abilities: [], languages: [], abilityScore: {Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0}, speed: 0})
      state.class[action.payload.id] = { race: "", clas: "", skills: [], savings: [""], proficiencies: [""], abilities: [], languages: [], abilityScore: {Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0}, speed: 0}
    },
    setRaceId: (state, action) => {
      state.raceId = action.payload
    },
    setClassId: (state, action) => {
      state.classId = action.payload
    },
    classSetStats: (state, action) => {
      state.abilityScore.Strength = action.payload.Strength
      state.abilityScore.Dexterity = action.payload.Dexterity
      state.abilityScore.Constitution = action.payload.Constitution
      state.abilityScore.Wisdom = action.payload.Wisdom
      state.abilityScore.Intelligence = action.payload.Intelligence
      state.abilityScore.Charisma = action.payload.Charisma
    }
  }
})
  
  export const {classAddSkill, classRemoveSkill, classAddClass, classAddLanguage, classRemoveLanguage, classAddAbilityScore, classRemoveAbilityScore, classAddLanguages, classAddProficiencies, reset,
     classAddAbilities, setRaceId, classSetStats, setClassId, classAddEquipment, classRemoveEquipment, classAddEquipments,
      classRemoveSpell, classAddSpell } = charaSlice.actions
  export default charaSlice.reducer;