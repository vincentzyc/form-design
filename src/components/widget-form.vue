<template>
  <div class="widget-form-wrapper">
    <div class="widget-form-container" :style="{background:pageData.config.background}">
      <!-- <img src="@/assets/img/404.jpg" alt width="100%"> -->
      <draggable
        v-model="pageData.list"
        :options="{group:'widget', ghostClass: 'ghost'}"
        @end="handleMoveEnd"
        @add="handleWidgetAdd"
        class="widget-form-list"
        :class="{'widget-empty': pageData.list.length === 0}"
      >
        <template v-for="(item, index) in pageData.list">
          <widget-form-item v-if="item && item.key" :key="item.key" :item="item" :index="index"/>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Draggable from 'vuedraggable'
import WidgetFormItem from './widget-form-item'

export default {
  components: {
    Draggable,
    WidgetFormItem
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
