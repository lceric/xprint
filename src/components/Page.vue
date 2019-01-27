<template>
  <div class="xprint-page" :class="{
    'xprint-white': white
  }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'XPrintPage',
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
