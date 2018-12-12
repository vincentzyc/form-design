<template>
  <div class="widget-form-container">
    <draggable
      element="ul"
      :list="basicComponents"
      :options="{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
      @end="handleMoveEnd"
      @start="handleMoveStart"
      :move="handleMove"
    >
      <li class="widget-form-label" v-for="(item, index) in basicComponents" :key="index">
        <span>{{item.name}}</span>
      </li>
    </draggable>
  </div>
</template>

<script>
import widgetForm from "@/assets/json/widget-form.json";
import Draggable from 'vuedraggable'
export default {
  components: {
    Draggable
  },
  data() {
    return {
      basicComponents: widgetForm
    };
  },
  methods: {
    handleMoveEnd(evt) {
      console.log('end', evt)
    },
    handleMoveStart({ oldIndex }) {
      console.log('start', oldIndex, this.basicComponents)
    },
    handleMove() {
      return true
    }
  }
};
</script>

<style scoped>
.widget-form-container{
  padding: 10px;
  overflow: hidden;
}
.widget-form-label {
  position: relative;
  display: block;
  float: left;
  width: 46%;
  margin: 2%;
  line-height: 36px;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #333;
  cursor: move;
  background: #f4f6fc;
  border: 1px solid #f4f6fc;
}
.widget-form-label:hover {
  color: #409eff;
  border: 1px dashed #409eff;
}
</style>


