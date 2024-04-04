import type { App, Component } from 'vue'
import HcButton from './components/button/index.vue'

const HComponents: Component = {
  HcButton,
}

export default {
  install(app: App) {
    Object.keys(HComponents).forEach((key) => {
      app.component(key, HComponents[key])
    })
  },
}
