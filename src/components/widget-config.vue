<template>
  <div v-if="this.selectWg && Object.keys(this.selectWg).length > 0">
    <el-form label-position="top">
      <el-form-item label="选择控件" v-if="typeof(selectWg.fieldTypes)!=='undefined'">
        <el-select v-model="selectWg.apiKey" filterable placeholder="请选择" @change="selectfield(selectWg.apiKey,fieldTypes[selectWg.fieldTypes])">
          <el-option v-for="item in fieldTypes[selectWg.fieldTypes]" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题" v-if="Object.keys(selectWg).indexOf('title')>=0">
        <el-input v-model="selectWg.title"></el-input>
      </el-form-item>
      <el-form-item label="是否显示标题" v-if="Object.keys(selectWg).indexOf('showLabel')>=0">
        <el-switch v-model="selectWg.showLabel"></el-switch>
      </el-form-item>
      <el-form-item label="标题对齐方式" v-if="Object.keys(selectWg).indexOf('labelPosition')>=0">
        <el-radio-group v-model="selectWg.labelPosition" size="mini">
          <el-radio-button label="left">左对齐</el-radio-button>
          <el-radio-button label="top">顶部对齐</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否发送验证码" v-if="Object.keys(selectWg).indexOf('showCode')>=0">
        <el-switch v-model="selectWg.showCode"></el-switch>
      </el-form-item>
      <el-form-item label="提示内容" v-if="Object.keys(selectWg).indexOf('placeholder')>=0">
        <el-input v-model="selectWg.placeholder"></el-input>
      </el-form-item>
      <el-form-item label="文本内容" v-if="selectWg.type==='staticText'">
        <el-input type="textarea" v-model="selectWg.value"></el-input>
      </el-form-item>
      <el-form-item label="文本对齐方式" v-if="Object.keys(selectWg).indexOf('textAlign')>=0">
        <el-radio-group v-model="selectWg.textAlign" size="mini">
          <el-radio-button label="left">左对齐</el-radio-button>
          <el-radio-button label="center">居中对齐</el-radio-button>
          <el-radio-button label="right">右对齐</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="文字大小（px）" v-if="Object.keys(selectWg).indexOf('fontSize')>=0">
        <el-input-number v-model="selectWg.fontSize" :min="10" :max="30" size="small"></el-input-number>
      </el-form-item>
      <el-form-item label="文字颜色" v-if="Object.keys(selectWg).indexOf('color')>=0">
        <el-color-picker v-model="selectWg.color"></el-color-picker>
      </el-form-item>
      <el-form-item label="是否单选" v-if="Object.keys(selectWg).indexOf('isRadio')>=0">
        <el-switch v-model="selectWg.isRadio" @change="isRadio"></el-switch>
      </el-form-item>
      <el-form-item label="默认选中" v-if="selectWg.type==='switch'">
        <el-switch v-model="selectWg.value"></el-switch>
      </el-form-item>
      <el-form-item label="按钮文字" v-if="Object.keys(selectWg).indexOf('btnText')>=0">
        <el-input v-model="selectWg.btnText"></el-input>
      </el-form-item>
      <el-form-item label="按钮类型" v-if="Object.keys(selectWg).indexOf('btnType')>=0">
        <el-select v-model="selectWg.btnType" filterable placeholder="请选择">
          <el-option v-for="item in selectWg.btnTypes" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选项" v-if="Object.keys(selectWg).indexOf('options')>=0">
        <template v-if="selectWg.type=='checkbox' || selectWg.type=='select'">
          <draggable element="ul" :list="selectWg.options" :options="{group:{ name:'options'}, ghostClass: 'ghost',handle: '.move-icon'}">
            <li v-for="(item, index) in selectWg.options" :key="index">
              <div class="flex align-middle">
                <el-input size="mini" v-model="selectWg.options[index]"></el-input>
                <i class="el-icon-menu move-icon"></i>
                <i class="el-icon-delete delect-icon" @click="handleOptionsRemove(index)"></i>
              </div>
            </li>
          </draggable>
        </template>
        <div style="margin-left: 22px;">
          <el-button type="text" @click="handleAddOption()">添加选项</el-button>
        </div>
      </el-form-item>

      <template v-if="selectWg.type === 'imgshow'">
        <el-form-item label="图片上传">
          <el-upload
            class="avatar-uploader"
            :action="$api.apiUrl()+'supermarketloan/mgr/eventmarket/uploadeventmarketimg'"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            :on-error="uploadError"
          >
            <img v-if="selectWg.value" :src="selectWg.value" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Draggable from 'vuedraggable'
import allFieldTypes from '@/assets/json/field-types.json'

export default {
  components: {
    Draggable
  },
  data() {
    return {
      fieldTypes: allFieldTypes
    }
  },
  computed: {
    ...mapState({
      selectWg: state => state.common.selectWg
    })
  },
  methods: {
    isRadio(flag) {
      this.selectWg.value = flag ? "" : []
    },
    selectfield(key, types) {
      let selectItem = types.find(item => key === item.value);
      this.selectWg.title ? this.selectWg.title = selectItem.label : "";
      this.selectWg.options ? this.selectWg.options = selectItem.options : ""
      if (typeof (this.selectWg.placeholder) !== "undefined") {
        this.selectWg.placeholder = this.selectWg.type === "input" ? `请输入${selectItem.label}` : `请选择${selectItem.label}`;
      }
    },
    handleAvatarSuccess(res, file) {
      this.selectWg.value = res.data;
      this.fullLoading.close()
    },
    uploadError(err, file, fileList) {
      console.log(err);
      this.fullLoading.close();
      this.$alert('网络繁忙，请稍后重试')
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 1;
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 1MB!');
      }
      this.fullLoading = this.$loading({
        text: '正在上传'
      });
      return isLt2M;
    },
    handleOptionsRemove(index) {
      this.selectWg.options.splice(index, 1)
    },
    handleAddOption() {
      this.selectWg.options.push('新选项')
    }
  }
}
</script>
