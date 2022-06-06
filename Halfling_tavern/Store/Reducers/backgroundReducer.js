import { createSlice } from '@reduxjs/toolkit'

function sizeUp(state, action) {
    while (state.background.length < action.payload.id + 1) {
      state.background.push({ race: "", clas: "", skills: [], savings: [""], proficiencies: [""], abilities: [], languages: [], abilityScore: {Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0}, speed: 0, })
    }
}

const bkackgroundSlice = createSlice({
  name: 'background',
  initialState: {
    background: [{
    race: "",
    clas: "",
    skills: [],
    savings: [],
    proficiencies: [],
    abilities: [],
    languages: [],
    abilityScore: {Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0},
    speed: 0,
    equipments: []
  }],
  raceId: 0,
  abilityScore: {Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0},
  traits: {Hair: "", Skin: "", Eyes: "", Height: "", Weight: "", Age: "", Gender: ""},
  lifestyle: "",
  alignment: ""
},
  reducers: {
    backgroundAddSkill: (state, action) => {
      sizeUp(state, action)
      state.background[action.payload.id].skills = [action.payload.value, ...state.background[action.payload.id].skills]
    },
    backgroundAddLanguage: (state, action) => {
      sizeUp(state, action)
      state.background[action.payload.id].languages = [action.payload.value, ...state.background[action.payload.id].languages]
    },
    backgroundAddLanguages: (state, action) => {
      sizeUp(state, action)
      for (let index = 0; index < action.payload.value.length; index++) {
        state.background[action.payload.id].languages.push(action.payload.value[index])
      }
    },
    backgroundAddAbilityScore: (state, action) => {
      sizeUp(state, action)
      state.background[action.payload.id].abilityScore[action.payload.value] += 1
    },
    backgroundAddProficiencies: (state, action) => {
      sizeUp(state, action)
      for (let index = 0; index < action.payload.value.length; index++) {
        state.background[action.payload.id].proficiencies.push(action.payload.value[index])
      }
    },
    backgroundAddAbilities: (state, action) => {
      sizeUp(state, action)
      for (let index = 0; index < action.payload.value.length; index++) {
        state.background[action.payload.id].abilities.push(action.payload.value[index])
      }
    },
    backgroundAddEquipments: (state, action) => {
      sizeUp(state, action)
      for (let index = 0; index < action.payload.value.length; index++) {
        state.background[action.payload.id].equipments.push(action.payload.value[index])
      }
    },
    backgroundRemoveSkill: (state, action) => {
      sizeUp(state, action)
      for (let index = 0; index < state.background[action.payload.id].skills.length; index++) {
        if (action.payload.value == state.background[action.payload.id].skills[index]) {
          state.background[action.payload.id].skills.splice(index, 1)
          return
        }
      }
    },
    backgroundRemoveLanguage: (state, action) => {
      sizeUp(state, action)
      for (let index = 0; index < state.background[action.payload.id].languages.length; index++) {
        if (action.payload.value == state.background[action.payload.id].languages[index]) {
          state.background[action.payload.id].languages.splice(index, 1)
          return
        }
      }
    },
    backgroundRemoveAbilityScore: (state, action) => {
      sizeUp(state, action)
        state.background[action.payload.id].abilityScore[action.payload.value] -= 1
    },
    backgroundAddbackground: (state, action) => {
      sizeUp(state, action)
      state.background[action.payload.id].clas = action.payload.value.clas
      state.background[action.payload.id].proficiencies = action.payload.value.proficiencies
      state.background[action.payload.id].savings = action.payload.value.savings
      state.background[action.payload.id].abilities = [action.payload.value.abilities, ...state.background[action.payload.id].abilities]
    },
    backgroundReset: (state, action) => {
      sizeUp(state, action)
      Object.assign(state.background[action.payload.id], { race: "", clas: "", skills: [], savings: [""], proficiencies: [""], abilities: [], languages: [], abilityScore: {Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0}, speed: 0})
      state.background[action.payload.id] = { race: "", clas: "", skills: [], savings: [""], proficiencies: [""], abilities: [], languages: [], abilityScore: {Strength: 0, Dexterity: 0, Constitution: 0, Intelligence: 0, Wisdom: 0, Charisma: 0}, speed: 0}
    },
    setRaceId: (state, action) => {
      state.raceId = action.payload
    },
    backgroundSetLifestyle: (state, action) => {
      state.lifestyle = action.payload
    },
    backgroundSetAlignment: (state, action) => {
      state.alignment = action.payload
    },
    backgroundSetTraits: (state, action) => {
      state.traits.Hair = action.payload.Hair
      state.traits.Skin = action.payload.Skin
      state.traits.Eyes = action.payload.Eyes
      state.traits.Height = action.payload.Height
      state.traits.Weight = action.payload.Weight
      state.traits.Age = action.payload.Age
      state.traits.Gender = action.payload.Gender
    },
    backgroundSetStats: (state, action) => {
      state.abilityScore.Strength = action.payload.Strength
      state.abilityScore.Dexterity = action.payload.Dexterity
      state.abilityScore.Constitution = action.payload.Constitution
      state.abilityScore.Wisdom = action.payload.Wisdom
      state.abilityScore.Intelligence = action.payload.Intelligence
      state.abilityScore.Charisma = action.payload.Charisma
    }
  }
})
  
  export const {backgroundAddSkill, backgroundRemoveSkill, backgroundAddbackground, backgroundAddLanguage, backgroundRemoveLanguage, backgroundAddAbilityScore, backgroundRemoveAbilityScore, backgroundAddLanguages, backgroundAddProficiencies, reset, backgroundAddAbilities,
    setRaceId, backgroundSetStats, backgroundAddEquipments, backgroundSetTraits, backgroundSetLifestyle, backgroundSetAlignment } = bkackgroundSlice.actions
  export default bkackgroundSlice.reducer;