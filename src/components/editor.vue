<template>
  <quill-editor ref="myTextEditor" v-model="model" :options="editorOption">
    <div id="toolbar" slot="toolbar">
      <button class="ql-color-picker">
        <el-color-picker size="mini" @change="pickerColor" />
      </button>
      <button class="ql-bold"></button>
      <!-- <button class="ql-italic"></button> -->
      <button class="ql-link"></button>
      <select class="ql-align"></select>
      <select class="ql-size">
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
      <select class="ql-textIndent">
        <option value="0em"></option>
        <option value="1em"></option>
        <option value="2em"></option>
        <option value="3em"></option>
        <option value="4em"></option>
        <option value="5em"></option>
      </select>
      <button class="ql-underline"></button>
      <button class="ql-strike"></button>

      <button class="ql-list" value="ordered"></button>
      <button class="ql-list" value="bullet"></button>

      <!-- Add subscript and superscript buttons -->
      <!-- <button class="ql-script" value="sub"></button>
      <button class="ql-script" value="super"></button>-->
      <!-- You can also add your own -->
      <!-- <button id="custom-button">[ Click me ]</button> -->
    </div>
  </quill-editor>
</template>

<script>
export default {
  props: {
    value: String
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
              'link': function (value) {
                if (value) {
                  var href = prompt('Enter the URL');
                  this.quill.format('link', href);
                } else {
                  this.quill.format('link', false);
                }
              }
            }
          }
        }
      }
    }
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    },
    editor() {
      return this.$refs.myTextEditor.quill
    }
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
    }
  }
}
</script>

<style>
</style>