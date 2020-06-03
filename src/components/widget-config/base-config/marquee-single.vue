<template>
  <div>
    <el-form-item label="滚动间隔（秒）" v-if="selectWg.hasOwnProperty('durationTime')">
      <el-input-number size="small" v-model="selectWg.durationTime" :min="1" :max="6" :step="0.5" step-strictly />
    </el-form-item>

    <el-form-item label="选项" v-if="selectWg.hasOwnProperty('textList')">
      <Draggable tag="ul" :list="selectWg.textList" :group="{ name:'options'}" ghostClass="ghost" handle=".move-icon">
        <li v-for="(item, index) in selectWg.textList" :key="index">
          <div class="flex align-middle">
            <el-input size="small" v-model="selectWg.textList[index].text"></el-input>
            <el-radio-group v-model="selectWg.textList[index].sex" size="mini" class="flex-none mg-l5">
              <el-radio-button label="man">男</el-radio-button>
              <el-radio-button label="woman">女</el-radio-button>
            </el-radio-group>
            <i class="el-icon-menu move-icon"></i>
            <i class="el-icon-delete delect-icon" @click="handleOptionsRemove(index)"></i>
          </div>
        </li>
      </Draggable>
      <div class="mg-l10">
        <el-button type="text" @click="handleAddOption()">添加</el-button>
      </div>
    </el-form-item>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
export default {
  components: {
    Draggable
  },
  props: {
    selectWg: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleOptionsRemove(index) {
      this.selectWg.textList.splice(index, 1)
    },
    handleAddOption() {
      let arrLength = this.selectWg.textList.length;
      let newItem =
        arrLength > 0
          ? this.$util.deepClone(this.selectWg.textList[arrLength - 1])
          : ''
      this.selectWg.textList.push(newItem)
    }
  }
}
</script>