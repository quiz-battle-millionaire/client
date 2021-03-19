import data from "./data"

export function questions ({ commit }) {
  commit('SET_QUESTIONS',data)
  }

export function SOCKET_player ({ commit }, payload) {
  commit('SET_PLAYERS', payload)
  console.log(payload)
  } 