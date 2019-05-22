<template>
  <section>
    <el-form-item label="文本对齐方式" v-if="selectWg.style.hasOwnProperty('textAlign')">
      <el-radio-group v-model="selectWg.style.textAlign" size="mini">
        <el-radio-button label="left">左对齐</el-radio-button>
        <el-radio-button label="center">居中对齐</el-radio-button>
        <el-radio-button label="right">右对齐</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="文字大小(px)" v-if="selectWg.style.hasOwnProperty('fontSize')">
      <el-input-number v-model="selectWg.style.fontsize" :min="10" :max="30" size="small" @change="val=>selectWg.style.fontSize = `${val}px`"/>
    </el-form-item>
    <el-form-item label="文字颜色" v-if="selectWg.style.hasOwnProperty('color')">
      <el-color-picker v-model="selectWg.style.color"/>
    </el-form-item>
    <el-form-item label="线条颜色" v-if="selectWg.style.hasOwnProperty('borderColor')">
      <el-color-picker v-model="selectWg.style.borderColor"/>
    </el-form-item>
    <el-form-item label="线条类型" v-if="selectWg.style.hasOwnProperty('borderStyle')">
      <el-radio-group v-model="selectWg.style.borderStyle" size="mini" @change="val=>selectWg.style.borderTopWidth=val==='double'?'3px':'1px'">
        <el-radio-button label="dotted">点线</el-radio-button>
        <el-radio-button label="dashed">虚线</el-radio-button>
        <el-radio-button label="solid">实线</el-radio-button>
        <el-radio-button label="double">双实线</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="边距（上 右 下 左 、空格隔开）" v-if="selectWg.style.hasOwnProperty('margin')">
      <el-input v-model="selectWg.style.margin"></el-input>
    </el-form-item>
    <el-form-item label="按钮背景色" v-if="selectWg.style.hasOwnProperty('btnStyle')">
      <el-color-picker v-model="selectWg.style.btnStyle.background"/>
    </el-form-item>
    <el-form-item label="每项宽度" v-if="selectWg.hasOwnProperty('itemWidth')">
      <el-input-number v-model="selectWg.itemWidth" :min="10" size="small"/>
    </el-form-item>
    <el-form-item label="显示个数" v-if="selectWg.hasOwnProperty('showNumber')">
      <el-input-number v-model="selectWg.showNumber" :min="1" size="small"/>
    </el-form-item>
    <template v-if="selectWg.hasOwnProperty('pickerStyle')">
      <el-form-item label="选中后文字颜色">
        <el-color-picker v-model="selectWg.pickerStyle.color"/>
      </el-form-item>
      <el-form-item label="选中后文字大小(px)">
        <el-input-number
          v-model="selectWg.pickerStyle.fontsize"
          :min="10"
          :max="30"
          size="small"
          @change="val=>selectWg.pickerStyle.fontSize = `${val}px`"
        />
      </el-form-item>
    </template>
  </section>
</template>
<script>
export default {
  props: {
    selectWg: {
      type: Object,
      required: true
    }
  }
}
</script>