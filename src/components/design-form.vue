<template>
  <draggable class="page-container" v-model="pageItems" :options="{group:'people', ghostClass: 'ghost'}" @end="handleMoveEnd" @add="handleWidgetAdd">
    <template v-for="(widget, index) in pageItems">
      <div class="design-form-label relative" :key="index">
        <div class="design-form-item" :class="{active: selectWidget === index}" @click="handleSelectWidget(index)">
          <template v-if="widget.type === 'input'">
            <input type="text" class="input-text" :placeholder="widget.config.placeholder">
          </template>
          <template v-if="widget.type === 'select'">
            <select class="input-select" placeholder="widget.config.placeholder">
              <!-- <option value disabled selected hidden>孩子就读年级</option> -->
              <option :value="item.value" v-for="item in widget.config.options" :key="item.value">{{item.text}}</option>
            </select>
          </template>
        </div>
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
      selectWidget: ""
    }
  },
  methods: {
    handleMoveEnd({ newIndex, oldIndex }) {
      console.log('index', newIndex, oldIndex)
    },
    handleSelectWidget(index) {
      console.log(index, '#####')
      this.selectWidget = index
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

