<template>
  <section>
    <el-form-item label="选择控件" v-if="selectWg.hasOwnProperty('fieldTypes')">
      <el-select v-model="selectWg.apiKey" filterable placeholder="请选择" @change="selectfield(selectWg.apiKey,fieldTypes[selectWg.fieldTypes])">
        <el-option v-for="item in fieldTypes[selectWg.fieldTypes]" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="是否显示标签" v-if="selectWg.hasOwnProperty('showLabel')">
      <el-switch v-model="selectWg.showLabel" @change="selectWg.showLabel?$store.commit('setWgCollapse', 'tag'):''"></el-switch>
    </el-form-item>
    <el-form-item label="是否发送验证码" v-if="selectWg.hasOwnProperty('showCode')">
      <el-switch v-model="selectWg.showCode"></el-switch>
    </el-form-item>
    <el-form-item label="提示内容" v-if="selectWg.hasOwnProperty('placeholder')">
      <el-input v-model="selectWg.placeholder"></el-input>
    </el-form-item>
    <el-form-item label="文本内容" v-if="selectWg.type==='staticText'">
      <el-input type="textarea" v-model="selectWg.value"></el-input>
    </el-form-item>
    <el-form-item label="是否单选" v-if="selectWg.hasOwnProperty('isRadio')">
      <el-switch v-model="selectWg.isRadio" @change="isRadio"></el-switch>
    </el-form-item>
    <el-form-item label="默认选中" v-if="selectWg.type==='switch'">
      <el-switch v-model="selectWg.value"></el-switch>
    </el-form-item>
    <el-form-item label="按钮文字" v-if="selectWg.hasOwnProperty('btnText')">
      <el-input v-model="selectWg.btnText"></el-input>
    </el-form-item>
    <el-form-item label="按钮类型" v-if="selectWg.hasOwnProperty('btnType')">
      <el-select v-model="selectWg.btnType" filterable placeholder="请选择">
        <el-option v-for="item in selectWg.btnTypes" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="选项" v-if="selectWg.hasOwnProperty('options')">
      <draggable tag="ul" :list="selectWg.options" :group="{ name:'options'}" ghostClass="ghost" handle=".move-icon">
        <li v-for="(item, index) in selectWg.options" :key="index">
          <div class="flex align-middle">
            <el-input size="mini" v-model="selectWg.options[index]"></el-input>
            <i class="el-icon-menu move-icon"></i>
            <i class="el-icon-delete delect-icon" @click="handleOptionsRemove(index)"></i>
          </div>
        </li>
      </draggable>
      <div style="margin-left: 22px;">
        <el-button type="text" @click="handleAddOption()">添加选项</el-button>
      </div>
    </el-form-item>
    <el-form-item label="图片上传" v-if="selectWg.type === 'imgShow'">
      <ImgUpload :value.sync="selectWg.value" />
    </el-form-item>
    <template v-if="selectWg.type ==='imgSlide'">
      <el-form-item label="轮播图片设置">
        <draggable tag="ul" :list="selectWg.value" :group="{ name:'slideList'}" ghostClass="ghost" handle=".move-icon">
          <li v-for="(item, index) in selectWg.value" :key="index" style="border:1px dashed #999">
            <div class="pd10">
              <div class="relative flex flex-center">
                <ImgUpload :value.sync="item.image" />
                <div class="absolute-top-right">
                  <i class="el-icon-menu move-icon"></i>
                  <i class="el-icon-delete delect-icon" @click="handleSlideRemove(index)"></i>
                </div>
              </div>
              <div class="flex">
                <span class="flex-none">图片地址：</span>
                <el-input size="mini" placeholder="请输入图片地址" v-model="item.image"></el-input>
              </div>
              <div class="flex">
                <span class="flex-none">跳转地址：</span>
                <el-input size="mini" placeholder="请输入跳转地址" v-model="item.url"></el-input>
              </div>
            </div>
          </li>
        </draggable>
        <div class="text-center">
          <el-button type="text" @click="handleAddSlide()">添加图片</el-button>
        </div>
      </el-form-item>
      <el-form-item label="图片高度(px)">
        <el-input-number v-model="selectWg.style.height" :min="100" :max="300" size="small" />
      </el-form-item>
      <el-form-item>
        <span slot="label">
          <span>播放间隔(ms)</span>
          <el-tooltip effect="dark" content="本页面无法看到实时效果，请点击预览查看" placement="top">
            <i class="el-icon-info fs12 mg-l10"></i>
          </el-tooltip>
        </span>
        <el-input-number v-model="selectWg.interval" :min="1000" :max="10000" size="small" />
      </el-form-item>
    </template>
  </section>
</template>

<script>
import Draggable from 'vuedraggable'
import allFieldTypes from '@/assets/json/field-types.json'
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
  data() {
    return {
      fieldTypes: allFieldTypes
    }
  },
  methods: {
    isRadio(flag) {
      this.selectWg.value = flag ? "" : []
    },
    selectfield(key, types) {
      let selectItem = types.find(item => key === item.value);
      this.selectWg.label.labelTitle = selectItem.label;
      this.selectWg.options ? this.selectWg.options = selectItem.options : "";
      if (this.selectWg.hasOwnProperty('placeholder')) {
        this.selectWg.placeholder = this.selectWg.type === "input" ? `请输入${selectItem.label}` : `请选择${selectItem.label}`;
      }
    },
    handleOptionsRemove(index) {
      this.selectWg.options.splice(index, 1)
    },
    handleAddOption() {
      this.selectWg.options.push('新选项')
    },
    handleSlideRemove(index) {
      this.selectWg.value.splice(index, 1)
    },
    handleAddSlide() {
      this.selectWg.value.push({
        url: "https://www.baidu.com/",
        image: "https://www.baidu.com/img/bd_logo1.png"
      })
    }
  }
}
</script>