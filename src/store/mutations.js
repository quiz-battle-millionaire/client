export const SET_QUESTIONS = (state, question) => {
    state.question = question
  }
  
export const SET_PLAYERS = (state, user) => {
    state.player.push(user)
  } 