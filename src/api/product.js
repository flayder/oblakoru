import api from './index'

export default {
    async getMainProducts(params = {}) {
        return await api.get(`products/main`, params)
    },
}