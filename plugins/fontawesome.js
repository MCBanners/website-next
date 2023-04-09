import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHand, faPaintBrush, faFont, faPlus, faCheck } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false

library.add(faHand, faPaintBrush, faFont, faPlus, faCheck)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})