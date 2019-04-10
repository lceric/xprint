<template>
  <div id="app">
    <button class="print-handler" @click="printHandler">打印</button>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <div id="xprintContainer" class="xprint-container example-container">
      <Tag class="xprint-tag-page">
      </Tag>
      <Tag class="xprint-tag-page" white>
      </Tag>
    </div>

  </div>
</template>

<script>
import Tag from './components/Tag.vue'

export default {
  name: 'app',
  components: {
    Tag
  },
  created() {
    console.log(document.body)
  },
  mounted() {
    document.body && document.body.classList.add('xprint-wrapper')
  },
  methods: {
    printHandler() {
      window.print()
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
