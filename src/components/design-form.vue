<template>
  <draggable class="page-container" v-model="pageItems" :options="{group:'people', ghostClass: 'ghost'}" @end="handleMoveEnd" @add="handleWidgetAdd">
    <template v-for="(widget, index) in pageItems">
      <div class="design-form-label relative" :key="index">
        <template v-if="widget.type === 'input'">
          <input type="text" v-model="dataModel" :placeholder="widget.config.placeholder">
        </template>
      </div>
    </template>
  </draggable>
</template>

<script>
import Draggable from 'vuedraggable'

export default {
  components: {
    Draggable
  },
  props: ['data', 'select'],
  data() {
    return {
      pageItems: [],
      selectWidget: this.select
    }
  },
  methods: {
    handleMoveEnd({ newIndex, oldIndex }) {
      console.log('index', newIndex, oldIndex)
    },
    handleSelectWidget(index) {
      console.log(index, '#####')
      this.selectWidget = this.data.list[index]
    },
    handleWidgetAdd(evt) {
      console.log('add', evt)
      console.log('end', evt)
      const newIndex = evt.newIndex
      const to = evt.to
      console.log(to)
    },

  }
}
</script>

