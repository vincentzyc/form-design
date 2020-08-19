<template>
  <Draggable
    v-model="item.list"
    :group="{ name:'widget',put:!dragWg.hasOwnProperty('list')}"
    ghostClass="ghost"
    :swapThreshold="0.6"
    :animation="100"
    @add="handleWidgetAdd"
    class="widget-form-list wg-padding"
    :class="{'widget-empty': item.list.length === 0}"
  >
    <template v-for="(formItem,i) in item.list">
      <WidgetFormList :item="formItem" :index="i" :data="item.list" :key="formItem.key" />
    </template>
  </Draggable>
</template>

<script>
import { mapState } from 'vuex';
import Draggable from 'vuedraggable'
import WidgetFormList from './index'

export default {
  name: 'FormList',
  components: {
    Draggable,
    WidgetFormList
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