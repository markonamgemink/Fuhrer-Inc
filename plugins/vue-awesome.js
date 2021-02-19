// import Vue from 'vue'
// import 'vue-awesome/icons/bars'
// import 'vue-awesome/icons/brands/facebook'
// import 'vue-awesome/icons/brands/instagram'
// import 'vue-awesome/icons/brands/tiktok'
// import 'vue-awesome/icons/brands/youtube'
// import Icon from 'vue-awesome/components/Icon.vue'
// require('vue-awesome/icons')

// Vue.component('Icon', Icon)
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faBars)

Vue.component('Icon', FontAwesomeIcon)
