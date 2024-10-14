import api from './index'

export default {
    async getMainReviews() {
        return await api.get(`reviews/main`)
    },
}