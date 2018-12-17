<template>
  <div class="widget-form-container">
    <el-form style="height:100%">
      <draggable
        class="widget-form-list"
        :class="{'widget-empty': pageData.list.length == 0}"
        v-model="pageData.list"
        :options="{group:'widget', ghostClass: 'ghost'}"
        @end="handleMoveEnd"
        @add="handleWidgetAdd"
      >
        <template v-for="(element, index) in pageData.list">
          <div
            class="flex align-middle widget-view"
            v-if="element && element.key"
            :key="element.key"
            :class="{active: selectWg.key === element.key,'widget-view-imgshow':element.type === 'imgshow'}"
            @click="handleSelectWidget(index)"
          >
            <template v-if="element.type === 'input'">
              <span class="wg-title" v-show="element.showLabel">{{element.name}}</span>
              <input v-model="element.defaultValue" :placeholder="element.placeholder" class="wg-input flex-auto">
            </template>

            <template v-if="element.type === 'radio'">
              <div class="wg-radio">
                <span class="wg-title">{{element.name}}</span>
                <label class="label" v-for="(item, index) in element.options" :key="item.value + index">
                  <input class="wg-radio-input" type="radio" :value="item.value" v-model="element.defaultValue" style="display:none">
                  <span>{{item.value}}</span>
                </label>
              </div>
            </template>

            <template v-if="element.type==='switch'">
              <div class="wg-switch">
                <span class="wg-title">{{element.name}}</span>
                <label class="label">
                  <input type="checkbox" class="wg-switch-input" v-model="element.defaultValue" style="display:none">
                  <span class="wg-switch-core"></span>
                </label>
              </div>
            </template>

            <template v-if="element.type === 'checkbox'">
              <div class="wg-checkbox">
                <span class="wg-title">{{element.name}}</span>
                <label class="label" v-for="(item, index) in element.options" :key="item.value + index">
                  <input class="wg-checkbox-input" type="checkbox" :value="item.value" v-model="element.defaultValue" style="display:none">
                  <span>{{element.showLabel ? item.label : item.value}}</span>
                </label>
              </div>
            </template>

            <template v-if="element.type === 'select'">
              <span class="wg-title" v-show="element.showLabel">{{element.name}}</span>
              <select
                v-model="element.defaultValue"
                :disabled="element.disabled"
                :multiple="element.multiple"
                :clearable="element.clearable"
                :style="{width: element.width}"
                class="wg-select flex-auto"
              >
                <option value disabled selected hidden>{{element.placeholder}}</option>
                <option v-for="item in element.options" :key="item.value" :value="item.value" :label="element.showLabel?item.label:item.value"></option>
              </select>
            </template>

            <template v-if="element.type === 'date'">
              <span class="wg-title">{{element.name}}</span>
              <input type="date" v-model="element.defaultValue">
            </template>

            <template v-if="element.type === 'imgshow'">
              <div class="flex flex-center" style="width: 100%;">
                <img v-if="element.defaultValue" :src="element.defaultValue" alt="图片展示" width="100%">
                <img v-else src="@/assets/img/img-placeholder.png" alt="图片展示">
              </div>
            </template>

            <el-button
              title="删除"
              @click.stop="handleWidgetDelete(index)"
              class="widget-action-delete"
              v-if="selectWg.key === element.key"
              circle
              plain
              type="danger"
            >删除</el-button>
            <el-button
              title="复制"
              @click.stop="handleWidgetClone(index)"
              class="widget-action-clone"
              v-if="selectWg.key === element.key"
              circle
              plain
              type="primary"
            >复制</el-button>
          </div>
        </template>
      </draggable>
    </el-form>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Draggable from 'vuedraggable'

export default {
  components: {
    Draggable
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      selectWg: state => state.common.selectWg,
      pageData: state => state.common.pageData
    })
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
      this.$set(this.pageData.list, newIndex, {
        ...this.pageData.list[newIndex],
        // 绑定键值
        key: this.pageData.list[newIndex].type + '_' + key,
      })
      this.$store.commit('setSelectWg', this.pageData.list[newIndex])
    },
    handleSelectWidget(index) {
      this.$store.commit('setSelectWg', this.pageData.list[index])
    },
    handleWidgetDelete(index) {
      if (this.pageData.list.length - 1 === index) {
        if (index === 0) {
          this.$store.commit('setSelectWg', {})
        } else {
          this.$store.commit('setSelectWg', this.pageData.list[index - 1])
        }
      } else {
        this.$store.commit('setSelectWg', this.pageData.list[index + 1])
      }

      this.$nextTick(() => {
        this.pageData.list.splice(index, 1)
      })
    },
    handleWidgetClone(index) {
      let cloneData = {
        ...this.pageData.list[index],
        key: Date.parse(new Date()) + '_' + Math.ceil(Math.random() * 99999)
      }

      this.pageData.list.splice(index, 0, cloneData)

      this.$nextTick(() => {
        this.$store.commit('setSelectWg', this.pageData.list[index + 1])
      })
    },
  }
}
</script>
