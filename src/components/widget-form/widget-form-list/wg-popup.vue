<template>
  <!-- <el-switch v-model="showPopup"></el-switch> -->
  <BuilderPopup ref="builderPopup" v-model="showPopup">
    <div>
      <h1>123start</h1>
      <Draggable
        :animation="100"
        :class="{'widget-empty': item.list.length === 0}"
        :group="{ name:'widget',put:!dragWg.hasOwnProperty('list')}"
        :swapThreshold="0.6"
        @add="handleWidgetAdd"
        class="widget-form-list wg-padding"
        ghostClass="ghost"
        v-model="item.list"
      >
        <template v-for="(formItem,i) in item.list">
          <WidgetFormList :data="item.list" :index="i" :item="formItem" :key="formItem.key" />
        </template>
      </Draggable>
      <h1>123end</h1>
    </div>
  </BuilderPopup>
</template>

<script>
import { mapState } from 'vuex';
import Draggable from 'vuedraggable'
import WidgetFormList from './index'
import BuilderPopup from '../builder-popup'

export default {
  name: 'PopupList',
  components: {
    Draggable,
    WidgetFormList,
    BuilderPopup
  },
  props: {
    item: Object,
    index: Number,
    data: Array
  },
  computed: {
    ...mapState({
      selectWg: state => state.common.selectWg,
      dragWg: state => state.common.dragWg
    })
  },
  methods: {
    handleWidgetAdd(evt) {
      const newIndex = evt.newIndex;
      this.$store.commit('setSelectWg', this.item.list[newIndex])
      this.$store.commit('setConfigTab', "widget");
    }
  }
}
</script>