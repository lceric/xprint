import Vue from 'vue'
import Tag from '../src/Tag.vue'
import '@/style/tag.css'

Vue.config.productionTip = false
// const test = require('../dist/vue-print.common.js')
// import test from '../dist/vue-print.common.js'
// var test = require('../dist/vue-print.common.js')

// 不要忘了调用此方法
// console.log(test)
// Vue.use(Test)
new Vue({
  render: h => h(Tag),
}).$mount('#app')
