import api from './index'

export default {
    async sendForm(data) {
        return await api.post('form', data)
    },
}