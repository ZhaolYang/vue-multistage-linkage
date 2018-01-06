<template>
    <div>
        <v-select v-model="selected" :options="['foo','bar']"></v-select>
    </div>
</template>
<style>

</style>
<script>
  import vSelect from 'vue-select'
  export default {
    data () {
      return {
        selected : 'foo'
      }
    },
    props: {},
    computed: {},
    components: {
      vSelect
    },
    methods: {},
    created () {
    }
  }
</script>