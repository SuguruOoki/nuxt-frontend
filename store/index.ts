import { LocalContext } from 'vuex'
import { User } from '~/types/user'

interface State {
  isLoggedIn: boolean
}

// export const strict = false

type Context = LocalContext['']

export const state = (): State => ({
  isLoggedIn: false,
})

export const getters = {
  isLoggedIn(state: State) {
    return state.isLoggedIn
  },
}

export const mutations = {
  login(state: State) {
    state.isLoggedIn = true
  },
  logout(state: State) {
    state.isLoggedIn = false
  },
}

export const actions = {
  login({ commit }: Context) {
    commit('login')
  },
  logout({ commit }: Context) {
    commit('logout')
  }
}
