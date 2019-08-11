export default {
  bind: function (el, binding, vnode) {
    console.log(el, binding, vnode)
    console.log(binding.value(), vnode)
    const h = vnode.context.$createElement
    console.log(el.parentNode)
    // el.parentElement.appendChild(el.cloneNode())
  }
}