<template>
  <quill-editor v-model="model" :options="editorOption">
    <div id="toolbar" slot="toolbar">
      <button class="ql-bold">Bold</button>
      <button class="ql-italic">Italic</button>
      <button class="ql-color"></button>
      <select class="ql-align"></select>
      <button class="ql-link"></button>
      <!-- <select class="ql-fontsize">
        <option selected value="12px"></option>
        <option value="14px"></option>
        <option value="16px"></option>
        <option value="18px"></option>
        <option value="20px"></option>
        <option value="24px"></option>
        <option value="36px"></option>
        <option value="48px"></option>
      </select> -->
      <!-- <el-color-picker v-model="selectWg" /> -->
      <!-- <select class="ql-size">
        <option value="small"></option>
        <option selected></option>
        <option value="large"></option>
        <option value="huge"></option>
      </select>
      <select class="ql-fontsize">
        <option selected value="12px"></option>
        <option value="14px"></option>
        <option value="20px"></option>
      </select>-->
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
                  // this.quill.format('color', 'red');
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
    }
  },
}
</script>

<style>
</style>