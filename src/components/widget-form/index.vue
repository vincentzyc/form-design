<template>
  <div class="widget-form-wrapper" id="widget-form-wrapper">
    <div
      :style="{...pageData.style,backgroundImage:`url(${pageData.style.backgroundImage})`}"
      class="widget-form-container"
      id="widget-form-container"
    >
      <div :class="'template-'+pageData.theme">
        <div class="wg-fixed-top" v-if="Array.isArray(pageData.fixedTop)&&pageData.fixedTop.length>0">
          <!-- 可支持多个组件悬浮，目前未开放，限制一个-->
          <template v-for="(item,index) in pageData.fixedTop">
            <WidgetFormList :data="pageData.fixedTop" :index="index" :item="item" :key="item.key" />
          </template>
        </div>
        <div
          class="wg-fixed-custom"
          v-if="Array.isArray(pageData.fixedCustom)&&pageData.fixedCustom.length>0"
        >
          <!-- 可支持多个组件悬浮，目前未开放，限制一个 -->
          <template v-for="(item,index) in pageData.fixedCustom">
            <WidgetFormList
              :data="pageData.fixedCustom"
              :index="index"
              :item="item"
              :key="item.key"
              :style="fixedCustomStyle(item)"
              class="fixed-item"
            />
          </template>
        </div>
        <Draggable
          :animation="100"
          :class="{'widget-empty': pageData.list.length === 0&&!pageData.style.backgroundImage}"
          :group="{ name:'widget',put:true}"
          :swapThreshold="0.7"
          @add="handleWidgetAdd"
          @end="dragEnd"
          @start="dragStart"
          class="widget-form-list"
          filter=".disdraggable"
          ghostClass="ghost"
          v-model="pageData.list"
        >
          <template v-for="(item,index) in pageData.list">
            <WidgetFormList :data="pageData.list" :index="index" :item="item" :key="item.key" />
          </template>
        </Draggable>

        <div
          class="wg-fixed-bottom"
          v-if="Array.isArray(pageData.fixedBottom)&&pageData.fixedBottom.length>0"
        >
          <!-- 可支持多个组件悬浮，目前未开放，限制一个-->
          <template v-for="(item,index) in pageData.fixedBottom">
            <WidgetFormList :data="pageData.fixedBottom" :index="index" :item="item" :key="item.key" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Draggable from 'vuedraggable'
import WidgetFormList from './widget-form-list'

export default {
  components: {
    WidgetFormList, Draggable
  },
  computed: {
    ...mapState({
      pageData: state => state.common.pageData
    })
  },
  methods: {
    fixedCustomStyle(item) {
      if (item.position) {
        return {
          width: item.style.width,
          top: item.position.top + 'px',
          [item.position.side]: item.position[item.position.side] + '%'
        }
      }
    },
    dragStart(evt) {
      this.$store.commit('setDragWg', this.pageData.list[evt.oldIndex])
    },
    dragEnd() {
      this.$store.commit('setDragWg', '')
    },
    handleWidgetAdd(evt) {
      const newIndex = evt.newIndex;
      this.$store.commit('setSelectWg', this.pageData.list[newIndex]);
      this.$store.commit('setConfigTab', "widget");
    }
  }
}
</script>
