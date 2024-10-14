import api from "@/api/block"

export default {
    namespaced: true,
    state() {
        return {
            top_menu1: [],
            top_menu2: []
        }
    },
    actions: { 
        async getBackendTopMenu1({commit}) {
            const data = await api.getMenu(2)

            commit('setTopMenu1', data)
        },
        async getBackendTopMenu2({commit}) {
            const data = await api.getMenu(3)

            commit('setTopMenu2', data)
        }
    },
    getters: {
        getTopMenu1() {
            return this.top_menu1
        },
        getTopMenu2() {
            return this.top_menu2
        }
    },
    mutations: {
        setTopMenu1(state, data) {
            state.top_menu1 = data
        },
        setTopMenu2(state, data) {
            state.top_menu2 = data
        }
    }
  }