// import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

export default {
    install(Vue) {
        // Vue.use(MdButton)
        // Vue.use(MdContent)
        // Vue.use(MdTabs)
        Vue.use(VueMaterial)

    }
}