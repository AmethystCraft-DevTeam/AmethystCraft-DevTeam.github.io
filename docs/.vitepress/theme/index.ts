// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'

import PartnerCarousel from './components/PartnerCarousel.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('PartnerCarousel', PartnerCarousel)
  }
}