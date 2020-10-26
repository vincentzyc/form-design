<template>
  <section>
    <el-form-item label="选择控件" v-if="$util.hasKey(selectWg,'fieldTypes')">
      <el-select
        v-model="selectWg.apiKey"
        filterable
        placeholder="请选择"
        @change="selectfield(selectWg.apiKey,fieldTypes[selectWg.fieldTypes])"
      >
        <el-option
          v-for="item in fieldTypes[selectWg.fieldTypes]"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="是否必填/选" v-if="$util.hasKey(selectWg, 'isRequired')">
      <el-switch v-model="selectWg.isRequired"></el-switch>
    </el-form-item>
    <el-form-item label="是否显示标签" v-if="$util.hasKey(selectWg,'showLabel')">
      <el-switch v-model="selectWg.showLabel" @change="selectWg.showLabel?$store.commit('setWgCollapse', 'tag'):''"></el-switch>
    </el-form-item>
    <el-form-item label="是否发送验证码" v-if="$util.hasKey(selectWg,'showCode')">
      <el-switch v-model="selectWg.showCode"></el-switch>
    </el-form-item>
    <el-form-item label="提示内容" v-if="$util.hasKey(selectWg,'placeholder')">
      <el-input v-model="selectWg.placeholder"></el-input>
    </el-form-item>
    <el-form-item label="文本内容" v-if="selectWg.type==='staticText'">
      <Editor v-model="selectWg.value" />
    </el-form-item>
    <el-form-item label="跳转地址(空或格式错误都不会跳转)" v-if="$util.hasKey(selectWg,'link')">
      <el-input v-model="selectWg.link" @change="isLink"></el-input>
    </el-form-item>
    <el-form-item label="是否单选" v-if="$util.hasKey(selectWg,'isRadio')">
      <el-switch v-model="selectWg.isRadio" @change="isRadio"></el-switch>
    </el-form-item>
    <el-form-item label="默认选中" v-if="selectWg.type==='switch'">
      <el-switch v-model="selectWg.value"></el-switch>
    </el-form-item>
    <el-form-item label="按钮文字" v-if="$util.hasKey(selectWg,'btnText')">
      <el-input v-model="selectWg.btnText"></el-input>
    </el-form-item>
    <el-form-item label="按钮类型" v-if="$util.hasKey(selectWg,'btnType')">
      <el-select v-model="selectWg.btnType" filterable placeholder="请选择">
        <el-option v-for="item in selectWg.btnTypes" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="选项" v-if="$util.hasKey(selectWg,'options')">
      <Draggable tag="ul" :list="selectWg.options" :group="{ name:'options'}" ghostClass="ghost" handle=".move-icon">
        <li v-for="(item, index) in selectWg.options" :key="index">
          <div class="flex align-middle">
            <el-input size="mini" v-model="selectWg.options[index]"></el-input>
            <i class="el-icon-menu move-icon"></i>
            <i class="el-icon-delete delect-icon" @click="handleOptionsRemove(index)"></i>
          </div>
        </li>
      </Draggable>
      <div style="margin-left: 22px;">
        <el-button type="text" @click="handleAddOption()">添加选项</el-button>
      </div>
    </el-form-item>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import Draggable from 'vuedraggable'
import Editor from '@/components/editor'

import allFieldTypes from '@/assets/js/field-types.js'
export default {
  components: {
    Draggable, Editor
  },
  props: {
    selectWg: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      fieldTypes: allFieldTypes,
      editorOption: {
        modules: {
          toolbar: '#toolbar'
        }
      }
    }
  },
  computed: {
    ...mapState({
      pageData: state => state.common.pageData,
      wgConfig: state => state.common.wgConfig
    })
  },
  methods: {
    isLink(val) {
      let isLink = this.$util.isLink(val);
      if (!isLink) this.$message.error('请输入正确的网址');
    },
    isRadio(flag) {
      this.selectWg.value = flag ? "" : []
    },
    selectfield(key, types) {
      let selectItem = types.find(item => key === item.value);
      this.selectWg.label.labelTitle = selectItem.label;
      this.selectWg.options ? this.selectWg.options = selectItem.options : "";
      if (this.$util.hasKey(this.selectWg, 'placeholder')) {
        this.selectWg.placeholder = this.selectWg.type === "input" ? `请输入${selectItem.label}` : `请选择${selectItem.label}`;
      }
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