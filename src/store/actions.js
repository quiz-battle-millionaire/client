import data from "./data"
import router from "@/router/index"

export function questions ({ commit }) {
  commit('SET_QUESTIONS',data)
  }

export function SOCKET_player ({ commit }, payload) {
  commit('SET_PLAYERS', payload)
  console.log(payload)
  } 

  export function SOCKET_winner ({ commit }, payload) {
    commit('SET_WINNER', payload)
    console.log(payload)
    this._vm.$swal(
      `Game sudah selesai Dan pemenangnya adalah ${payload.name} dengan Score ${payload.score}`
    ).then(()=>{
      localStorage.removeItem('name')
      router.push('/')
    })
    }