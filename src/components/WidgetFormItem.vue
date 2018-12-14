<template>
  <div
    class="widget-view"
    v-if="element && element.key"
    :class="{active: selectWidget.key === element.key, 'is_req': element.config.required,'widget-view-imgshow':element.type === 'imgshow'}"
    @click="handleSelectWidget(index)"
  >
    <template v-if="element.type === 'input'">
      <input v-model="element.config.defaultValue" :style="{width: element.config.width}" :placeholder="element.config.placeholder" class="wg-input">
    </template>

    <template v-if="element.type === 'radio'">
      <div class="wg-radio">
        <span class="title">{{element.name}}：</span>
        <label class="label" v-for="(item, index) in element.config.options" :key="item.value + index">
          <input class="wg-radio-input" type="radio" :value="item.value" v-model="element.config.defaultValue" style="display:none">
          <span>{{element.config.showLabel ? item.label : item.value}}</span>
        </label>
      </div>
    </template>

    <template v-if="element.type==='switch'">
      <div class="wg-switch">
        <span class="title">{{element.name}}：</span>
        <label class="label">
          <input type="checkbox" class="wg-switch-input" v-model="element.config.defaultValue" style="display:none">
          <span class="wg-switch-core"></span>
        </label>
      </div>
    </template>

    <template v-if="element.type === 'checkbox'">
      <div class="wg-checkbox">
        <span class="title">{{element.name}}：</span>
        <label class="label" v-for="(item, index) in element.config.options" :key="item.value + index">
          <input class="wg-checkbox-input" type="checkbox" :value="item.value" v-model="element.config.defaultValue" style="display:none">
          <span>{{element.config.showLabel ? item.label : item.value}}</span>
        </label>
      </div>
    </template>

    <template v-if="element.type === 'select'">
      <select
        v-model="element.config.defaultValue"
        :disabled="element.config.disabled"
        :multiple="element.config.multiple"
        :clearable="element.config.clearable"
        :style="{width: element.config.width}"
        class="wg-select"
      >
        <option value disabled selected hidden>{{element.config.placeholder}}</option>
        <option v-for="item in element.config.options" :key="item.value" :value="item.value" :label="element.config.showLabel?item.label:item.value"></option>
      </select>
    </template>

    <template v-if="element.type === 'date'">
      <span class="title">{{element.name}}：</span>
      <input type="date" v-model="element.config.defaultValue">
    </template>

    <template v-if="element.type === 'imgshow'">
      <div class="text-center" style="background:#f1f1f1">
        <img v-if="element.config.defaultValue" :src="element.config.defaultValue" alt="图片展示" width="100%">
        <img v-else src="@/assets/img/img-placeholder.png" alt="图片展示">
      </div>
    </template>

    <el-button
      title="删除"
      @click.stop="handleWidgetDelete(index)"
      class="widget-action-delete"
      v-if="selectWidget.key === element.key"
      circle
      plain
      type="danger"
    >删除</el-button>
    <el-button
      title="复制"
      @click.stop="handleWidgetClone(index)"
      class="widget-action-clone"
      v-if="selectWidget.key === element.key"
      circle
      plain
      type="primary"
    >复制</el-button>
  </div>
</template>

<script>
export default {
  props: ['element', 'selectWg', 'index', 'pageData'],
  // props:{
      // index:Number
  // },
  data() {
    return {
      selectWidget: this.selectWg
    }
  },
  methods: {
    handleSelectWidget(index) {
      this.selectWidget = this.pageData.list[index]
    },
    handleWidgetDelete(index) {
      if (this.pageData.list.length - 1 === index) {
        if (index === 0) {
          this.selectWidget = {}
        } else {
          this.selectWidget = this.pageData.list[index - 1]
        }
      } else {
        this.selectWidget = this.pageData.list[index + 1]
      }

      this.$nextTick(() => {
        this.pageData.list.splice(index, 1)
      })
    },
    handleWidgetClone(index) {
      let cloneData = {
        ...this.pageData.list[index],
        config: { ...this.pageData.list[index].config },
        key: Date.parse(new Date()) + '_' + Math.ceil(Math.random() * 99999)
      }

      if (this.pageData.list[index].type === 'radio' || this.pageData.list[index].type === 'checkbox') {

        cloneData = {
          ...cloneData,
          config: {
            ...cloneData.config,
            config: cloneData.config.options.map(item => ({ ...item }))
          }
        }
      }

      this.pageData.list.splice(index, 0, cloneData)

      this.$nextTick(() => {
        this.selectWidget = this.pageData.list[index + 1]
      })
    },
  },
  watch: {
    selectWg(val) {
      this.selectWidget = val
    },
    selectWidget: {
      handler(val) {
        this.$emit('update:selectWg', val)
      },
      deep: true
    }
  }
}
</script>
