import Vue from 'vue'
import router from '@/router'

export default component => {
  return new Vue({
    router,
    ...component
  }).$mount()
}
