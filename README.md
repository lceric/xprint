# xprint

## install
```
npm install --save xprint
```
```js
import XPrint from 'xprint'
import 'xprint/dist/vue-print.css'
Vue.use(XPrint)
```

## config
```js
import XPrint from 'xprint'
import 'xprint/dist/vue-print.css'
Vue.use(XPrint, {
  beforePrint() { // 打印前
    document.body.style.backgroundColor = '#f00'
  },
  afterPrint() { // 打印后
    document.body.style.backgroundColor = '#0ff'
  }
})
```
## use
```html
  <xpage class="page"></xpage>
  <xpage class="page" white></xpage>
```
## methods
```js
// vue prototype $xprint methods(window.print())
vm.$xprint()
```
*******

## demo
[github](https://github.com/ChaoLeer/xprint-demo)
[npm](https://www.npmjs.com/package/xprint)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
