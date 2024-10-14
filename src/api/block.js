import api from './index'

export default {
    async getBlock(id) {
        return await api.get(`block/${id}`)
    },
    async getMenu(id) {
        return await api.get(`menu/${id}`)
    }
}