import { createStore } from 'vuex'
import blocks from './blocks/'

export const store = createStore({
    modules: {
        blocks
    }
})