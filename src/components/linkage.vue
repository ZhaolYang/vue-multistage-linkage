<template>
    <div>
        <v-select :value="getDefaultValue(item)" @valueChange="valueChange"
                  :options="optionsByItem(item)"
                  v-for="item in selectArray"
                  :key="item" :keyIndex="item"></v-select>
    </div>
</template>
<style>

</style>
<script>
  import vSelect from './Select.vue'

  export default {
    data () {
      return {
        secondDefaultIndex: 0,
        thirdDefaultIndex: 0
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
    computed: {
      firstOptions () {
        return this._pushArr(this.jsonData)
      },
      firstDefault () {
        return this.firstOptions[0]
      },
      secondOptions () {
        return this._pushArr(this.jsonData[this.secondDefaultIndex].cityList)
      },
      secondDefault () {
        return this.secondOptions[0]
      },
      thirdOptions () {
        return this._forIn(Object.assign({}, this.jsonData[this.secondDefaultIndex].cityList[this.thirdDefaultIndex].areaList))
      },
      thirdDefault () {
        return this.thirdOptions[0]
      }
    },
    components: {
      vSelect
    },
    methods: {
      _pushArr (data) {
        let arr = []
        data.forEach((item) => {
          arr.push(item.name)
        })
        return arr
      },
      _forIn (data) {
        let arr = []
        for (let a in data) {
          arr.push(data[a])
        }
        return arr
      },
      valueChange () {
        let valIndex = arguments[0]
        let selectIndex = arguments[1]
        let first = this.firstDefault
        let second = this.secondDefault
        let third = this.thirdDefault
        if (selectIndex === 0) {
          this.secondDefaultIndex = valIndex
          first = this.firstOptions[valIndex]
          second = this.secondDefault
          third = this.thirdDefault
        } else if (selectIndex === 1) {
          this.thirdDefaultIndex = valIndex
          second = this.secondOptions[valIndex]
          third = this.thirdDefault
        } else if (selectIndex === 2) {
          third = this.thirdOptions[valIndex]
        }
        this.$emit('changeCalback', [first, second, third])
      },
      getDefaultValue (i) {
        if (i === 0) {
          return this.firstDefault
        } else if (i === 1) {
          return this.secondDefault
        } else if (i === 2) {
          return this.thirdDefault
        }
      },
      optionsByItem (i) {
        if (i === 0) {
          return this.firstOptions
        } else if (i === 1) {
          return this.secondOptions
        } else if (i === 2) {
          return this.thirdOptions
        }
      }
    },
    created () {
    }
  }
</script>