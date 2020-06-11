<template>
  <div>
    <el-form-item label="滚动方向" v-if="selectWg.hasOwnProperty('direction')">
      <el-radio-group v-model="selectWg.direction" size="mini">
        <el-radio-button label="up">向上</el-radio-button>
        <el-radio-button label="left">向左</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="滚动时间（s）" v-if="selectWg.hasOwnProperty('durationTime')">
      <el-input-number v-model="selectWg.durationTime" :min="1" :max="60" size="small" />
    </el-form-item>
    <el-form-item label="内容高度(px)">
      <el-input-number
        v-model="selectWg.style.Height"
        :min="10"
        :max="200"
        size="small"
        @change="v=>selectWg.style.height=v+'px'"
      />
    </el-form-item>
    <el-form-item label="使用图片内容" v-if="selectWg.hasOwnProperty('isImgBtn')">
      <el-switch v-model="selectWg.isImgBtn"></el-switch>
    </el-form-item>
    <el-form-item label="上传图片" v-if="selectWg.isImgBtn&&selectWg.hasOwnProperty('imgUrl')">
      <FileUpload :value.sync="selectWg.imgUrl" />
    </el-form-item>
    <el-form-item label="选项（可使用空格分列）" v-if="!selectWg.isImgBtn&&selectWg.hasOwnProperty('textList')">
      <Draggable tag="ul" :list="selectWg.textList" :group="{ name:'options'}" ghostClass="ghost" handle=".move-icon">
        <li v-for="(item, index) in selectWg.textList" :key="index">
          <div class="flex align-middle">
            <el-input size="small" v-model="selectWg.textList[index]"></el-input>
            <i class="el-icon-menu move-icon"></i>
            <i class="el-icon-delete delect-icon" @click="handleOptionsRemove(index)"></i>
          </div>
        </li>
      </Draggable>
      <div style="margin-left: 22px;">
        <el-button type="text" @click="handleAddOption()">添加选项</el-button>
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
      let newItem =
        this.selectWg.textList.length > 0
          ? this.selectWg.textList[this.selectWg.textList.length - 1]
          : ''
      this.selectWg.textList.push(newItem)
    }
  }
}
</script>