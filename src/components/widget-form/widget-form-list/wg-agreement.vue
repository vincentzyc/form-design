<template>
  <div class="wg-agreement clearfix wg-padding">
    <el-checkbox v-model="item.value" :style="item.style">
      <p :style="{color:item.style.color}">
        <span>{{item.tipText}}</span>
        <span v-for="(titleText,key) in item.titleTexts" :key="key">
          <span v-if="key>0">和</span>
          <span :style="{color:item.agreementColor}" v-if="titleText.title">{{titleText.title}}</span>
        </span>
      </p>
    </el-checkbox>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>