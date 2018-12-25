<template>
  <div class="widget-view" :class="{active: selectWg.key === item.key,'widget-view-imgshow':item.type === 'imgshow'}" @click="handleSelectWidget(index)">
    <div v-if="item.type === 'phone'" class="wg-phone" :style="item.style">
      <div class="wg-item" :class="[item.labelPosition==='top'?'flex-column':'align-middle']">
        <div class="wg-title" v-show="item.showLabel">{{item.title}}</div>
        <div class="flex-auto">
          <input class="wg-input" v-model="item.value" :placeholder="item.placeholder">
        </div>
      </div>
      <div class="flex" v-if="item.showCode">
        <input placeholder="验证码" class="wg-input flex-auto">
        <button class="getVerCode-btn">获取验证码</button>
      </div>
    </div>

    <div v-if="item.type === 'input'" class="wg-item" :class="[item.labelPosition==='top'?'flex-column':'align-middle']" :style="item.style">
      <div class="wg-title" v-show="item.showLabel">{{item.title}}</div>
      <div class="flex-auto">
        <input v-model="item.value" :placeholder="item.placeholder" class="wg-input">
      </div>
    </div>

    <div
      v-if="item.type === 'checkbox'"
      class="wg-item flex-wrap wg-checkbox"
      :class="[item.labelPosition==='top'?'flex-column':'align-middle']"
      :style="item.style"
    >
      <div class="wg-title">{{item.title}}</div>
      <div class="flex-auto">
        <label class="label" v-for="(optionsItem, key) in item.options" :key="optionsItem + key">
          <input class="wg-checkbox-input" :type="item.isRadio?'radio':'checkbox'" :value="optionsItem" v-model="item.value" style="display:none">
          <span>{{optionsItem}}</span>
        </label>
      </div>
    </div>

    <div v-if="item.type === 'select'" class="wg-item" :class="[item.labelPosition==='top'?'flex-column':'align-middle']" :style="item.style">
      <div class="wg-title" v-show="item.showLabel">{{item.title}}</div>
      <div class="flex-auto">
        <select v-model="item.value" class="wg-select flex-auto">
          <option value disabled selected hidden>{{item.placeholder}}</option>
          <option v-for="item in item.options" :key="item" :value="item" :label="item.showLabel?item.label:item"></option>
        </select>
      </div>
    </div>

    <div v-if="item.type==='switch'" class="wg-item wg-switch" :class="[item.labelPosition==='top'?'flex-column':'align-middle']" :style="item.style">
      <div class="wg-title">{{item.title}}</div>
      <label class="label">
        <input type="checkbox" class="wg-switch-input" v-model="item.value" style="display:none">
        <span class="wg-switch-core"></span>
      </label>
    </div>

    <div v-if="item.type === 'date'" class="wg-item" :class="[item.labelPosition==='top'?'flex-column':'align-middle']" :style="item.style">
      <div class="wg-title">{{item.title}}</div>
      <div class="flex-auto">
        <input type="date" v-model="item.value" class="wg-input flex-auto">
      </div>
    </div>

    <div class="flex flex-center" v-if="item.type === 'imgshow'" :style="item.style">
      <img v-if="item.value" :src="item.value" alt="图片展示" width="100%">
      <img v-else src="@/assets/img/img-placeholder.png" alt="图片展示">
    </div>

    <div class="flex flex-center" v-if="item.type === 'button'" :style="item.style">
      <button class="wg-button">{{item.btnText}}</button>
    </div>

    <div v-if="item.type === 'staticText'" class="wg-staticText" :style="item.style">
      <p :style="item.style">{{item.value}}</p>
    </div>

    <el-button title="删除" @click.stop="handleWidgetDelete(index)" class="widget-action-delete" v-if="selectWg.key === item.key" circle plain type="danger">删除</el-button>
    <el-button title="复制" @click.stop="handleWidgetClone(index)" class="widget-action-clone" v-if="selectWg.key === item.key" circle plain type="primary">复制</el-button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    item: Object,
    index: Number
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      selectWg: state => state.common.selectWg,
      pageData: state => state.common.pageData
    })
  },
  methods: {
    handleSelectWidget(index) {
      this.$store.commit('setSelectWg', this.pageData.list[index])
    },
    handleWidgetDelete(index) {
      if (this.pageData.list.length - 1 === index) {
        if (index === 0) {
          this.$store.commit('setSelectWg', {})
        } else {
          this.$store.commit('setSelectWg', this.pageData.list[index - 1])
        }
      } else {
        this.$store.commit('setSelectWg', this.pageData.list[index + 1])
      }
      this.$nextTick(() => {
        this.pageData.list.splice(index, 1)
      })
    },
    handleWidgetClone(index) {
      let cloneData = this.$api.deepClone(this.pageData.list[index]);
      cloneData.key = this.pageData.list[index].type + '_' + Date.parse(new Date()) + '_' + Math.ceil(Math.random() * 99999)
      this.pageData.list.splice(index, 0, cloneData)
      this.$nextTick(() => {
        this.$store.commit('setSelectWg', this.pageData.list[index + 1])
      })
    },
  }
}
</script>
