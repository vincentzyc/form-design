<template>
  <section>
    <el-form-item label="宽度(%)" v-if="selectWg.style.hasOwnProperty('percentWidth')">
      <el-slider
        class="pd-l10 pd-r10"
        v-model="selectWg.style.percentWidth"
        :format-tooltip="formatTooltip"
        @input="val=>selectWg.style.width = `${val}%`"
      ></el-slider>
    </el-form-item>
    <el-form-item label="宽度(px)" v-if="selectWg.style.hasOwnProperty('pxWidth')">
      <el-input-number
        v-model="selectWg.style.pxWidth"
        :precision="0"
        :step="5"
        :min="0"
        :max="375"
        step-strictly
        size="small"
        @change="val=>selectWg.style.width = `${val}px`"
      />
    </el-form-item>
    <el-form-item label="高度(px)" v-if="selectWg.style.hasOwnProperty('pxHeight')">
      <el-input-number
        v-model="selectWg.style.pxHeight"
        :precision="0"
        :step="5"
        :min="0"
        size="small"
        @change="v=>selectWg.style.height=v+'px'"
      />
    </el-form-item>

    <el-form-item label="文字颜色" v-if="selectWg.style.hasOwnProperty('color')">
      <el-color-picker :predefine="predefineColors" show-alpha v-model="selectWg.style.color" />
    </el-form-item>

    <el-form-item label="对齐方式" v-if="selectWg.style.hasOwnProperty('textAlign')">
      <el-radio-group v-model="selectWg.style.textAlign" size="mini">
        <el-radio-button label="left">左</el-radio-button>
        <el-radio-button label="center">居中</el-radio-button>
        <el-radio-button label="right">右</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="文本行高(px)" v-if="selectWg.style.hasOwnProperty('lineheight')">
      <el-input-number
        v-model="selectWg.style.lineheight"
        :min="10"
        :max="200"
        size="small"
        @change="v=>selectWg.style.lineHeight=v+'px'"
      />
    </el-form-item>
    <el-form-item label="文字大小(px)" v-if="selectWg.style.hasOwnProperty('fontSize')">
      <el-input-number
        v-model="selectWg.style.fontsize"
        :min="10"
        :max="50"
        :step="1"
        step-strictly
        size="small"
        @change="val=>selectWg.style.fontSize = `${val}px`"
      />
    </el-form-item>
    <el-form-item label="线条颜色" v-if="selectWg.style.hasOwnProperty('borderColor')">
      <el-color-picker :predefine="predefineColors" show-alpha v-model="selectWg.style.borderColor" />
    </el-form-item>
    <el-form-item label="线条类型" v-if="selectWg.style.hasOwnProperty('borderStyle')">
      <el-radio-group
        v-model="selectWg.style.borderStyle"
        size="mini"
        @change="val=>selectWg.style.borderTopWidth=val==='double'?'3px':'1px'"
      >
        <el-radio-button label="dotted">点线</el-radio-button>
        <el-radio-button label="dashed">虚线</el-radio-button>
        <el-radio-button label="solid">实线</el-radio-button>
        <el-radio-button label="double">双实线</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="背景颜色" v-if="selectWg.style.hasOwnProperty('backgroundColor')">
      <el-color-picker :predefine="predefineColors" show-alpha v-model="selectWg.style.backgroundColor" />
    </el-form-item>
    <el-form-item label="背景颜色" v-if="selectWg.hasOwnProperty('backgroundColor')">
      <el-color-picker :predefine="predefineColors" show-alpha v-model="selectWg.backgroundColor" />
    </el-form-item>
    <el-form-item label="背景图片" v-if="selectWg.hasOwnProperty('backgroundImage')">
      <FileUpload :value.sync="selectWg.backgroundImage" />
    </el-form-item>
    <el-form-item label="左边距(px)" v-if="selectWg.style.hasOwnProperty('marginleft')">
      <el-input-number
        v-model="selectWg.style.marginleft"
        :min="0"
        :step="1"
        step-strictly
        size="small"
        @change="val=>selectWg.style.marginLeft= `${val}px`"
      />
    </el-form-item>
    <el-form-item label="上边距(px)" v-if="selectWg.style.hasOwnProperty('margintop')">
      <el-input-number
        v-model="selectWg.style.margintop"
        :min="0"
        :step="1"
        step-strictly
        size="small"
        @change="val=>selectWg.style.marginTop = `${val}px`"
      />
    </el-form-item>
    <el-form-item label="外边距（上 右 下 左 、空格隔开）" v-if="selectWg.style.hasOwnProperty('margin')">
      <el-input v-model="selectWg.style.margin"></el-input>
    </el-form-item>
    <el-form-item label="内边距（上 右 下 左 、空格隔开）" v-if="selectWg.style.hasOwnProperty('padding')">
      <el-input v-model="selectWg.style.padding"></el-input>
    </el-form-item>

    <el-form-item label="使用图片按钮" v-if="selectWg.style.hasOwnProperty('isImgBtn')">
      <el-switch v-model="selectWg.style.isImgBtn"></el-switch>
    </el-form-item>
    <el-form-item label="按钮样式：" v-if="selectWg.style.hasOwnProperty('btnStyle')">
      <el-form-item label="上传按钮图片" v-if="selectWg.style.isImgBtn">
        <FileUpload :value.sync="selectWg.style.value" />
      </el-form-item>
      <div v-else>
        <el-form-item label="按钮背景色" v-if="selectWg.style.btnStyle.hasOwnProperty('backgroundColor')">
          <el-color-picker :predefine="predefineColors" show-alpha v-model="selectWg.style.btnStyle.backgroundColor" />
        </el-form-item>
        <el-form-item label="按钮文字色" v-if="selectWg.style.btnStyle.hasOwnProperty('color')">
          <el-color-picker :predefine="predefineColors" show-alpha v-model="selectWg.style.btnStyle.color" />
        </el-form-item>
        <el-form-item label="按钮边框色" v-if="selectWg.style.btnStyle.hasOwnProperty('borderColor')">
          <el-color-picker :predefine="predefineColors" show-alpha v-model="selectWg.style.btnStyle.borderColor" />
        </el-form-item>
        <el-form-item label="按钮文字大小(px)" v-if="selectWg.style.btnStyle.hasOwnProperty('fontSize')">
          <el-input-number
            v-model="selectWg.style.btnStyle.fontsize"
            :min="10"
            :max="30"
            :step="1"
            step-strictly
            size="small"
            @change="val=>selectWg.style.btnStyle.fontSize = `${val}px`"
          />
        </el-form-item>
        <el-form-item label="按钮圆角" v-if="selectWg.style.btnStyle.hasOwnProperty('borderradius')">
          <el-input-number
            v-model="selectWg.style.btnStyle.borderradius"
            :min="0"
            :max="30"
            :step="1"
            step-strictly
            size="small"
            @change="val=>selectWg.style.btnStyle.borderRadius = `${val}px`"
          />
        </el-form-item>
      </div>
    </el-form-item>
    <el-form-item label="表单边框大小" v-if="selectWg.style.hasOwnProperty('borderwidth')">
      <el-input-number
        v-model="selectWg.style.borderwidth"
        :min="0"
        :max="15"
        :step="1"
        step-strictly
        size="small"
        @change="val=>selectWg.style.borderWidth = `${val}px`"
      />
    </el-form-item>
    <el-form-item label="表单边框颜色" v-if="selectWg.style.hasOwnProperty('borderColor')&&selectWg.style.borderwidth>0">
      <el-color-picker :predefine="predefineColors" show-alpha v-model="selectWg.style.borderColor" />
    </el-form-item>
    <el-form-item label="表单区域圆角" v-if="selectWg.style.hasOwnProperty('borderradius')">
      <el-input-number
        v-model="selectWg.style.borderradius"
        :min="0"
        :max="30"
        :step="1"
        step-strictly
        size="small"
        @change="val=>selectWg.style.borderRadius = `${val}px`"
      />
    </el-form-item>

    <el-form-item label="每项宽度" v-if="selectWg.hasOwnProperty('itemWidth')">
      <el-input-number v-model="selectWg.itemWidth" :min="10" size="small" />
    </el-form-item>
    <el-form-item label="显示个数" v-if="selectWg.hasOwnProperty('showNumber')">
      <el-input-number v-model="selectWg.showNumber" :min="1" size="small" />
    </el-form-item>
    <template v-if="selectWg.hasOwnProperty('pickerStyle')">
      <el-form-item label="选中后文字颜色">
        <el-color-picker :predefine="predefineColors" show-alpha v-model="selectWg.pickerStyle.color" />
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
import { mapState } from 'vuex';
export default {
  props: {
    selectWg: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState({
      predefineColors: state => state.common.predefineColors
    })
  },
}
</script>