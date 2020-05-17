<template>
  <div class="widget-form-wrapper">
    <div
      class="widget-form-container"
      :style="{...pageData.style,backgroundImage:`url(${pageData.style.backgroundImage})`}"
    >
      <div :class="'template-'+pageData.theme">
        <div v-if="Array.isArray(pageData.fixedCustom)&&pageData.fixedCustom.length>0" class="wg-fixed-custom">
          <template v-for="(item,index) in pageData.fixedCustom">
            <WidgetFormList :item="item" :index="index" :data="pageData.fixedCustom" :key="item.key" />
          </template>
        </div>
        <Draggable
          v-model="pageData.list"
          :group="{ name:'widget',put:true}"
          filter=".disdraggable"
          ghostClass="ghost"
          :swapThreshold="0.7"
          :animation="100"
          @start="dragStart"
          @end="dragEnd"
          @add="handleWidgetAdd"
          class="widget-form-list"
          :class="{'widget-empty': pageData.list.length === 0&&!pageData.style.backgroundImage}"
        >
          <template v-for="(item,index) in pageData.list">
            <WidgetFormList :item="item" :index="index" :data="pageData.list" :key="item.key" />
          </template>
        </Draggable>

        <div v-if="Array.isArray(pageData.fixedBottom)&&pageData.fixedBottom.length>0" class="wg-fixed-bottom">
          <template v-for="(item,index) in pageData.fixedBottom">
            <WidgetFormList :item="item" :index="index" :data="pageData.fixedBottom" :key="item.key" />
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
      pageData: state => state.common.pageData,
      selectWg: state => state.common.selectWg
    })
  },
  methods: {
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
