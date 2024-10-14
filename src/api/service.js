import api from './index'

export default {
    async getServices() {
        return await api.get(`services`)
    },
}