import api from './index'

export default {
    async getMainPosts() {
        return await api.get(`posts/main`)
    },
}