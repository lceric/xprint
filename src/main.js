import Page from './components/Page.vue'
const XPrint = {}
import './style/index.css'
XPrint.install = function (Vue, options = {}) {
  options.model = options.model || 'normal'
  if (options.model === 'normal') {
    document.body.classList.add('xprint-wrapper')
  }
  Vue.prototype.$xprint = function () {
    if (options.beforePrint && options.beforePrint instanceof Function) {
      options.beforePrint.bind(this) && options.beforePrint()
    }
    window.print()
    if (options.afterPrint && options.afterPrint instanceof Function) {
      options.afterPrint.bind(this) && options.afterPrint()
    }
  }
  Vue.component('xpage', Page)
}

export default XPrint