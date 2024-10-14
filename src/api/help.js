import api from './index'

export default {
    async getHelps() {
        return await api.get(`helps`)
    },
}