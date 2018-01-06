import vueLinkage from './components/linkage.vue'

// expose component to global scope
if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('vue-multistage-linkage', vueLinkage)
}

export { vueLinkage }

export default vueLinkage
