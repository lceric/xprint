<template>
  <div id="app">
    <button class="print-handler" @click="printHandler">打印</button>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div id="xprintContainer" class="xprint-container example-container">
      <!-- <Page class="xprint-page">
        <h2 class="example-h2">XPrint</h2>
        <dl class="example-dl">
          <dt class="example-dt">下载</dt>
          <dd class="example-dd">
            <p class="example-p">npm i --save xprint</p>
          </dd>
          <dt class="example-dt">引入</dt>
          <dd class="example-dd">
            <p class="example-p">import XPrint from 'xprint'</p>
            <p class="example-p">Vue.use(XPrint)</p>
          </dd>
        </dl>

      </Page>
      <Page class="xprint-page" white>
        <h2 class="example-h2">XPrint配置</h2>
        <dl class="example-dl">
          <dt class="example-dt">white页间距</dt>
          <dd class="example-dd">
            <p class="example-p">white: true默认false</p>
          </dd>
        </dl>
      </Page> -->
      <Page class="xprint-page" white v-print="printCore">
        <h2 class="example-h2">XPrint配置</h2>
        <div data-list="wrapper" v-for="i in 20" :key="i">
          <dl class="example-dl" data-list="wrapper-item">
            <dt class="example-dt">white页间距</dt>
            <dd class="example-dd" data-sub="wrapper-item-sub">
              <p class="example-p">white: true默认false</p>
            </dd>
          </dl>
        </div>
      </Page>
    </div>

  </div>
</template>

<script>
import Page from './components/Page.vue'
import Print from './directive/print'
export default {
  name: 'app',
  components: {
    Page
  },
  directives: {
    Print
  },
  created() {
    // console.log(document.body)
  },
  mounted() {
    document.body && document.body.classList.add('xprint-wrapper')
  },
  methods: {
    printHandler() {
      window.print()
    },
    printCore() {
      console.log('print-core')
      // TODO 循环列表计算高度，分页
      /**
       * 1. 获取容器之前同级元素的高度 [PRE DOMLIST]
       *    <Page> [PRE DOMLIST] LIST [SUB DOMLIST] </Page>
       * 2. PAGE的高度 - [PRE DOMLIST]的高度
       *    得到LIST的实际可用高度
       * 3. 依次计算LIST ITEM 的高度 itemH
       *    a.计算出第一个高度 itemH
       *      [判断 A]判断是否超出实际可用高度
       *          --超出-->   换页
       *          --未超出--> 继续下一个计算
       *    b.计算下一个 itemH += itemH
       *      [判断 A]
       *    c.执行b
       */
      return {
        // 设置分页的容器标识
        list: 'wrapper',
        // 设置单个容器
        item: 'wrapper-item',
        // 设置单个容器下级可分标识
        subItem: 'wrapper-item-sub'
      }
    }
  }
}
</script>

<style>
.print-handler {
  width: 120px;
  height: 120px;
  line-height: 120px;
  border-radius: 120px;
  position: fixed;
  right: 80px;
  bottom: 80px;
  font-size: 22px;
  color: #fff;
  outline: none;
  border: 0;
  cursor: pointer;
  background: #cec3ff;
  transition: all 0.2s ease-in-out;
  box-shadow: 8px 8px 18px #e2c5ff;
}
.print-handler:hover {
  color: #fff;
  background: #bdb2ff;
  box-shadow: 8px 8px 6px #e2c5ff;
}
.xprint-page {
  background: url('./assets/bg.jpg') no-repeat center;
  background-size: cover;
}
.example-container {
  color: #686868;
}
.example-h2 {
  margin: 0;
  line-height: 120px;
  text-align: center;
}
.example-p {
  margin: 0;
  line-height: 60px;
  text-indent: 80px;
  color: #787878;
}
.example-dl .example-dt {
  text-align: center;
  font-size: 18px;
  margin-top: 60px;
  color: #686868;
}
@media print {
  .print-handler {
    display: none;
  }
  /* .xprint-white {
    margin-top: 0px;
  } */
}

</style>
