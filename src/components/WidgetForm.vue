<template>
  <div class="widget-form-container">
    <el-form :label-position="data.config.labelPosition" :label-width="data.config.labelWidth + 'px'" style="height:100%">
      <draggable
        class="widget-form-list"
        :class="{'widget-empty': data.list.length == 0}"
        v-model="data.list"
        :options="{group:'people', ghostClass: 'ghost'}"
        @end="handleMoveEnd"
        @add="handleWidgetAdd"
      >
        <template v-for="(element, index) in data.list">
          <widget-form-item v-if="element && element.key" :key="element.key" :element="element" :select.sync="selectWidget" :index="index" :data="data"></widget-form-item>
        </template>
      </draggable>
    </el-form>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
import WidgetFormItem from './WidgetFormItem'

export default {
  components: {
    Draggable,
    WidgetFormItem
  },
  props: ['data', 'select'],
  data() {
    return {
      selectWidget: this.select
    }
  },
  methods: {
    handleMoveEnd({ newIndex, oldIndex }) {
      console.log('index', newIndex, oldIndex)
    },
    handleWidgetAdd(evt) {
      console.log('add', evt)
      console.log('end', evt)
      const newIndex = evt.newIndex
      const to = evt.to
      console.log(to)

      //为拖拽到容器的元素添加唯一 key
      const key = Date.parse(new Date()) + '_' + Math.ceil(Math.random() * 99999)
      this.$set(this.data.list, newIndex, {
        ...this.data.list[newIndex],
        config: {
          ...this.data.list[newIndex].config,
          remoteFunc: 'func_' + key
        },
        key,
        // 绑定键值
        model: this.data.list[newIndex].type + '_' + key,
        rules: []
      })

      if (this.data.list[newIndex].type === 'radio' || this.data.list[newIndex].type === 'checkbox') {
        this.$set(this.data.list, newIndex, {
          ...this.data.list[newIndex],
          config: {
            ...this.data.list[newIndex].config,
            config: this.data.list[newIndex].config.options.map(item => ({
              ...item
            }))
          }
        })
      }

      if (this.data.list[newIndex].type === 'grid') {
        this.$set(this.data.list, newIndex, {
          ...this.data.list[newIndex],
          columns: this.data.list[newIndex].columns.map(item => ({ ...item }))
        })
      }

      this.selectWidget = this.data.list[newIndex]
    }
  },
  watch: {
    select(val) {
      this.selectWidget = val
    },
    selectWidget: {
      handler(val) {
        this.$emit('update:select', val)
      },
      deep: true
    }
  }
}
</script>
