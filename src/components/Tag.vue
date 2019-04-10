<template>
  <div class="xprint-tag-page" :class="{
    'xprint-white': white
  }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XPrintTagPage',
  props: {
    white: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
