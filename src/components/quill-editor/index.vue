<template>
  <quill-editor ref="myTextEditor" v-model="model" :options="editorOption">
    <div id="toolbar" slot="toolbar">
      <el-tooltip class="item" effect="dark" content="文字颜色" placement="top">
        <span class="ql-color-picker">
          <el-color-picker :predefine="predefineColors" size="mini" @active-change="pickerColor" />
        </span>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="加粗" placement="top">
        <button class="ql-bold"></button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="斜体" placement="top">
        <button class="ql-italic"></button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="文字大小" placement="top">
        <span>
          <select class="ql-size">
            <option value="8px"></option>
            <option value="10px"></option>
            <option value="12px"></option>
            <option value="14px"></option>
            <option value="16px"></option>
            <option value="18px"></option>
            <option value="20px"></option>
            <option value="24px"></option>
            <option value="36px"></option>
            <option value="48px"></option>
            <option value="64px"></option>
          </select>
        </span>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="对齐方式" placement="top">
        <span>
          <select class="ql-align"></select>
        </span>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="行高" placement="top">
        <span>
          <select class="ql-lineHeight">
            <option value="1"></option>
            <option value="1.25"></option>
            <option value="1.5"></option>
            <option value="1.75"></option>
            <option value="2"></option>
            <option value="3"></option>
          </select>
        </span>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="缩进" placement="top">
        <span>
          <select class="ql-textIndent el-icon-s-fold">
            <option value="0em"></option>
            <option value="1em"></option>
            <option value="2em"></option>
            <option value="3em"></option>
            <option value="4em"></option>
            <option value="5em"></option>
          </select>
        </span>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="下划线" placement="top">
        <button class="ql-underline"></button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="删除线" placement="top">
        <button class="ql-strike"></button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="链接" placement="top">
        <button class="ql-link"></button>
      </el-tooltip>
      <!-- <button class="ql-list" value="ordered"></button>
      <button class="ql-list" value="bullet"></button>-->

      <!-- Add subscript and superscript buttons -->
      <!-- <button class="ql-script" value="sub"></button>
      <button class="ql-script" value="super"></button>-->
      <!-- You can also add your own -->
      <!-- <button id="custom-button">[ Click me ]</button> -->
    </div>
  </quill-editor>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props: {
    value: String,
  },
  data() {
    return {
      // selectWg:"",
      editorOption: {
        placeholder: '请输入文本',
        modules: {
          toolbar: {
            container: '#toolbar',
            handlers: {
              link: function (value) {
                if (value) {
                  var href = prompt('请输入链接');
                  this.quill.format('link', href);
                } else {
                  this.quill.format('link', false);
                }
              },
              lineHeight: function (value) {
                if (value) {
                  this.quill.format('lineHeight', value);
                }
              },
            },
          },
        },
      },
    };
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
    ...mapState({
      predefineColors: state => state.common.predefineColors,
    }),
    editor() {
      return this.$refs.myTextEditor.quill;
    },
  },
  methods: {
    // pickerFontsize(v) {
    //   console.log(this.editor);
    //   // let selection = this.editor.getSelection();
    //   // let selectedIndex = v.target.selectedIndex;
    //   // let value = v.target.options[selectedIndex].value;
    //   // this.editor.formatText(selection.index, selection.length, 'font-size', value);
    //   // this.editor.format('font', 20);
    // },
    pickerColor(v) {
      this.editor.format('color', v);
    },
  },
};
</script>

<style></style>
