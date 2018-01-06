<template>
    <div>
        <v-select :on-change="consoleCallback" :options="countries" v-for="item in selectArray" :key="item"></v-select>
    </div>
</template>
<style>

</style>
<script>
  import vSelect from 'vue-select'

  export default {
    data () {
      return {
        countries: ['foo', 'bar', 'baz']
      }
    },
    props: {
      selectArray: {
        type: Array,
        default () {
          return [0, 1, 2]
        }
      },
      jsonData: {
        type: Array,
        default () {
          return []
        }
      }
    },
    computed: {},
    components: {
      vSelect
    },
    methods: {
      consoleCallback (val) {
        console.dir(JSON.stringify(val))
      }
    },
    created () {
      console.log(this.jsonData)
    }
  }
</script>