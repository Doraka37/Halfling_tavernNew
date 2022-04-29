import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    race: "",
    clas: "",
    skills: "",
    savings: [""],
    proficiencies: [""],
    test: 25
  },
  reducers: {
    addSkill: (state, action) => {
      state.skills = action.payload
    },
    todoToggled(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      todo.completed = !todo.completed
    }
  }
})

const initialState = {
    race: "",
    clas: "",
    skills: "",
    savings: [""],
    proficiencies: [""],
    test: 25
  };
  
  function BaseReducer(state = initialState, action) {
    let nextState = {};
    switch (action.type) {
      case 'SET_COURSE_SETTINGS':
        nextState = {
          ...state,
          ...action.value
      };
      return nextState;
      case 'SET_RACE':
        nextState = {
          ...state,
          race: action.value
      };
      case 'SET_CLASS':
        nextState = {
          ...state,
          clas: action.value.clas
      };
      case 'SET_SKILLS':
        console.log("sETTING skill: ", action.value);
        nextState = {
          ...state,
          skills: action.value
      };
      default:
          return state;
  }
  }
  
  export const {addSkill } = todosSlice.actions
  export default todosSlice.reducer;