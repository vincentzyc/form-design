<template>
  <div v-if="this.selectWg && Object.keys(this.selectWg).length > 0">
    <el-form label-position="top">
      <el-form-item label="提示内容" v-if="Object.keys(selectWg.config).indexOf('placeholder')>=0">
        <el-input v-model="selectWg.config.placeholder"></el-input>
      </el-form-item>
      <el-form-item label="选择控件" v-if="selectWg.type=='input'">
        <el-select v-model="selectWg.config.apiKey" filterable placeholder="请选择" @change="selectInput">
          <el-option v-for="item in selectWg.config.inputTypes" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选项" v-if="Object.keys(selectWg.config).indexOf('options')>=0">
        <template v-if="selectWg.type=='radio' || (selectWg.type=='select'&&!selectWg.config.multiple)">
          <draggable element="ul" :list="selectWg.config.options" :options="{group:'options', ghostClass: 'ghost',handle: '.move-icon'}">
            <li v-for="(item, index) in selectWg.config.options" :key="index">
              <div class="flex align-middle">
                <el-input :style="{'width': selectWg.config.showLabel? '90px': '190px' }" size="mini" v-model="item.value"></el-input>
                <i class="el-icon-menu move-icon"></i>
                <i class="el-icon-delete delect-icon" @click="handleOptionsRemove(index)"></i>
              </div>
            </li>
          </draggable>
        </template>

        <template v-if="selectWg.type=='checkbox' || (selectWg.type=='select' && selectWg.config.multiple)">
          <draggable element="ul" :list="selectWg.config.options" :options="{group:'options', ghostClass: 'ghost',handle: '.move-icon'}">
            <li v-for="(item, index) in selectWg.config.options" :key="index">
              <div class="flex align-middle">
                <el-input :style="{'width': selectWg.config.showLabel? '90px': '190px' }" size="mini" v-model="item.value"></el-input>
                <i class="el-icon-menu move-icon"></i>
                <i class="el-icon-delete delect-icon" @click="handleOptionsRemove(index)"></i>
              </div>
            </li>
          </draggable>
        </template>
        <div style="margin-left: 22px;">
          <el-button type="text" @click="handleAddOption">添加选项</el-button>
        </div>
      </el-form-item>

      <el-form-item label="图片上传">
        <template v-if="selectWg.type === 'imgshow'">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="selectWg.config.defaultValue" :src="selectWg.config.defaultValue" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </template>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'

export default {
  components: {
    Draggable
  },
  props: {
    selectWg: Object
  },
  data() {
    return {}
  },
  methods: {
    selectInput(val) {
      let selectWg = this.selectWg.config.inputTypes.find(item => val === item.value);
      this.selectWg.config.placeholder = `请输入${selectWg.label}`
    },
    handleAvatarSuccess(res, file) {
      this.selectWg.config.defaultValue = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isLt2M;
    },
    handleOptionsRemove(index) {
      if (this.selectWg.type === 'grid') {
        this.selectWg.columns.splice(index, 1)
      } else {
        this.selectWg.config.options.splice(index, 1)
      }

    },
    handleAddOption() {
      if (this.selectWg.config.showLabel) {
        this.selectWg.config.options.push({
          value: '新选项',
          label: '新选项'
        })
      } else {
        this.selectWg.config.options.push({
          value: '新选项'
        })
      }

    }
  }
}
</script>
