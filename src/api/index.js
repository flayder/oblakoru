export default {
    async get(url, query = {}, params = {}) {
        var urlto = `${process.env.VUE_APP_BACKEND_URL}${url}`
        if(query) {
            urlto += `?${new URLSearchParams(query).toString()}`
        }
        var response = await fetch(urlto, params)

        if(response.ok) {
            response = await response.json()
            if(response?.result)
                return response.result
        }

        return false
    },
    async post(url, data, params = {}) {
        const pars = {
            ...params,
            method: 'POST',
            body: data
        }

        var response = await fetch(`${process.env.VUE_APP_BACKEND_URL}${url}`, pars)

        if(response.ok) {
            response = await response.json()
            if(response?.result)
                return response.result
        }

        return false
    }
}