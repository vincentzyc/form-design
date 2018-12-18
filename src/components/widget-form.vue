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
        <template v-for="(item, index) in pageData.list">
          <div
            class="flex align-middle widget-view"
            v-if="item && item.key"
            :key="item.key"
            :class="{active: selectWg.key === item.key,'widget-view-imgshow':item.type === 'imgshow'}"
            @click="handleSelectWidget(index)"
          >
            <template v-if="item.type === 'input'">
              <span class="wg-title" v-show="item.showLabel">{{item.name}}</span>
              <input v-model="item.defaultValue" :placeholder="item.placeholder" class="wg-input flex-auto">
            </template>

            <template v-if="item.type === 'checkbox'">
              <div class="wg-checkbox">
                <span class="wg-title">{{item.name}}</span>
                <label class="label" v-for="(item, index) in item.options" :key="item.value + index">
                  <input class="wg-checkbox-input" :type="item.isRadio?'radio':'checkbox'" :value="item.value" v-model="item.defaultValue" style="display:none">
                  <span>{{item.value}}</span>
                </label>
              </div>
            </template>

            <template v-if="item.type === 'select'">
              <span class="wg-title" v-show="item.showLabel">{{item.name}}</span>
              <select
                v-model="item.defaultValue"
                :disabled="item.disabled"
                :multiple="item.multiple"
                :clearable="item.clearable"
                :style="{width: item.width}"
                class="wg-select flex-auto"
              >
                <option value disabled selected hidden>{{item.placeholder}}</option>
                <option v-for="item in item.options" :key="item.value" :value="item.value" :label="item.showLabel?item.label:item.value"></option>
              </select>
            </template>

            <template v-if="item.type==='switch'">
              <div class="wg-switch">
                <span class="wg-title">{{item.title}}</span>
                <label class="label">
                  <input type="checkbox" class="wg-switch-input" v-model="item.defaultValue" style="display:none">
                  <span class="wg-switch-core"></span>
                </label>
              </div>
            </template>

            <template v-if="item.type === 'date'">
              <span class="wg-title">{{item.name}}</span>
              <input type="date" v-model="item.defaultValue">
            </template>

            <template v-if="item.type === 'imgshow'">
              <div class="flex flex-center" style="width: 100%;">
                <img v-if="item.defaultValue" :src="item.defaultValue" alt="图片展示" width="100%">
                <img v-else src="@/assets/img/img-placeholder.png" alt="图片展示">
              </div>
            </template>

            <template v-if="item.type === 'button'">
              <div class="flex flex-center" style="width: 100%;">
                <button class="wg-button">{{item.btnText}}</button>
              </div>
            </template>

            <el-button
              title="删除"
              @click.stop="handleWidgetDelete(index)"
              class="widget-action-delete"
              v-if="selectWg.key === item.key"
              circle
              plain
              type="danger"
            >删除</el-button>
            <el-button
              title="复制"
              @click.stop="handleWidgetClone(index)"
              class="widget-action-clone"
              v-if="selectWg.key === item.key"
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
      let newObj = this.$api.deepClone(this.pageData.list[newIndex]);
      // 绑定键值
      newObj.key = this.pageData.list[newIndex].type + '_' + key;
      this.$set(this.pageData.list, newIndex, newObj)
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
      let cloneData = this.$api.deepClone(this.pageData.list[index]);
      cloneData.key = this.pageData.list[index].type + '_' + Date.parse(new Date()) + '_' + Math.ceil(Math.random() * 99999)
      this.pageData.list.splice(index, 0, cloneData)
      this.$nextTick(() => {
        this.$store.commit('setSelectWg', this.pageData.list[index + 1])
      })
    },
  }
}
</script>
